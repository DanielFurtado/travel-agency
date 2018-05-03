import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../components/main';
import fetch from 'isomorphic-fetch';

describe('Main', () => {
  const main = shallow(<Main />);

  it('renders properly', () => {
    expect(main).toMatchSnapshot();
  });

  it('should find a result via fetch', () => {
    fetch("http://localhost:3000/api/products").then(() => console.log('Success')).catch((err) => console.log('Error!!!!' + err));
  });

  it('initializes sections in `state`', () => {
    expect(main.state().sections).toEqual([]);
  })

});