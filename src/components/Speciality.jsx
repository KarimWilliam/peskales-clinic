import React from "react";
import { useTranslation } from "react-i18next";
import CardItem from "./CardItem";
import image8 from "../images/cardImages/back.webp";
import image6 from "../images/cardImages/elector.webp";
import image3 from "../images/cardImages/laser.avif";
import image4 from "../images/cardImages/lymph-massage.webp";
import image2 from "../images/cardImages/manual.webp";
import image7 from "../images/cardImages/prepost.webp";
import image1 from "../images/cardImages/shockwave.webp";
import image5 from "../images/cardImages/sports.webp";

function Speciality() {
  const { t } = useTranslation();
  return (
    <>
      <div className="spec-container">
        <h4 className="bigTitle">{t("spec0")}</h4>
        <div className="center-grid-box">
          <CardItem therapyimg={image1} words={t("spec1")} />
          <CardItem therapyimg={image2} words={t("spec2")} />
          <CardItem therapyimg={image3} words={t("spec3")} />
          <CardItem therapyimg={image4} words={t("spec4")} />
          <CardItem therapyimg={image5} words={t("spec5")} />
          <CardItem therapyimg={image6} words={t("spec6")} />
          <CardItem therapyimg={image7} words={t("spec7")} />
          <CardItem therapyimg={image8} words={t("spec8")} />
        </div>
      </div>
    </>
  );
}

export default Speciality;
