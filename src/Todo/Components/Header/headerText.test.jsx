

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import HeaderText from './index';

describe (' sample description', () => {
  test ('Test Header Text component', () => {
    const component = renderer.create(
      <HeaderText />,
    );
    
    let tree = component.toJSON();
    console.log ( tree );
    expect(tree).toBeTruthy();
    expect(tree.type).toEqual('div');
    expect(tree.children.length).toEqual(4);
  });
});


// test using shallow render
test('Test Header Text Component', () => {
  
  const wrapper = shallow(
    <HeaderText />
  );
  
  expect(wrapper.text()).toBeTruthy();

});

// test using snapshots
it ('Test Header Text Component using snapshots', () => {
  
  const component = renderer.create(
    <HeaderText />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
