import React from 'react';
import { shallow } from 'enzyme';
import ContactInfoRow from '../../../components/footer/contact-info-row';

describe('ContactInfoRow', () => {
  const contactInfoRow = shallow(<ContactInfoRow />);

  it('renders properly', () => {
    expect(contactInfoRow).toMatchSnapshot();
  });
});