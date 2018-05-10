import React from 'react';
import { shallow } from 'enzyme';
import Section from '../../components/section';

describe('Section', () => {
  const section = shallow(<Section />);

  it('renders properly', () => {
    expect(section).toMatchSnapshot();
  });

  it('initializes sections in `state`', () => {
    expect(section.state().grid).toEqual(true);
  });

});