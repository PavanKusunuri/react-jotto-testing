import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter()})

/**
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper} 
 */

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper;
}

/** 
 * Return ShallowWrapper containing node(s) with the given data-test value.
 *  @param { ShallowWrapper } wrapper - Enzyme shallow wrapper to search within.
 *  @param {string} val - Value of data-test attribute for search.
 *  @returns { ShallowWrapper } 
 */

 const findByTestAttr = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`);
 }


test('renders without error', () => {
});
