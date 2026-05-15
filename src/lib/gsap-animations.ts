"use client";

/* ─── All animations use IntersectionObserver + CSS transitions ─── */
/* No GSAP dependency - eliminates StrictMode double-invocation issues */

export function registerGSAP() {
  /* no-op: kept for API compatibility with existing callers */
}

/* ─── Fade-Up: rock-solid IntersectionObserver + CSS transition ─── */
export function animateFadeUp(selector: string, stagger = 0.15) {
  if (typeof window === "undefined") return;
  const elements = Array.from(
    document.querySelectorAll(selector)
  ) as HTMLElement[];
  if (!elements.length) return;

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
  });

  let triggered = false;
  const observer = new IntersectionObserver(
    (entries) => {
      if (triggered) return;
      if (!entries.some((e) => e.isIntersecting)) return;
      triggered = true;
      observer.disconnect();
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.style.transition = "opacity 0.75s ease, transform 0.75s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, i * stagger * 1000);
      });
    },
    { threshold: 0.05 }
  );

  if (elements[0]) observer.observe(elements[0]);
}

/* ─── Skill Tags: scale-in each tag as section enters view ─── */
export function animateSkillTags(containerSelector: string) {
  if (typeof window === "undefined") return;
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const tags = Array.from(
    container.querySelectorAll(".skill-tag")
  ) as HTMLElement[];
  if (!tags.length) return;

  tags.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "scale(0.8)";
  });

  let triggered = false;
  const observer = new IntersectionObserver(
    (entries) => {
      if (triggered) return;
      if (!entries[0].isIntersecting) return;
      triggered = true;
      observer.disconnect();
      tags.forEach((el, i) => {
        setTimeout(() => {
          el.style.transition =
            "opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)";
          el.style.opacity = "1";
          el.style.transform = "scale(1)";
        }, i * 45);
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(container);
}

/* ─── Timeline: each card slides in from its side as it enters view ─── */
export function animateTimeline(containerSelector: string) {
  if (typeof window === "undefined") return;
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const items = Array.from(
    container.querySelectorAll(".timeline-item")
  ) as HTMLElement[];
  if (!items.length) return;

  items.forEach((item, i) => {
    item.style.opacity = "0";
    item.style.transform = `translateX(${i % 2 === 0 ? "-40px" : "40px"})`;
  });

  items.forEach((item) => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        item.style.transition = "opacity 0.65s ease, transform 0.65s ease";
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      },
      { threshold: 0.15 }
    );
    obs.observe(item);
  });
}

/* ─── Counter: scroll-triggered number roll via rAF ─── */
export function animateCounter(
  element: HTMLElement,
  target: number,
  suffix = ""
) {
  if (typeof window === "undefined") return;
  element.textContent = "0" + suffix;

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();

      const duration = 1500;
      const start = performance.now();

      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        element.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
}

/* ─── Hero Name: character-by-character CSS transition reveal ─── */
export function animateHeroName(element: HTMLElement) {
  if (typeof window === "undefined") return;

  const text = element.textContent || "";
  element.textContent = "";
  element.style.opacity = "1";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? " " : char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(24px)";
    element.appendChild(span);
    return span;
  });

  // Double rAF ensures the browser has painted the initial hidden state
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      chars.forEach((span, i) => {
        setTimeout(() => {
          span.style.transition =
            "opacity 0.55s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)";
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, 300 + i * 45);
      });
    });
  });
}
