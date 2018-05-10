import React from 'react';
import { shallow } from 'enzyme';
import CardPriceDetails from '../../../components/card/card-price-details';

describe('CardPriceDetails', () => {
  const cardPriceDetails = shallow(<CardPriceDetails />);
  
  it('renders properly', () => {
    expect(cardPriceDetails).toMatchSnapshot();
  });
});