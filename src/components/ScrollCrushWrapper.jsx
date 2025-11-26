"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCrushWrapper({ Hero, children }) {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const originalHeight = hero.offsetHeight;

    gsap.fromTo(
      hero,
      { height: originalHeight },
      {
        height: originalHeight * 0.45,  // crush more for full effect
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          scroller: document.body,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      }
    );
  }, []);

  return (
    <div className="relative">
      {/* FULL-WIDTH HERO — no rounding, no shadow */}
      <div
        ref={heroRef}
        className="overflow-hidden w-full"
        style={{
          borderRadius: "0px",
          boxShadow: "none",
        }}
      >
        {Hero}
      </div>

      {/* Push Explore Section down a little */}
      <div className="relative z-20 pt-12">{children}</div>
    </div>
  );
}
