import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
function CustomGoogleMap() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mapBlock map1">
        <div className="maptext">
          <p>
            <h3> {t("mohandeseen")}</h3>
            <h4>
              {t("Telephone")}:<a href="tel:01288388889"> {t("number1")}</a>
            </h4>
            <p className="small-address">
              {t("Address1Number")} {t("Address1")}
            </p>
          </p>
        </div>

        <iframe
          className="embeded-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.460083419066!2d31.20507381551628!3d30.05234392515345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841256c61aa23%3A0x7466cb419951bf69!2s20%20El-Batal%20Ahmed%20Abd%20El-Aziz%2C%20Ad%20Doqi%2C%20Dokki%2C%20Giza%20Governorate%203751420%2C%20Egypt!5e0!3m2!1sen!2sus!4v1666371324782!5m2!1sen!2sus"
          loading="lazy"></iframe>
      </div>

      <div className="mapBlock map2">
        <div className="maptext">
          <p>
            <h3> {t("october")}</h3>
            <h4>
              {t("Telephone")}: <a href="tel:01210101974">{t("number2")}</a>
            </h4>
            <p className="small-address">
              {t("Address2")} {t("Address2Number")}
            </p>
          </p>
        </div>

        <iframe
          className="embeded-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12078.491527239585!2d31.04761145171603!3d29.999405203412685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458511603d8e2a3%3A0x6f120634b56ddb40!2sHale%20Town!5e0!3m2!1sen!2sus!4v1666371506866!5m2!1sen!2sus"
          loading="lazy"></iframe>
      </div>
    </>
  );
}

export default CustomGoogleMap;
