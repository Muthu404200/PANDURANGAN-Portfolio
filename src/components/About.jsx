import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About = () => {
  const refImage = useRef(null);
  const refText = useRef(null);

  const imageInView = useInView(refImage, { amount: 0.3 });
  const textInView = useInView(refText, { amount: 0.3 });

  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (imageInView) {
      imageControls.start({ opacity: 1, x: 0 });
    } else {
      imageControls.start({ opacity: 0, x: -80 });
    }
  }, [imageInView, imageControls]);

  useEffect(() => {
    if (textInView) {
      textControls.start({ opacity: 1, x: 0 });
    } else {
      textControls.start({ opacity: 0, x: 80 });
    }
  }, [textInView, textControls]);

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8"
    >
      {/* Left Side: Image */}
      <motion.div
        ref={refImage}
        animate={imageControls}
        initial={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-5/12 flex justify-center h-full md:justify-end"
      >
        <img
          src="./pic.png"
          alt="About Me"
          className="bg-indigo-400 w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Side: Text Content */}
      <motion.div
        ref={refText}
        animate={textControls}
        initial={{ opacity: 0, x: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-7/12 text-center md:text-left relative"
      >
        {/* Vertical Text */}
        <div className="absolute left-[40%] -top-6 md:-left-16 lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest text-indigo-400">
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-[2px] bg-indigo-400"></div>
            <p>ABOUT ME</p>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
          Dedicated & Experienced Accountant
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
          I am an experienced Accountant with over 5 years of expertise in
          financial record management, compliance, and reporting. I specialize
          in maintaining accurate financial data, optimizing accounting
          processes, and ensuring adherence to regulatory standards.
          <br />
          <br />
          Proficient in <strong>Tally Prime, QuickBooks, SAP,</strong> and{" "}
          <strong>Advanced Excel</strong>, I leverage technology to streamline
          operations, enhance accuracy, and support informed business decisions.
          My approach combines attention to detail with strategic thinking to
          maintain financial integrity and drive operational efficiency.
          <br />
          <br />
          Whether it’s managing day-to-day accounting functions, preparing
          financial statements, or improving internal processes, I am committed
          to delivering reliable financial insights that empower growth and
          stability.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
