import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header';

describe('Header', () => {
  const header = shallow(<Header />);

  it('render properly', () => {
    expect(header).toMatchSnapshot();
  });
});