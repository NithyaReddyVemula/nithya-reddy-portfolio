"use client";
import { useRef } from "react";
import type { Project } from "@/types";
import { ShinyButton } from "@/components/ui/shiny-button";

interface Props {
  project: Project;
}

export function ProjectCard3D({ project }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    card.style.transform = `perspective(1000px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateZ(10px)`;
    card.style.transition = "transform 0.1s ease";
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
      cardRef.current.style.transition = "transform 0.5s ease";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 20px 60px ${project.color}33, 0 0 0 1px ${project.color}44`;
      }}
      style={{
        background: "#0f060f",
        border: `1.5px solid ${project.color}44`,
        borderRadius: 20,
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          height: 100,
          background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}44 100%)`,
          borderBottom: `1px solid ${project.color}33`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "0.65rem",
            fontWeight: 700,
            color: project.color,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            textAlign: "center",
            padding: "0 16px",
          }}
        >
          {project.tagline}
        </div>
      </div>

      <div className="p-5 md:p-7">
        <h3
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "1.2rem",
            fontWeight: 900,
            color: "#fdf2f8",
            marginBottom: 10,
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "0.82rem",
            lineHeight: 1.6,
            marginBottom: 16,
          }}
        >
          {project.description}
        </p>

        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 8, marginBottom: 20 }}
        >
          {project.metrics.map((m) => (
            <div key={m.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 900,
                  color: project.color,
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: "0.55rem",
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginTop: 2,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                background: `${project.color}22`,
                border: `1px solid ${project.color}44`,
                color: project.color,
                padding: "3px 10px",
                borderRadius: 4,
                fontSize: "0.65rem",
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 700,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <ShinyButton
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1, padding: "10px", fontSize: "0.75rem" }}
          >
            Live Demo ↗
          </ShinyButton>
          <ShinyButton
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1, padding: "10px", fontSize: "0.75rem" }}
          >
            GitHub ↗
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}
