"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "#0f060f",
    border: "1px solid #4a134066",
    borderRadius: 8,
    color: "#e0d0e8",
    fontSize: "0.88rem",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="px-6 md:px-10 pt-20 md:pt-30 pb-16 md:pb-20" style={{ maxWidth: 700, margin: "0 auto" }}>
      <div
        style={{
          fontSize: "0.72rem",
          color: "#be185d",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          marginBottom: 12,
          fontFamily: "var(--font-jetbrains-mono)",
        }}
      >
        Contact
      </div>
      <h2
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 900,
          color: "#fdf2f8",
          marginBottom: 16,
        }}
      >
        Let&apos;s work together.
      </h2>
      <p style={{ color: "#94a3b8", marginBottom: 48, fontSize: "1rem" }}>
        Open to Data Analyst, Business Intelligence and Analytics Engineering
        opportunities across full-time, consulting, and contract roles.
      </p>

      {sent ? (
        <div
          style={{
            textAlign: "center",
            padding: 60,
            color: "#6ee7b7",
            fontWeight: 700,
            fontSize: "1.1rem",
          }}
        >
          ✓ Message sent! I&apos;ll get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <input
            style={inputStyle}
            type="text"
            placeholder="Your name"
            required
            onFocus={(e) => (e.target.style.borderColor = "#be185d")}
            onBlur={(e) => (e.target.style.borderColor = "#4a134066")}
          />
          <input
            style={inputStyle}
            type="email"
            placeholder="Your email"
            required
            onFocus={(e) => (e.target.style.borderColor = "#be185d")}
            onBlur={(e) => (e.target.style.borderColor = "#4a134066")}
          />
          <textarea
            style={{ ...inputStyle, height: 140, resize: "vertical" }}
            placeholder="Your message"
            required
            onFocus={(e) => (e.target.style.borderColor = "#be185d")}
            onBlur={(e) => (e.target.style.borderColor = "#4a134066")}
          />
          <ShinyButton type="submit" style={{ width: "100%", fontSize: "0.9rem" }}>
            Send Message
          </ShinyButton>
        </form>
      )}

      <div
        className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
        style={{ marginTop: 60 }}
      >
        {[
          { label: "LinkedIn", url: "https://www.linkedin.com/in/nithyareddyvemula/", external: true },
          { label: "GitHub", url: "https://github.com/NithyaReddyVemula", external: true },
          { label: "Email", url: "mailto:nithyareddyvemula72@gmail.com", external: false },
        ].map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-xs font-bold uppercase tracking-wider transition-colors duration-200 hover:text-rose-noir-blossom"
            style={{
              color: "#64748b",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f9a8d4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 60,
          fontSize: "0.72rem",
          color: "#4a1340",
        }}
      >
        © 2026 Nithya Reddy Vemula
      </div>
    </section>
  );
}
