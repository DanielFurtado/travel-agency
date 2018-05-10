import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../components/footer/footer';

describe('Footer', () => {
  const footer = shallow(<Footer />);

  it('renders properly', () => {
    expect(footer).toMatchSnapshot();
  });

});