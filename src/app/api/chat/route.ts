import OpenAI from "openai";
import { NAVI_SYSTEM_PROMPT } from "@/lib/navi-system-prompt";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!process.env.GROQ_API_KEY) {
    return new Response(
      "N.A.V.I. is offline — API key not configured. Please contact Nithya directly!",
      { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
  const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });
  const { messages } = await req.json();

  const stream = await openai.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "system", content: NAVI_SYSTEM_PROMPT }, ...messages],
    max_tokens: 300,
    temperature: 0.7,
    stream: true,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const delta = chunk.choices[0]?.delta?.content ?? "";
        if (delta) controller.enqueue(encoder.encode(delta));
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
