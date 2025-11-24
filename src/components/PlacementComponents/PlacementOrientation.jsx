"use client";
import React, { useState } from "react";
import Image from "next/image";

const PlacementOrientation = () => {
  const orientationData = {
    2024: {
      text: `On the 2nd of February 2024, Indira Global School of Business organized an enlightening session on Placements Orientation, spearheaded by the esteemed Executive Director of Corporate Relations- IGI, Ms. Maduri Sathe and her team. The session served as a beacon of guidance for students, shedding light on the current placement scenario at the institute and providing invaluable insights into the choice of specializations in Marketing, Finance, HR, and Operations from a placement perspective. Opening remark was given by Dr Prashant Dubey faculty in charge placements – IGSB.

Ms. Maduri Sathe commenced the session by focusing into the prevailing placement landscape, emphasizing the dynamic nature of the corporate world and the evolving demands of employers. She clarified upon the increasing emphasis on skill diversification and the burgeoning need for versatile professionals who possess a multidisciplinary skill set. In this context, she highlighted the significance of students' academic pursuits aligning with industry requisites, fostering a symbiotic relationship between academia and corporate entities. She also emphasized the role of internships in providing hands-on experience, allowing students to apply theoretical knowledge to real-world scenarios and gain practical insights into industry best practices.

Addressing the pivotal question of specialization, Ms. Sathe meticulously dissected the prospects and nuances associated with various domains, namely Marketing, Finance, HR, and Operations, within the realm of placements.

Overall Placements Orientation session curated invaluable insights for students embarking on their professional journey.`,
      images: [
        { img: "/IGSB/Placement/PlacementO1.jpg", alt: "Orientation Session 2024" },
        { img: "/IGSB/Placement/PlacementO2.jpg", alt: "Corporate Interaction 2024" },
      ],
    },

    2023: {
      text: `Corporate Relations plays a major role in shaping the Career goals of students. It is the dream of every student to get placed in a top organization visiting the campus for Final Placements. Keeping this key aspect into consideration, The Indira Global School of Business organized the Placement Orientation Session on Tuesday 18th April 2023 for MBA students. The Session was initiated by Placement Cell. The Placement Cell acts as a bridge between students and Corporates. They help students easily reach out to their dream companies. Analyzing the market scenario and their expectations the session tried to provide all the required information to the students.

It was an eye-opening session for the students. They got insights into Placement Cell activities and the real market scenario. Clarity of thoughts in students related to their specialization, placements, and different sectors in the industry. Key skills required for Big 4 companies and their criteria for selecting the candidates were also discussed in the session which helps students to build stronger portfolios.

Students were addressed by Ms. Madhuri Sathe Ma’am stating the importance of soft skills and its value addition in Industry. Student queries were taken into consideration and all of their doubts were resolved at the end of the session.`,
      images: [
        { img: "/IGSB/Placement/PlacementO3.png", alt: "Orientation Session 2023" },
     
      ],
    },

    2022: {
      text: `Indira Global School of Business had arranged a session on “Placement Addressal session” for Batch 2021-2023 by Madhuri Sathe Madam (Executive Director, Corporate Relations, Indira Group of Institutes) and her placement team. The session was arranged in off-line mode in Dr. APJ Abdul Kalam Hall on 14th of March 2022 from 11:30 am to 1:30 pm. The speaker informed students on Internships, final placements and skills which every student should have within themselves. She discussed on how summer Internships play an important role in your career.

She mentioned some of the following points:
There is an equal opportunity to all of you to get good placements.
Importance of Summer Internship Program.
It does not matter to make mistakes now but you should learn from your mistakes and make changes in yourself according to that.
Confidence is the key.
Choose specialization in which you will feel confident while working.
Interaction in English is important for fluent English speaking.
Every student should have following skills.
Communication
Good knowledge of language.
Professionalism
Analyze yourself as well as your competition.
Keep a goal.
Concentrate on SWOT analysis.
Evaluate yourself.
Be relevant and useful.
Have discipline.
Students should have a core knowledge of your specialization.
Certifications from high paying platforms doesn’t matter but the knowledge definitely does.
Self-control, stress control and develop your own goodwill.`,
      images: [
        { img: "/IGSB/Placement/PlacementO5.png", alt: "Orientation Session 2022" },
      
      ],
    },

    2021: {
      text: `Placement activity plays a major role in a B-School and it helps a management aspirant to align his/her career aspirations and work in the right direction. Placement Orientation in 2021 was a special event as all activities were conducted in virtual mode. The pandemic had brought a new norm of virtual working and at Indira, we have always tried to stay relevant thus the placement orientation session was conducted in online mode despite multiple challenges on 5th February 2021.

The session was delivered by Ms.Madhuri Sathe, Executive Director – Corporate Relations, and supported by the placement team. Madhuri Madam tried to highlight the challenges of the pandemic and its impact on the placement scenario for coming batches and how to prepare for the final placements.

The following guidance was provided during the interaction:

Students should get well accustomed to the virtual environment
Organizations may look for different skills due to the impact of pandemic
Institutes should conduct different training workshops to sensitize students to different skills required in future jobs
Major emphasis should be given to grooming and domain knowledge as the virtual environment may have limitations and will not provide sufficient time for understanding the candidate for final placement
Students should develop a flexible attitude towards job offers on campus owing to the challenges of pandemic
Students should indulge and develop habits of meditation, yoga, and other stress-busting activities to increase productivity
Madhuri Madam tried her best to address all queries raised by the students and provided good guidance and motivation for students to work hard and stay relevant with changing times.`,
      images: [
        { img: "/IGSB/Placement/PlacementO7.png", alt: "Orientation Session 2021" },
     
      ],
    },
  };

  const years = Object.keys(orientationData).reverse();
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <div className="w-full bg-white text-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-14">

        <h1 className="text-4xl font-bold text-secondary text-center">
          Placement Orientation
        </h1>

        {/* Tabs */}
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
              {year}
            </button>
          ))}
        </div>

        {/* ✅ Dynamic Heading + Content */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-lg space-y-12 border border-gray-200">

          {/* ✅ Dynamic Year Heading */}
          <h2 className="text-2xl font-bold text-secondary text-center">
            Placement Orientation — {activeYear}
          </h2>

          {/* ✅ Text */}
          <div className="max-w-7xl mx-auto text-gray-700 text-md leading-[1.9] space-y-6 text-justify">
            {orientationData[activeYear].text
              .split("\n\n")
              .map((para, index) => (
                <p key={index}>{para.trim()}</p>
              ))}
          </div>

          {/* ✅ Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {orientationData[activeYear].images.map((img, i) => (
              <div
                key={i}
                className="w-full rounded-xl overflow-hidden shadow-md border border-gray-200"
              >
                <Image
                  src={img.img}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlacementOrientation;
