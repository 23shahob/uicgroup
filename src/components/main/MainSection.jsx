import React from "react";
import AboutSection from "./AboutSection";
import Portfolio from "./Portfolio";
import ServicesSection from "./ServicesSection";
import PartnersSection from "./PartnersSection";
import LastSection from "./LastSection";

const MainSection = () => {
  return (
    <div>
      <AboutSection />
      <Portfolio />
      <ServicesSection />
      <PartnersSection />
      <LastSection />
    </div>
  );
};

export default MainSection;
