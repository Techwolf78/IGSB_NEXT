"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  BookOpen,
  Award,
  Users,
  GitCommitHorizontal,
} from "lucide-react";

const images = [
  "/IGSB/nism/nism1.jpeg",
  "/IGSB/nism/nism2.jpeg",
  "/IGSB/nism/nism3.jpeg",
  "/IGSB/nism/nism4.jpeg",
];

const certifications = [
  {
    batch: "2020-22",
    name: "Kiran Dalvi",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Mayuri Kanfade",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Prasad Moharir",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Rishikesh Wagh",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Sakshi Shetye",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Vijaykumar Patil",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2019-21",
    name: "Vikas Gupta",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2019-21",
    name: "Vikas Gupta",
    series: "X-II",
    cert: "Securities Markets Foundation",
  },
  {
    batch: "2019-21",
    name: "Shubham Sanap",
    series: "XV",
    cert: "Research Analyst",
  },
  {
    batch: "2019-21",
    name: "Shubham Sanap",
    series: "X-A",
    cert: "Investment Adviser (Level 1)",
  },
  {
    batch: "2019-21",
    name: "Shubham Sanap",
    series: "X-B",
    cert: "Investment Adviser (Level 2)",
  },
];

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
    <section className="w-full bg-slate-50 min-h-screen py-16 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HEADER SECTION --- */}
        <div className=" mb-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center  p-1 rounded-full bg-blue-50 text-secondary text-xs font-semibold tracking-wide uppercase mb-2">
                Event Report
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Inauguration of NISM Guidance Centre
              </h1>
              <p className="text-lg text-slate-500">
                Empowering students with industry-relevant financial expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary" />
                <span className="font-medium">Jan 5th, 2022</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-medium">1:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* --- LEFT COLUMN (Content) --- */}
          <div className="lg:col-span-8 space-y-10">
            {/* Introduction */}
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p className="text-lg">
                The{" "}
                <span className="font-semibold text-slate-900">
                  Indian Securities Market
                </span>{" "}
                has witnessed tremendous growth. With rising economic activity,
                the market offers rewarding career opportunities in mutual fund
                distribution, stock broking, and allied sectors.
              </p>
              <div className="py-6 bg-shadow-sm rounded-r-lg ">
                <p className=" text-slate-700 m-0">
                  "The IGSB NISM Guidance Centre intends to offer certification
                  programs like associate programs alongside the regular
                  curriculum to make students job-ready."
                </p>
              </div>
              <p>
                These certifications serve as a value addition to resumes,
                providing preference during shortlisting and increasing
                awareness of real industry practices. The programs are delivered
                by a mix of experienced internal faculty and external industry
                experts.
              </p>
            </div>

            {/* Inauguration Details */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                Dignitaries
              </h3>
              <p className="text-slate-600">
                With the blessings of Chairperson{" "}
                <span className="font-semibold text-slate-900">
                  Dr. Tarita Shankar
                </span>{" "}
                and Group Director{" "}
                <span className="font-semibold text-slate-900">
                  Prof. Chetan Wakalkar
                </span>
                , the centre was inaugurated by{" "}
                <span className="font-semibold text-slate-900">
                  Mr. Prashant Utreja
                </span>{" "}
                (CHRO, Reliance Capital).
              </p>
            </div>

            {/* Student Certifications Table */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Student Certifications
                </h2>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4">Batch</th>
                        <th className="px-6 py-4">Student Name</th>
                        <th className="px-6 py-4">Series</th>
                        <th className="px-6 py-4">Certification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {certifications.map((row, i) => (
                        <tr
                          key={i}
                          className="hover:bg-secondary/50 transition-colors"
                        >
                          <td className="px-6 py-3 font-medium text-slate-500">
                            {row.batch}
                          </td>
                          <td className="px-6 py-3 font-semibold text-slate-800">
                            {row.name}
                          </td>
                          <td className="px-6 py-3 text-slate-500 font-mono">
                            {row.series}
                          </td>
                          <td className="px-6 py-3 text-secondary">
                            {row.cert}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Sidebar widgets) --- */}
          <div className="lg:col-span-4 space-y-8">
            {/* Workshops Widget */}
            <div className="bg-secondary text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
                <BookOpen className="w-5 h-5 text-white" />
                <h3 className="text-lg font-semibold">Planned Workshops</h3>
              </div>
              <ul className="space-y-4">
                {workshops.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <GitCommitHorizontal className="w-4 h-4 text-white mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Widget */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Event Gallery
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="relative group w-full aspect-square rounded-lg overflow-hidden shadow-sm cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={`Event ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Event */}
            <div className="bg-secondary rounded-2xl p-6 border border-secondary">
              <h4 className="text-white font-bold mb-2">Featured Topic</h4>
              <p className="text-sm text-white leading-relaxed">
                "Investing in Recovery: Challenges and Opportunities for Indian
                Securities Markets"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
