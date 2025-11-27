"use client";

import React from "react";
import { Mail, Phone, MapPin, Users, Star } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        {/* ==================== PAGE TITLE ==================== */}
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-2">
          Contact Us
        </h1>
        <p className="text-center text-slate-600 mb-12">
          We are always here to hear from you.
        </p>


        {/* ======================================================
           1️⃣ CONTACT INFORMATION BOX
        ====================================================== */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT COLUMN — ADDRESS / PHONE / EMAIL */}
            <div className="space-y-6">

              {/* Address */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  Address
                </h2>
                <p className="font-semibold mt-2">Indira Global School of Business</p>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  S.No. 64, 65, Gat No. 276, At Post : Parandwadi, Near Somatnephata,  
                  Tal.: Maval, Dist.: Pune – 410 506
                </p>
              </div>

              {/* Phone Numbers */}
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Phone className="w-5 h-5 text-secondary" />
                  Phone Number
                </h2>
                
                <p className="mt-3 font-semibold">MBA:</p>
                <p className="text-slate-600">Mobile: 9657856103</p>
                <p className="text-slate-600">Tel.: 02114691417</p>

                <p className="mt-3 font-semibold">For Administrative Purpose:</p>
                <p className="text-slate-600">Mobile: +91 9657856103</p>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Mail className="w-5 h-5 text-secondary" />
                  Email
                </h2>

                <p className="font-semibold mt-3">
                  "For verification of student/Alumni academic records"
                </p>
                <p className="text-slate-600">
                  Email ID: exam.committee@indiragbs.edu.in
                </p>

                <p className="mt-3 font-semibold">MBA:</p>
                <p className="text-slate-600">mba.admissions@indiragbs.edu.in</p>

                <p className="mt-3 font-semibold">For Administrative Purpose:</p>
                <p className="text-slate-600">admin@indiragbs.edu.in</p>
              </div>
            </div>


            {/* RIGHT COLUMN — REVIEW BOX */}
            <div className="bg-blue-50 rounded-2xl p-6 shadow-inner text-center flex flex-col items-center justify-center">
              <Image src="/google.png" alt="Google" width={120} height={50} className="mx-auto" />
              
              <h3 className="text-2xl font-semibold mt-3">Google Reviews</h3>

              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="text-4xl font-bold">4.8</span>
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <span className="text-slate-600 ml-2">(152)</span>
              </div>

              <button className="mt-5 px-6 py-2 text-white bg-secondary rounded-full shadow hover:bg-secondary/90 transition">
                Review us on Google
              </button>
            </div>
          </div>
        </div>



        {/* ======================================================
           2️⃣ GOOGLE MAP SECTION
        ====================================================== */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Contact Information
          </h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15183.140772507702!2d73.6645555!3d18.6886847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b0ebadc18203%3A0xe37f3ffc73ce88c!2sIndira%20Global%20School%20of%20Business!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-sm border border-slate-200"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
