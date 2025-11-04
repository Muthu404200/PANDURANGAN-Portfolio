import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="lg:grid pt-6 lg:pt-0 lg:min-h-screen lg:place-content-center bg-black"
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32 overflow-x-hidden">

        {/* Right Side - Spline 3D Scene */}
        <motion.div
          className="mt-6 md:mt-0 sm:p-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <div className=" w-full h-[400px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Spline scene="https://prod.spline.design/E9MfGQQyBWbwPWM8/scene.splinecode" />
          </div>
        </motion.div>

        
        {/* Left Content */}
        <motion.div
          className="max-w-prose text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-bold sm:text-5xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            FINANCIAL TRAINER
            <strong className="text-indigo-600"> EXPERIENCED </strong>
            ACCOUNTANT
          </motion.h1>

          <motion.p
            className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Accountant with 5+ years of experience in financial record management and
            compliance. Proficient in Tally Prime, QuickBooks, SAP, and Advanced Excel,
            focused on streamlining operations and maintaining financial integrity.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
