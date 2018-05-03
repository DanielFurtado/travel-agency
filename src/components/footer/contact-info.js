import React, { Component } from 'react';
import ContactInfoRow from './contact-info-row';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: [
        {id: "address", icon: "fa-building", text: "Str. Mouzinho de Albuquerque", text2: "8000-000 Faro"},
        {id: "phone", icon: "fa-phone", text: "+351 289 123 456"},
        {id: "email", icon: "fa-envelope", text: "info@travelagency.com"},
      ]
    };
  }
  
  render() {
    let contactInfo = this.state.contactInfo.map(function(item) {
      return(
        <ContactInfoRow key={item.id} icon={item.icon} text={item.text} text2={item.text2} />
      );
    });

    return (
      <div>{contactInfo}</div> 
    )
  }
}

export default ContactInfo;