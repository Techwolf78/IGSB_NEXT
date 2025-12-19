"use client";

import React, { useEffect, useRef } from "react";
import ProgramList from "./ProgramList";
import ApplyForm from "./ApplyForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AcademicYearSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    gsap.fromTo(
      sec.querySelectorAll(".fade-up"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      sec.querySelectorAll(".fade-left"),
      { autoAlpha: 0, x: -50 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec.querySelector(".left-content"),
          start: "top 90%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      sec.querySelectorAll(".fade-right"),
      { autoAlpha: 0, x: 50 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec.querySelector(".right-content"),
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-4">
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1
          md:grid-cols-10
          gap-7
          px-4 md:px-8
        "
      >
        {/* LEFT: Program List */}
        <div className="md:col-span-7 w-full h-full left-content fade-left">
          <ProgramList />
        </div>

        {/* RIGHT: Apply Form */}
        <div className="md:col-span-3 w-full h-full flex right-content fade-right">
          <ApplyForm />
        </div>
      </div>
    </div>
  );
};

export default AcademicYearSection;
