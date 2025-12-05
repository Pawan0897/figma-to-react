import React from "react";
import ServiceBanner from "../pages/Services/Banner/ServiceBanner";
import Header from "./Header";
import RequirementSection from "../pages/Services/Requirement/RequirementSection";
import StaffingSection from "../pages/Services/Staffing/StaffingSection";
import Card from "../pages/Services/ScrollStack/Card";
import Page from "../pages/Services/TalentSourcing/Page";
import Footer from "./Footer";
import MissionPage from "../pages/Services/Request&Service/MissionPage";
import ContactBlock from "./index/Contact/ContactBlock";

export default function Services() {
  return (
    <>
      <>
        <Header />
        <ServiceBanner />
        <RequirementSection />
        <StaffingSection />
        <Card />
        <Page />
        <MissionPage />
        <ContactBlock />
        <Footer />
      </>
    </>
  );
}
