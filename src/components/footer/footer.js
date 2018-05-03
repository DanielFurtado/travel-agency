import React from 'react';
import logo from '../../images/logo/logo_large.png';
import ContactInfo from './contact-info';
import SocialMedia from './social-media';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <address className="contact-info footer-col">
          <ContactInfo />
        </address>
        <div className="social-media-links footer-col">
          <SocialMedia />
        </div>
        <div className="company-logo-footer footer-col">
          <img src={logo} className="travel-agency-logo-footer" alt="Travel Agency Logo BW" />
        </div>
      </div>
    </footer>
  )  
}

export default Footer;