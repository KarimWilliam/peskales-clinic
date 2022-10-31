import React from "react";
import footerLogo from "../images/Peskalesclinic-2.svg";
import footerLogo1 from "../images/Peskalesclinic-1.svg";
function Footer() {
  return (
    <div id="Contact" className="Footer">
      <img
        src={footerLogo}
        width="800px"
        alt="footer logo"
        className="footer-logo"
      />
      <p> Copyright &copy; 2022 Peskales Clinic All Rights Reserved</p>
    </div>
  );
}

export default Footer;
