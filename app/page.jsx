import React from "react";
import HomeSection from "./components/Container/HomeSection/HomeSection";
import TrustedSAP from "./components/Container/HomeSection/TrustedSAP";
import ResultsSection from "./components/Container/HomeSection/ResultsSection";
import WhyChooseSection from "./components/Container/HomeSection/WhyChooseSection";
import ProcessSection from "./components/Container/HomeSection/ProcessSection";
import ComparisonSection from "./components/Container/HomeSection/ComparisonSection";
import IndustriesFaq from "./components/Container/HomeSection/Industriesfaq";
import FAQsSection from "./components/Container/HomeSection/FAQsSection";
import CtaHero from "./common/CtaHero";

function page() {
  return (
    <>
      <TrustedSAP />
      <ResultsSection />
      <WhyChooseSection />
      <ProcessSection />
      <ComparisonSection />
      <IndustriesFaq />
      <FAQsSection />
      <CtaHero />
    </>
  );
}

export default page;
