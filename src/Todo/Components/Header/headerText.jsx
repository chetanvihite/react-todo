


import React from 'react';
import { shallow } from 'enzyme';

import NoRecordsFound from '../../components/NoRecordsFound'

test('Test NoRecordsFound component', () => {
  const noRecordsMessage = 'No Records Found';

  const wrapper = shallow(
    <NoRecordsFound message={noRecordsMessage} />
  );
  
  expect(wrapper.text()).toBe(noRecordsMessage);
});
