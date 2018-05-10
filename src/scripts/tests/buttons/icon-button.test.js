import React from 'react';
import { shallow } from 'enzyme';
import IconButton from '../../../components/buttons/icon-button';

describe('IconButton', () => {
  const iconButton = shallow(<IconButton />);
  
  it('renders properly', () => {
    expect(iconButton).toMatchSnapshot();
  });
});