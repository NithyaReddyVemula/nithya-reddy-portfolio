"use client";
import { useEffect } from "react";
import { registerGSAP, animateSkillTags } from "@/lib/gsap-animations";
import { SKILLS } from "@/lib/projects-data";

const CLUSTERS = {
  analytics: { label: "Analytics & Data", color: "#be185d" },
  visualization: { label: "Visualization", color: "#7c2d6b" },
  cloud: { label: "Cloud & Data Eng", color: "#7c3aed" },
  healthcare: { label: "ML & Tools", color: "#ec4899" },
} as const;

export function SkillsSection() {
  useEffect(() => {
    registerGSAP();
    animateSkillTags("#skills");
  }, []);

  return (
    <section id="skills" className="px-6 md:px-10 py-20 md:py-30" style={{ maxWidth: 1100, margin: "0 auto" }}>
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
        Skills
      </div>
      <h2
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 900,
          color: "#fdf2f8",
          marginBottom: 60,
        }}
      >
        The full stack of a data analyst.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {(
          Object.entries(CLUSTERS) as [
            keyof typeof CLUSTERS,
            { label: string; color: string }
          ][]
        ).map(([cluster, meta]) => {
          const clusterSkills = SKILLS.filter((s) => s.cluster === cluster);
          return (
            <div
              key={cluster}
              style={{
                background: "#0f060f",
                border: `1px solid ${meta.color}44`,
                borderRadius: 16,
                padding: "24px 20px",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  color: meta.color,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                  fontFamily: "var(--font-jetbrains-mono)",
                }}
              >
                {meta.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {clusterSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-tag"
                    style={{
                      background: `${meta.color}22`,
                      border: `1px solid ${meta.color}55`,
                      color: meta.color,
                      padding: "6px 14px",
                      borderRadius: 20,
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      cursor: "default",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${meta.color}44`;
                      e.currentTarget.style.boxShadow = `0 0 12px ${meta.color}66`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${meta.color}22`;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
