import React from 'react';
import { shallow } from 'enzyme';
import GridButton from '../../../components/buttons/grid-button';

describe('GridButton', () => {
  const gridButton = shallow(<GridButton />);
  
  it('renders properly', () => {
    expect(gridButton).toMatchSnapshot();
  });
});

describe('when clicking the grid button', () => {
  beforeEach(() => {
    GridButton.find('.btn-grid').simulate('click');
  });  
});