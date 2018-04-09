import React, { Component } from 'react';
import logo from '../images/logo/logo_large.png';

class Footer extends Component {
  render() {
    return  <footer>
              <div className="footer-container">
                <div className="contact-info footer-col">
                  <div><i className="fas fa-building"></i>Str. Mouzinho de Albuquerque <p>8000-000 Faro</p></div>
                  <div><i className="fas fa-phone"></i> +351 289 123 456</div>
                  <div><i className="fas fa-envelope"></i>info@travelagency.com</div>
                </div>
                <div className="social-media-links footer-col">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-twitter-square"></i>
                  <i className="fab fa-pinterest-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-tumblr-square"></i>
                </div>
                <div className="company-logo-footer footer-col">
                  <img src={logo} className="travel-agency-logo-footer" alt="Travel Agency Logo BW" />
                </div>
              </div>
            </footer>
  }
}

export default Footer;