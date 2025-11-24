"use client";
import React, { useState } from "react";
import Image from "next/image";

const PlacementIndustryVisit = () => {
  const visitData = {
    2024: {
      sections: [
        {
          text: `1. Forbes Marshall

The students of IGSB visited Forbes Marshall Chakan Factory on 26th April 2024. They were oriented about the business and engineering processes undertaken by Forbes Marshall.

The students were briefed by the team from Forbes Marshall comprising of Mr. Rahul Mundhe (HRBP), Mr. Rahul Naik (Section Manager - Corporate Engineering Department) and Mr. Rahul Adhia (Manufacturing Engineer).

The key points covered during the visit were:

• The pillars of Forbes Marshall: core values of Integrity, Family Spirit, Excellence and Good Citizenship reflect the mission of energising self, members of the company, customers and communities.
• Products and services offered by Forbes Marshall: Energy Efficiency Solutions and products using cutting edge technology.
• Activities beyond Business: The outreach activities of Forbes Marshall for the betterment of society at large.

Key takeaways from the visit:

• The core values are the ones which create goodwill and hence help Forbes Marshall to have a niche market share and gain an edge over their competitors.
• The importance of forecasting and planning for a better ROI.
• The process of forecasting to make financial decisions.
• The impact of the outreach activities in business.

Overall the visit was an interesting and an impactful one.`,
          image: { img: "/IGSB/Placement/IV1.jpg", alt: "IGSB Visit to Forbes Marshall 2024" },
        },
        {
          text: `2. CottonKing Manufacturing Factory

Students from the Indira Global School of Business (IGSB) had the unique opportunity to explore the inner workings of the CottonKing manufacturing facility in Baramati. This excursion was not just a field trip; it was an immersive experience designed to complement their academic learning with real world insights.`,
          image: { img: "/IGSB/Placement/IV2.jpg", alt: "IGSB Visit to CottonKing Factory 2024" },
        },
      ],
    },

    2023: {
      sections: [
        {
          text: `Manufacturing plant of Carraro India Ltd.

IGSB organized Industrial Visit for the 1st year MBA students, on 2nd June 2023. 45 students along with 5 faculty members visited manufacturing plant of Carraro India Ltd. This plant is based in Ranjangaon MIDC.

This visit had three phases:

1. Corporate Presentation.
2. Plant Visit by students facilitated by Company officials.
3. Question and Answer Session.

This visit gave the students deep insights into production and manufacturing operations. It gave the students exposure to current work practices as opposed to possibly theoretical knowledge being taught at college. Industrial visit helps to combine theoretical knowledge with industrial knowledge.`,
          image: { img: "/IGSB/Placement/IV3.jpg", alt: "IGSB Visit to Carraro India 2023" },
        },
      ],
    },

    2022: {
      sections: [
        {
          text: `Manufacturing plant of Wilo Mather and Platt Pumps Pvt. Ltd.

IGSB organized Industrial Visit for the 1st year MBA students, on 24th June 2022. Under the guidance of Dr. Virendra Tatake (Director, IGSB), Dr. Aatish Zagade (Dept. Director, IGSB) and Prof. Pranita Bhujbal (Assistant Professor), 36 students visited the manufacturing plant of Wilo Mather and Platt Pumps Pvt. Ltd. This plant is based in Pimpri Chinchwad, Pune.

This Industrial Visit was directed towards understanding Wilo’s manufacturing capabilities and infrastructural competencies. The representative from Wilo were Mr. Milind Karve (Product Manager & Technical Knowledge Manager at Wilo India) and Mr. Salil Sathe (HOD – Industrial Engg & WPS at Wilo Mather and Platt Pumps Pvt. Ltd).`,
          image: { img: "/IGSB/Placement/IV4.jpg", alt: "IGSB Visit to Wilo Mather & Platt 2022" },
        },
      ],
    },
  };

  const years = Object.keys(visitData).reverse();
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <div className="w-full bg-white text-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-14">

        <h1 className="text-4xl font-bold text-secondary text-center">
          Industrial Visits
        </h1>

        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeYear === year
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-secondary hover:text-secondary"
              }`}
            >
              {`Industrial Visit ${year}`}
            </button>
          ))}
        </div>

        {/* Loop Through Visit Sections */}
        {visitData[activeYear].sections.map((section, index) => {
          const [title, ...rest] = section.text.split("\n\n");

          return (
            <div
              key={index}
              className="bg-gray-50 p-10 rounded-2xl shadow-lg space-y-10 border border-gray-200"
            >
              {/* Highlighted Title */}
              <h2 className="text-2xl font-bold text-secondary">
                {title.replace(/^\d+\.\s*/, "")}
              </h2>

              {/* Formatted Text */}
              <div className="max-w-6xl mx-auto text-gray-700 text-lg leading-[1.9] space-y-6 text-justify">
                {rest.map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>

              {/* Full Width Image */}
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                <Image
                  src={section.image.img}
                  alt={section.image.alt}
                  width={1600}
                  height={900}
                  className="w-full h-[470px] object-cover object-bottom"
                />
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default PlacementIndustryVisit;
