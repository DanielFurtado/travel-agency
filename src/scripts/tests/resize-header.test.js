import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../components/main';
import ResizeHeader from '../../components/resize-header';

describe('ResizeHeader', () => {
  const main = shallow(<Main />);
  let onScroll;
  
  beforeEach(()=> {
    onScroll = jest.fn();
    Main.instance().componentDidMount();
  });

  it('Should call the onScroll method when a user scrolls', () => {
    expect(onScroll).toNotHaveBeenCalled();
    window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));
    expect(onScroll).toHaveBeenCalled();
  });
});