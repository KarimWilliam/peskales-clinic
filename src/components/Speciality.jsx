import React from "react";
import { useTranslation } from "react-i18next";
function Speciality() {
  const { t } = useTranslation();
  return (
    <>
      <div className="spec-container">
        <h4 className="bigTitle">{t("spec0")}</h4>
        <div className="center-flex-box">
          <div className="spec-text-container">
            <ul>
              <li>{t("spec1")}</li>
              <li>{t("spec2")}</li>
              <li>{t("spec3")}</li>
              <li>{t("spec4")}</li>
              <li>{t("spec5")}</li>
              <li>{t("spec6")}</li>
              <li>{t("spec7")}</li>
              <li>{t("spec8")}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Speciality;
