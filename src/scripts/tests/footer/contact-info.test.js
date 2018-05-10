import React from 'react';
import { shallow } from 'enzyme';
import ContactInfo from '../../../components/footer/contact-info';

describe('ContactInfo', () => {
  const contactInfo = shallow(<ContactInfo />);

  it('renders properly', () => {
    expect(contactInfo).toMatchSnapshot();
  });

});