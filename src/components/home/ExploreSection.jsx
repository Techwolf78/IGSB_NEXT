"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  const sectionRef = useRef(null);

  const logos = [
    { title: "NAAC Accredited", img: "/NAAC.webp" },
    { title: "Approved by AICTE", img: "/AICTE.webp" },
    { title: "Affiliated to SPPU Pune", img: "/SPPU.webp" },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".fade-target"),
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          scroller: document.body,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative z-30 pt-20 pb-20"
    >
      {/* Centered content container */}
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* HEADING */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%]">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
              Explore Your Potential with
            </h2>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#003366] mt-1 leading-tight">
              INDIRA GLOBAL SCHOOL OF BUSINESS
            </h2>
          </div>
        </div>

        {/* TEXT + LOGOS */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">
          {/* Text */}
          <div>
            <p className="fade-target text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
              Located near Pune, Indira Global School of Business one of the
              leading NAAC-accredited MBA institution that offers a rich blend of
              management education and research driven learning. Choose from
              industry focused specializations, learn from research active faculty,
              and gain practical insights through case studies, projects, and data
              driven analysis, while accessing strong placements and opportunities
              to participate in seminars, conferences, and research initiatives.
            </p>
          </div>

          {/* Logos */}
          <div className="flex gap-6 justify-start lg:justify-center items-start">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="fade-target flex items-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.img}
                  alt={logo.title}
                  width={150}
                  height={150}
                  className="object-contain drop-shadow"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExploreSection;
