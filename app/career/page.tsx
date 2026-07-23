import React from "react";
import CareersHero from "../components/CareersHero";
import CareerPathsSection from "../components/CareerPathsSection";
import TeamStatsSection from "../components/TeamStatsSection";
import ContactAndReviewsSection from "../components/ContactAndReviewsSection";

const page = () => {
  return (
    <>
      <CareersHero />
      <CareerPathsSection />
      <TeamStatsSection />
      <ContactAndReviewsSection />
    </>
  );
};

export default page;
