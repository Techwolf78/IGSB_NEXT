"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DiscoverSection = () => {
  const sectionRef = useRef(null);

  const cards = [
    {
      title: "Get Industry-ready",
      description:
        "We ensure every graduate is industry-ready through cutting-edge curriculum, innovation labs, and strong industry collaborations that keep students aligned with the latest technologies and trends.",
      image: "/industry.JPG",
    },
    {
      title: "Research from Day One",
      description:
        "At Indira College, research is a way of life, supported by state-of-the-art facilities, experienced faculty, and collaborations that empower students to solve real-world challenges.",
      image: "/IGSB/Research/FDP/2FDP.jpg",
    },
    {
      title: "Corporate Partnerships & Recruitment",
      description:
        "We have established strong, lasting relationships with a diverse portfolio of national and multinational corporations. Benefit from recruitment drives, on-campus placements, and access to employers seeking ICEM talent.",
      image: "/CorporateRelations.JPG",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".fade-up"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative py-14 sm:py-20 px-4 md:px-8
        bg-secondary overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="fade-up text-2xl sm:text-4xl font-extrabold text-white mb-2">
          At Indira College, you will discover an
        </h2>

        <h2 className="fade-up text-2xl sm:text-4xl font-extrabold text-white mb-10 sm:mb-14">
          Energy that runs through Everything and Everyone.
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

          {cards.map((card, index) => (
            <div key={index} className="relative group fade-up">

              <div
                className="
                  relative z-10 rounded-xl
                  bg-white/90 backdrop-blur-xl
                  border border-white/20
                  shadow-[0_6px_28px_rgba(0,0,0,0.35)]
                  transition-all duration-300
                  flex flex-col
                  p-4 sm:p-5
                  hover:shadow-xl
                  sm:group-hover:-translate-y-2 sm:group-hover:-translate-x-2
                "
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={260}
                  className="
                    w-full object-cover rounded-lg mb-4
                    h-44 sm:h-52 lg:h-56
                    transition-transform duration-500
                    sm:group-hover:scale-105
                  "
                />

                <h3 className="text-gray-800 font-semibold text-base sm:text-lg mb-2 text-left">
                  {card.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed text-justify flex-grow">
                  {card.description}
                </p>

                <button
                  className="
                    mt-4 text-sm font-medium text-gray-700
                    hover:text-gray-900
                    transition
                    flex items-center gap-2
                  "
                >
                  Know more ↗
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
