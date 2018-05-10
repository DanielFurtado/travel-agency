import React from 'react';
import { shallow } from 'enzyme';
import BookNowButton from '../../../components/buttons/book-now-button';

describe('BookNowButton', () => {
  const bookNowButton = shallow(<BookNowButton />);
  
  it('renders properly', () => {
    expect(bookNowButton).toMatchSnapshot();
  });
});