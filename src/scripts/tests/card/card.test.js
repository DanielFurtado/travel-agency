import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../../components/card/card';

describe('Card', () => {
  const card = shallow(<Card />);
  
  it('renders properly', () => {
    expect(card).toMatchSnapshot();
  });
});