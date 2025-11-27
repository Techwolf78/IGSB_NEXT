"use client";

import React from "react";
import Image from "next/image";
import {
  BookOpen,
  Award,
  Users,
  GitCommitHorizontal,
} from "lucide-react";

// IMAGES
const images = [
  "/IGSB/nism/nism1.jpeg",
  "/IGSB/nism/nism2.jpeg",
  "/IGSB/nism/nism3.jpeg",
  "/IGSB/nism/nism4.jpeg",
];

// CERTIFICATIONS
const certifications = [
  { batch: "2020-22", name: "Kiran Dalvi", series: "V-A", cert: "Mutual Fund Distributors" },
  { batch: "2020-22", name: "Mayuri Kanfade", series: "V-A", cert: "Mutual Fund Distributors" },
  { batch: "2020-22", name: "Prasad Moharir", series: "V-A", cert: "Mutual Fund Distributors" },
  { batch: "2020-22", name: "Rishikesh Wagh", series: "V-A", cert: "Mutual Fund Distributors" },
  { batch: "2020-22", name: "Sakshi Shetye", series: "V-A", cert: "Mutual Fund Distributors" },
  { batch: "2020-22", name: "Vijaykumar Patil", series: "V-A", cert: "Mutual Fund Distributors" },
  { batch: "2019-21", name: "Vikas Gupta", series: "V-A", cert: "Mutual Fund Distributors" },
  { batch: "2019-21", name: "Vikas Gupta", series: "X-II", cert: "Securities Markets Foundation" },
  { batch: "2019-21", name: "Shubham Sanap", series: "XV", cert: "Research Analyst" },
  { batch: "2019-21", name: "Shubham Sanap", series: "X-A", cert: "Investment Adviser (Level 1)" },
  { batch: "2019-21", name: "Shubham Sanap", series: "X-B", cert: "Investment Adviser (Level 2)" },
];

// WORKSHOPS
const workshops = [
  "Advance Excel and Financial Modeling",
  "Seminar: Investing in Recovery - Challenges & Opportunities",
  "The Pocket Money Program",
  "Personal Finance Workshop for Class IV employees",
  "e-chai (Panel Discussion)",
  "Customized Training Programmes",
];

export default function NISMPage() {
  return (
    <section className="w-full bg-slate-50 min-h-screen py-14 text-slate-800">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER (Centered) ================= */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900">
            Inauguration of NISM Guidance Centre
          </h1>

          <p className="text-lg text-slate-600 mt-2 max-w-2xl mx-auto">
            Empowering students with industry-relevant financial expertise.
          </p>
        </div>

        {/* ================= ROW 1 (Intro + Workshops) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">

          {/* Intro */}
          <div className="lg:col-span-8 bg-white p-6 rounded-xl shadow-sm">
            <div className="space-y-4 leading-relaxed text-slate-700">
              <p>
                The <span className="font-semibold text-slate-900">Indian Securities Market</span> 
                has witnessed tremendous growth. With rising economic activity, the market offers 
                rewarding career opportunities in mutual fund distribution, stock broking, and allied sectors.
              </p>

              <p className="bg-slate-100 p-4 rounded-lg">
                "The IGSB NISM Guidance Centre intends to offer certification programs like associate 
                programs alongside the regular curriculum to make students job-ready."
              </p>

              <p>
                These certifications serve as a value addition to resumes, providing preference during 
                shortlisting and increasing awareness of real industry practices. The programs are delivered 
                by a mix of experienced internal faculty and external industry experts.
              </p>
            </div>
          </div>

          {/* Workshops */}
          <div className="lg:col-span-4">
            <div className="bg-secondary text-white rounded-2xl p-6 shadow-lg h-full">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-white" />
                <h3 className="text-lg font-semibold">Planned Workshops</h3>
              </div>

              <ul className="space-y-3">
                {workshops.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-200 text-sm">
                    <GitCommitHorizontal className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* ================= UNIFIED SECTION BOX ================= */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* ------------------------- LEFT COLUMN ------------------------- */}
            <div className="lg:col-span-8 space-y-10">

              {/* DIGNITARIES */}
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-secondary" />
                  Dignitaries
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  With the blessings of Chairperson{" "}
                  <span className="font-semibold">Dr. Tarita Shankar</span> and Group Director{" "}
                  <span className="font-semibold">Prof. Chetan Wakalkar</span>, 
                  the centre was inaugurated by{" "}
                  <span className="font-semibold">Mr. Prashant Utreja</span> (CHRO, Reliance Capital).
                </p>
              </div>

              {/* STUDENT CERTIFICATIONS */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-secondary" />
                  Student Certifications
                </h2>

                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-xs border-b">
                      <tr>
                        <th className="px-6 py-3">Batch</th>
                        <th className="px-6 py-3">Student Name</th>
                        <th className="px-6 py-3">Series</th>
                        <th className="px-6 py-3">Certification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {certifications.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-100">
                          <td className="px-6 py-3">{row.batch}</td>
                          <td className="px-6 py-3 font-semibold">{row.name}</td>
                          <td className="px-6 py-3 text-slate-600">{row.series}</td>
                          <td className="px-6 py-3 text-secondary">{row.cert}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* ------------------------- RIGHT COLUMN ------------------------- */}
            <div className="lg:col-span-4 space-y-10">

              {/* GALLERY */}
              <div>
         

                <div className="grid grid-cols-2 gap-3">
                  {images.map((src, i) => (
                    <div
                      key={i}
                      className="relative h-66 w-full aspect-square rounded-lg overflow-hidden shadow-sm group"
                    >
                      <Image
                        src={src}
                        alt={`Event Image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* HIGHLIGHT */}
              <div className="bg-secondary rounded-2xl p-6 text-white shadow-lg">
                <h4 className="font-semibold text-lg mb-2">Featured Topic</h4>
                <p className="text-sm leading-relaxed">
                  "Investing in Recovery: Challenges and Opportunities for Indian 
                  Securities Markets"
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
