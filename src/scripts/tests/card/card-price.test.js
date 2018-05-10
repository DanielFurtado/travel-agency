import React from 'react';
import { shallow } from 'enzyme';
import CardPrice from '../../../components/card/card-price';

describe('CardPrice', () => {
  const cardPrice = shallow(<CardPrice />);

  it('renders properly', () => {
    expect(cardPrice).toMatchSnapshot();
  });

});