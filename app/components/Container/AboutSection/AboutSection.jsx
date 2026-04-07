import React from "react";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutChoose from "./AboutChoose";
import ProcessSection from "./ProcessSection";
import CtaHero from "@/app/common/CtaHero";
import FAQsSection from "./FAQsSection";
import ClientMarquee from "./ClientMarquee";

const AboutSection = () => {
  return (
    <>
      <AboutHero />
      <ClientMarquee />
      <AboutMission />
      <AboutChoose />
      <ProcessSection />
      <FAQsSection />
      <CtaHero />
    </>
  );
};

export default AboutSection;
