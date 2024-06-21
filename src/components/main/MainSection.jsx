import React from "react";
import AboutSection from "./AboutSection";
import Portfolio from "./Portfolio";
import ServicesSection from "./ServicesSection";
import PartnersSection from "./PartnersSection";

const MainSection = () => {
  return (
    <div>
      <AboutSection />
      <Portfolio />
      <ServicesSection />
      <PartnersSection />
    </div>
  );
};

export default MainSection;
