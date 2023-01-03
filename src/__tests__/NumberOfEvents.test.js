import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('rendering NumberOfEvents component', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
  });

  test('rendering default number of events (32)', () => {
    expect(NumberOfEventsWrapper.find('input.number').prop('type')).toBe('number');
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

})