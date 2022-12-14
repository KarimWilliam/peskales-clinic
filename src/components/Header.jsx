import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import phone from "../images/phone.svg";
import wave from "../images/wave.svg";
import egyptFlag from "../images/Flag_of_Egypt.svg";
import britishFlag from "../images/Flag_of_the_United_Kingdom.svg";
import PeskalesLogo from "../images/AlphaPeskales.avif";
import greenlogo from "../images/greenlogo.webp";
function Header() {
  //Language settings
  const { t } = useTranslation();
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "USA",
    },
    {
      code: "ar",
      name: "Arabic",
      country_code: "EGY",
      dir: "rtl",
    },
  ];
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((i) => i.code === currentLanguageCode);
  const nextLanguage = i18next.language === "ar" ? "en" : "ar";
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_titles");
  }, [currentLanguage, t]);
  /////////////

  return (
    <div className="header">
      <div className="topnav curve">
        <div className="shortcuts">
          <h4 className="nav-logo">{t("app_title")}</h4>
          <div className="pc-menu">
            <a href="#About">{t("about")}</a>
            <a href="#Map">{t("Location")}</a>
            <a href="#Contact">{t("Contact")}</a>
          </div>
        </div>

        {/* hamberger menu */}

        <div className="Right-side">
          <button onClick={() => i18next.changeLanguage(nextLanguage)}>
            <span className="lang-text"> {t("button_Text")} </span>
            {nextLanguage === "ar" ? (
              <img
                src={egyptFlag}
                width="20px"
                height="auto"
                alt="egypt Flag"
              />
            ) : (
              <img
                src={britishFlag}
                width="20px"
                height="auto"
                alt="egypt Flag"
              />
            )}
          </button>
          <a className="phone-number" href="tel:01288388889">
            <img
              className="phoneimg"
              alt="phone"
              width={"18px"}
              height={"auto"}
              src={phone}></img>{" "}
            {t("number1")}
          </a>
        </div>
      </div>

      {/* banner area */}
      <div className="banner">
        <div className="combine-name">
          <img
            className="clinic-logo"
            alt="Clinic Logo"
            height="22vw"
            width="auto"
            src={PeskalesLogo}></img>
          <div className="name-text"> {t("name")} </div>
          <div className="therapy-text"> {t("physicalTherapy")} </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
