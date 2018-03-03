/* global describe, it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

describe('Home component', () => {
  const component = shallow(<Home />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});
