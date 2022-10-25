import React from "react";
import { useTranslation } from "react-i18next";
import image1 from "../images/therapy1.png";
// import image2 from "../images/therapy2.png";
function AboutSection() {
  const { t } = useTranslation();
  return (
    <>
      <div className="about-container">
        <div className="names">
          <h5>{t("name1")}</h5>
          <h5>{t("name2")}</h5>
          <h5>{t("name3")}</h5>
          <h5>{t("name4")}</h5>
        </div>

        <div className="about-text">
          <ul>
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
            <li>{t("point4")}</li>
            <li>{t("point5")}</li>
            <li>{t("point6")}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
