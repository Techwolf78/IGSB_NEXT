"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const DiscoverPaths = () => {
  // ✅ MBA Specializations Only
  const courses = [
    {
      name: "Human Resource Management",
      img: "/MBA1.jpg",
      link: "/MBA1",
    },
    {
      name: "Finance Management",
      img: "/MBA2.jpg",
      link: "/MBA2",
    },
    {
      name: "Operations & Supply Chain Management",
      img: "/MBA3.jpg",
      link: "/MBA3",
    },
    {
      name: "Marketing Management",
      img: "/MBA4.jpg",
      link: "/MBA4",
    },
  ];

  return (
    <div className="bg-gray-50 py-6 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto ">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            MBA Specializations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Choose from our industry-aligned MBA specializations designed for leadership excellence.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={course.link}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              {/* Course Image */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                <Image
                  src={course.img}
                  alt={course.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Course Name */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className=" text-white backdrop-blur-sm rounded-b-lg px-4 py-3 shadow-sm ">
                  <h3 className="flex justify-center text-xs font-semibold text-white truncate text-center">
                    {course.name}
                  </h3>
                </div>
              </div>

  
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPaths;
