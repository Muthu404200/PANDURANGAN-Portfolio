import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsSection from "./components/SkillsSection";
import Navbar from "./components/Navbar";

const App = () => (
  
  
  <>
  <Navbar />
  
    <HeroSection />
    <SkillsSection />
    <About />
    <ExperienceTimeline />
  </>
);

export default App;
