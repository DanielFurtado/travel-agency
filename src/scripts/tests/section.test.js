import React from 'react';
import { shallow } from 'enzyme';
import Section from '../../components/section';
import Card from '../../components/card/card';
import GridButton from '../../components/buttons/grid-button';

describe('Section', () => {
  const section = shallow(<Section />);

  it('renders properly', () => {
    expect(section).toMatchSnapshot();
  });

  it('initializes sections in `state`', () => {
    expect(section.state().grid).toEqual(true);
  });

});

describe('Card', () => {
  const card = shallow(<Card />);
  
  it('renders properly', () => {
    expect(card).toMatchSnapshot();
  });
});

describe('GridButton', () => {
  const gridButton = shallow(<GridButton />);
  
  it('renders properly', () => {
    expect(gridButton).toMatchSnapshot();
  });
});

describe('when clicking the grid button', () => {
  beforeEach(() => {
    section.find('.btn-grid').simulate('click');
  });

  

});