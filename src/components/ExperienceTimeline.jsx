import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ExperienceTimeline = () => {
  const refLeft = useRef(null);
  const refRight = useRef(null);

  const leftInView = useInView(refLeft, { amount: 0.3 });
  const rightInView = useInView(refRight, { amount: 0.3 });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (leftInView) {
      leftControls.start({ opacity: 1, x: 0 });
    } else {
      leftControls.start({ opacity: 0, x: -80 });
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start({ opacity: 1, x: 0 });
    } else {
      rightControls.start({ opacity: 0, x: 80 });
    }
  }, [rightInView, rightControls]);

  const experiences = [
    {
      company: "Global Tech Computer Education, Chennai",
      role: "Financial Software & Taxation Faculty",
      date: "Sep 2022 - Present",
      details: [
        "Teach entry-level accounting classes to students.",
        "Instruct on accounting software, including Tally Prime, QuickBooks, and SAP FICO.",
      ],
    },
    {
      company: "Sudharsanam Vidyaashram / SA College",
      role: "Accountant",
      date: "Apr 2021 - Aug 2022",
      details: [
        "Managed financial transactions in Tally for accurate bookkeeping.",
        "Compiled detailed financial reports.",
      ],
    },
    {
      company: "Satheesh Balaji School",
      role: "Accountant",
      date: "Nov 2018 - Feb 2021",
      details: [
        "Recorded and managed financial transactions in Tally for precise bookkeeping.",
        "Developed financial reports like balance sheets and income statements.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-black py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-bold text-white">
            Professional <strong className="text-indigo-600">Experience</strong>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            A timeline of my career journey — from accounting to financial software
            training, highlighting growth, learning, and impact.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Experience Timeline */}
          <motion.div
            ref={refLeft}
            animate={leftControls}
            initial={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <ol className="relative border-l border-gray-700">
              {experiences.map((exp, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="mb-10 ml-6"
                >
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-indigo-800">
                    <svg
                      className="w-2.5 h-2.5 text-indigo-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>

                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
                    {exp.company}
                  </h3>

                  <p className="text-indigo-400 font-medium mb-1">
                    {exp.role}
                  </p>

                  <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                    {exp.date}
                  </time>

                  {exp.details.map((line, i) => (
                    <p key={i} className="text-base text-gray-300 mb-1">
                      {line}
                    </p>
                  ))}
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Right Column: Image or Spline */}
          <motion.div
            ref={refRight}
            animate={rightControls}
            initial={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 h-96 lg:h-auto"
          >
            <img src="./exp.gif" alt="demo" className="w-full rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
