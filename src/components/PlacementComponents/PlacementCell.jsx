"use client";
import React from "react";
import Image from "next/image";

const PlacementCell = () => {
  const topImages = [
    { img: "/IGSB/Placement/PC1.png", alt: "Placement Team" },
    { img: "/IGSB/Placement/PC2.png", alt: "Placement Seminar" },
  ];

  const gridImages1 = [
    "/IGSB/Placement/PC3.jpg",
    "/IGSB/Placement/PC4.jpg",
    "/IGSB/Placement/PC5.jpg",
    "/IGSB/Placement/PC6.jpg",
    "/IGSB/Placement/PC7.jpg",
  ];

  const gridImages2 = [
    "/IGSB/Placement/PC8.jpg",
    "/IGSB/Placement/PC9.jpg",
    "/IGSB/Placement/PC10.jpg",
    "/IGSB/Placement/PC11.jpg",
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      <div className="max-w-7xl mx-auto py-20 px-6 space-y-20">

        {/* Title */}
        <h1 className="text-4xl font-bold text-secondary text-center">
          Placement Cell
        </h1>

        {/* ✅ Text Box */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-lg border border-gray-200 text-lg leading-relaxed text-justify text-gray-700 space-y-6">
          <p>
            IGSB MBA: Empowering Careers through Industry Integration and
            Experiential Learning At IGSB, the Placement Cell is a collaborative
            initiative between faculty and student coordinators, working under
            the guidance of the Central Placement Cell. This synergy ensures a
            dynamic and supportive environment where students are empowered
            to secure top-tier career opportunities. Student coordinators act
            as a vital bridge between the central cell and the student body,
            facilitating seamless communication and support.
          </p>

          <p>
            A cornerstone of the MBA experience at IGSB is the Career &
            Leadership Development Program (CLDP). This structured initiative
            enhances students’ professional readiness through communication,
            leadership, personal branding, and interview preparation modules.
          </p>

          <p>
            IGSB regularly hosts industry speakers and corporate leaders who
            share insights on emerging trends, leadership challenges, and
            sector-specific developments.
          </p>

          <p>
            The institute maintains strong ties with its alumni network, who
            frequently return as mentors, guest speakers, and recruiters.
          </p>

          <p>
            To bridge the gap between theory and practice, IGSB organizes
            industry visits to leading companies across sectors.
          </p>
        </div>

        {/* ✅ 20% + 80% Image Row */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Image */}
          <div className="lg:w-1/5 w-full h-72 lg:h-106 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={topImages[0].img}
              alt={topImages[0].alt}
              width={600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="lg:w-4/5 w-full h-72 lg:h-106 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={topImages[1].img}
              alt={topImages[1].alt}
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ✅ Grid of 5 Images — Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {gridImages1.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
            >
              <Image
                src={img}
                alt={`Placement Activity ${i + 1}`}
                width={500}
                height={500}
                className="w-full h-56 object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* ✅ Grid of 5 Images — Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {gridImages2.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
            >
              <Image
                src={img}
                alt={`Placement Highlight ${i + 6}`}
                width={500}
                height={500}
                className="w-full h-56 object-cover object-top"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PlacementCell;
