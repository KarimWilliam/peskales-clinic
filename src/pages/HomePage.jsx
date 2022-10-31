import React from "react";
import { useTranslation } from "react-i18next";
import AboutSection from "../components/AboutSection";
import GoogleMap from "../components/CustomGoogleMap";
import Speciality from "../components/Speciality";
function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="about-section" id="About">
        <AboutSection />
      </div>
      <div className="Maps-Section">
        <h3 className="bigTitle" id="Map">
          {t("Address")}
        </h3>
        <GoogleMap />
      </div>
      <Speciality />
      {/* <h1>{t("variable", { number: "4" })}</h1> */}
    </>
  );
}

export default HomePage;
