


import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ActionRow from './index';

test('Test NoRecordsFound component', () => {
  // const addButtonText = 'Add New Todo';

  // const wrapper = shallow(
  //   <ActionRow addButtonText={addButtonText}/>
  // );
  
  // expect(wrapper.text()).toBe(addButtonText);
  const addButtonText = 'Add New Todo';

  const component = renderer.create(
    <ActionRow addButtonText={addButtonText}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
});
