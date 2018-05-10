import React from 'react';
import { shallow } from 'enzyme';
import SocialMedia from '../../../components/footer/social-media';

describe('SocialMedia', () => {
  const socialMedia = shallow(<SocialMedia />);

  it('renders properly', () => {
    expect(socialMedia).toMatchSnapshot();
  });

});