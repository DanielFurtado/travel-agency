import React, { Component } from 'react';
import logo from '../images/logo/logo_large.png';


class ContactInfoRow extends Component {
  render() {
    return  <div className="row">
              <div className="col icon-col">
                <i className={"fas " + this.props.icon}></i>
              </div>
              <div className="col">
                <p>{this.props.text}</p>
                {this.props.text2 ? ( 
                <p>{this.props.text2}</p>
                ) : null }
              </div>
            </div>
  }
}

class IconButton extends Component {
  render() {
    return  <button className="icon-button">
              <i className={this.props.iconClass}></i>
            </button>
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {name: "Facebook", class: "fab fa-facebook-f"},
        {name: "Twitter", class: "fab fa-twitter"},
        {name: "Pinterest", class: "fab fa-pinterest"},
        {name: "Instagram", class: "fab fa-instagram"},
        {name: "Tumblr", class: "fab fa-tumblr"}
      ]
    };
  }

  render() {
    let socialMediaIcons = this.state.icons.map(function(item) {
      return(
        <IconButton iconClass={item.class} key={item.name} />
      );
    });

    return  <footer>
              <div className="footer-container">
                <div className="contact-info footer-col">
                  <ContactInfoRow icon="fa-building" text="Str. Mouzinho de Albuquerque" text2="8000-000 Faro" />
                  <ContactInfoRow icon="fa-phone" text="+351 289 123 456" />
                  <ContactInfoRow icon="fa-envelope" text="info@travelagency.com" />
                </div>
                <div className="social-media-links footer-col">
                  {socialMediaIcons}
                </div>
                <div className="company-logo-footer footer-col">
                  <img src={logo} className="travel-agency-logo-footer" alt="Travel Agency Logo BW" />
                </div>
              </div>
            </footer>
  }
}

export default Footer;