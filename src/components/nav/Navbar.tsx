"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Experience", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLinkClick = (link: string) => {
    setMenuOpen(false);
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300"
      style={{
        padding: "16px 24px",
        background: scrolled ? "rgba(8,3,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(74,19,64,0.4)" : "none",
      }}
    >
      <div className="flex items-center gap-3">
        <img
          src="/resized.png"
          alt="Nithya Reddy"
          className="rounded-full object-cover"
          style={{
            width: 36,
            height: 36,
            border: "2px solid #be185d44",
            boxShadow: "0 0 12px #be185d33",
          }}
        />
        <span
          className="hidden sm:inline"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 900,
            fontSize: "1.1rem",
            color: "#f9a8d4",
            letterSpacing: "0.1em",
          }}
        >
          NR
        </span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex" style={{ gap: 32 }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-rose-noir-blossom"
            style={{ color: "#94a3b8", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f9a8d4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1.5"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span
          className="block w-6 h-0.5 transition-all duration-300"
          style={{
            background: "#f9a8d4",
            transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none",
          }}
        />
        <span
          className="block w-6 h-0.5 transition-all duration-300"
          style={{
            background: "#f9a8d4",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          className="block w-6 h-0.5 transition-all duration-300"
          style={{
            background: "#f9a8d4",
            transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none",
          }}
        />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 flex flex-col items-center gap-6 py-8"
          style={{
            background: "rgba(8,3,8,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(74,19,64,0.4)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "#94a3b8", background: "none", border: "none", cursor: "pointer" }}
              onClick={() => handleLinkClick(link)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f9a8d4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
