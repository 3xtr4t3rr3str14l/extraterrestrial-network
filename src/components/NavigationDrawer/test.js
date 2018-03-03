/* global describe, it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import NavigationDrawer from '.';

describe('NavigationDrawer component', () => {
  const component = shallow(<NavigationDrawer />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});
