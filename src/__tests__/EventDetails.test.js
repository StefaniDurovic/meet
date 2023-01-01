import React from 'react';
import { shallow } from 'enzyme';
import EventDetails from '../EventDetails';

describe('<EventDetails /> component', () => {
    test('EventDetails collapsed by default', () => {
      const EventDetailsWrapper = shallow(<EventDetails/>);
      expect(EventDetailsWrapper.find(Event)).toHaveLength(mockData.length);
    });
  });