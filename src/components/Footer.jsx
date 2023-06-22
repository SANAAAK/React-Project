import React from "react";
import "../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return(
        <div className="footer">
          <div className="socialMedia">
       <FontAwesomeIcon icon={faTwitter} className="social-icon twitter-icon" />
      <FontAwesomeIcon icon={faFacebook}  className="social-icon facebook-icon"/>
      <FontAwesomeIcon icon={faInstagram} className="social-icon instagram-icon"/>
      <FontAwesomeIcon icon={faPinterest}  className="social-icon pinterest-icon"/>
        </div>
        <p>&copy; 2023 snoapbeauty.com</p>
        </div>

    )
}

export default Footer;