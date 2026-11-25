"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Subtle fade/slide-in for below-the-fold sections.
 * Skips the first in-view section (hero) and does nothing when
 * the user prefers reduced motion or JavaScript never runs.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const toReveal = sections.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.88);
    if (!toReveal.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-inview");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of toReveal) {
      el.classList.add("reveal");
      io.observe(el);
    }

    return () => {
      io.disconnect();
      for (const el of toReveal) el.classList.remove("reveal", "is-inview");
    };
  }, [pathname]);

  return null;
}
