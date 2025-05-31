import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Agile Labs leverages AI, data, and cloud technology to deliver tailored solutions that drive innovation,
            efficiency, cost savings, and competitive advantage.
          </p>
        </div>
        <div className="footer-section">
          <h3>Find Us</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            &nbsp; &nbsp;450 Century Pkwy, Ste 250, Allen, Texas 75013
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            &nbsp; &nbsp; +1 (650) 597-3601
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:network@agilelabs.ai">&nbsp; &nbsp; network@agilelabs.ai</a>
          </p>
        </div>
        <div className="footer-section logos">
          <img
            src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720718371/agile/logos/aglietag_du4fcm.png"
            alt="Logo 1"
          />
          {/* <img
            src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720645185/agile/americanlog_fzkc7x.png"
            alt="Logo 2"
          /> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Agilelabs AI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
