"use client";

import { useEffect, useRef } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { ShinyButton } from "@/components/ui/shiny-button";

export function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.style.opacity = "0";
      nameRef.current.style.transform = "translateY(16px)";
      setTimeout(() => {
        if (nameRef.current) {
          nameRef.current.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          nameRef.current.style.opacity = "1";
          nameRef.current.style.transform = "none";
        }
      }, 300);
    }

    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "0";
      subtitleRef.current.style.transform = "translateY(16px)";
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          subtitleRef.current.style.opacity = "1";
          subtitleRef.current.style.transform = "none";
        }
      }, 900);
    }
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.style.transition = "opacity 0.8s ease";
          ctaRef.current.style.opacity = "1";
        }
      }, 1150);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "#060010" }}
    >
      <Card className="w-full max-w-[1400px] min-h-[500px] md:min-h-[600px] h-auto md:h-[80vh] bg-black/[0.96] relative overflow-hidden border-rose-noir-plum/20 rounded-2xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#be185d"
        />

        <div className="flex h-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 p-6 md:p-12 relative z-10 flex flex-col justify-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 md:mb-8 w-fit"
              style={{
                border: "1px solid #be185d44",
                background: "#be185d0c",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background: "#be185d",
                  boxShadow: "0 0 10px #be185d",
                  animation: "pulse-glow 2.5s ease-in-out infinite",
                }}
              />
              <span
                className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest"
                style={{
                  color: "#f9a8d4",
                  fontFamily: "var(--font-jetbrains-mono)",
                }}
              >
                Data Analyst · Analytics Engineering · AI
              </span>
            </div>

            {/* Name */}
            <h1
              ref={nameRef}
              className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 md:mb-6"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                lineHeight: 1.1,
                letterSpacing: "0.05em",
                opacity: 0,
              }}
            >
              NITHYA REDDY
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-neutral-300 max-w-lg text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10"
            >
              Turning complex, multi-source data into actionable business
              insights - 3+ years across healthcare workforce and consumer
              banking analytics in Dallas, TX.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex gap-3 md:gap-4 flex-wrap">
              <ShinyButton
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{ padding: "12px 24px", fontSize: "0.9rem" }}
              >
                View My Work
              </ShinyButton>
              <ShinyButton
                onClick={() =>
                  document
                    .getElementById("navi")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{ padding: "12px 24px", fontSize: "0.9rem" }}
              >
                Meet N.A.V.I.
              </ShinyButton>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative min-h-[300px] md:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="text-xs uppercase tracking-widest"
          style={{
            color: "#be185d55",
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6rem",
          }}
        >
          Scroll
        </div>
        <div
          className="w-px h-9"
          style={{
            background: "linear-gradient(to bottom, #be185d88, transparent)",
          }}
        />
      </div>
    </section>
  );
}
