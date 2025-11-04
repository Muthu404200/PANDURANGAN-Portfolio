import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SkillsSection = () => {
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
      leftControls.start({ opacity: 0, x: -50 });
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start({ opacity: 1, y: 0 });
    } else {
      rightControls.start({ opacity: 0, y: 80 });
    }
  }, [rightInView, rightControls]);

  return (
    <section
  id="skills"
  className="min-h-screen w-full md:px-8 xl:px-20 bg-black text-white flex items-center overflow-x-hidden"
>

      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
        
        {/* Left Section */}
        <motion.div
          ref={refLeft}
          className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0"
          animate={leftControls}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            <div className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-indigo-400 mt-2 mx-auto"></div>
              <p className="text-indigo-400">All Skills</p>
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Explore My Expertise & Tech Stack
            </h2>
          </div>

          <p className="p-3 text-gray-400 text-sm leading-relaxed">
            I specialize in financial operations, accounting software, and business
            compliance tools that streamline reporting and ensure accuracy.  
            My expertise covers both traditional and digital platforms for managing
            finance efficiently.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          ref={refRight}
          className="w-full md:w-1/2 flex justify-center items-center"
          animate={rightControls}
          initial={{ opacity: 0, y: 80 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { img: "./images/gst.png", text: "GST Filing" },
              { img: "./images/sap.png", text: "SAP S/4 Hana, ECC (Finance, Material Management)" },
              { img: "./images/QuickBooks.png", text: "QuickBooks Windows & Web | BRS" },
              { img: "./images/tally.png", text: "Tally Prime" },
              { img: "./images/tax.png", text: "TDS Filing" },
              { img: "./images/Excel.png", text: "Excel" },
              { img: "./images/excel.png", text: "MIS Report in Excel" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={rightControls}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                  <span className="text-4xl">
                    <img src={item.img} alt="" width="45" height="45" />
                  </span>
                  <p className="text-xs mt-2">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
