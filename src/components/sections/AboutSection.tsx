"use client";
import { useEffect } from "react";
import { registerGSAP, animateFadeUp } from "@/lib/gsap-animations";
import { StatCounter } from "@/components/ui/StatCounter";
import { ShinyButton } from "@/components/ui/shiny-button";

export function AboutSection() {
  useEffect(() => {
    registerGSAP();
    animateFadeUp(".about-text", 0.1);
  }, []);

  return (
    <section id="about" className="px-6 md:px-10 py-20 md:py-30" style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div
        className="about-text"
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
        About
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2
            className="about-text"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "#fdf2f8",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Data that tells a story.
            <span style={{ color: "#be185d" }}> Insights</span> that drive action.
          </h2>

          <p
            className="about-text"
            style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1rem", marginBottom: 16 }}
          >
            I&apos;m Nithya Reddy Vemula - a data analyst with 3+ years of experience turning
            complex, multi-source data into actionable business insights across healthcare
            workforce and consumer banking analytics.
          </p>

          <p
            className="about-text"
            style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1rem" }}
          >
            From automating federal DOL compliance workflows at Dallas College to detecting
            fraud patterns at JPMorgan Chase, I bring deep SQL expertise, cloud data
            engineering skills, and a passion for data storytelling through Tableau and Power BI.
          </p>

          <div className="about-text" style={{ marginTop: 28 }}>
            <ShinyButton
              href="/resume.pdf"
              download
              style={{ padding: "10px 24px", fontSize: "0.82rem" }}
            >
              ↓ Download Resume
            </ShinyButton>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {[
            { value: 3, suffix: "+", label: "Years Experience", color: "#be185d" },
            { value: 35, suffix: "%", label: "Error Reduction", color: "#7c2d6b" },
            { value: 70, suffix: "%", label: "Stakeholder Adoption", color: "#f9a8d4" },
            { value: 150, suffix: "+", label: "Students Trained", color: "#be185d" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="about-text"
              style={{
                background: "#0f060f",
                border: "1px solid #4a134066",
                borderRadius: 16,
                padding: "20px 16px",
                textAlign: "center",
              }}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                color={stat.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
