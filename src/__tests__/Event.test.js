import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('Event /> component', () => {
  let EventWrapper;
  const event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test('rendering Event component', () => {
    expect(EventWrapper).toBeDefined();
  });

  test('rendering Event description', () => {
    const summary = EventWrapper.find('h4.description');
    expect(summary).toHaveLength(1);
    expect(summary.text()).toBe(event.description);
  });

  test('rendering start description', () => {
    const eventStart = EventWrapper.find('p.event-start');
    expect(eventStart).toHaveLength(1);
    expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
  });

  test('rendering location details', () => {
    const eventLocation = EventWrapper.find('p.event-location');
    expect(eventLocation).toHaveLength(1);
    expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);
  });

  test('rendering show-details button when deats collapsed', () => {
    const detailsButton = EventWrapper.find('button.details-button');
    expect(detailsButton).toHaveLength(1);
    expect(detailsButton.text()).toBe('Show more');
  });

  test('rendering more details on button click', () => {
    const detailsButton = EventWrapper.find('button.details-button');
    expect(detailsButton.text()).toBe('Show more');
    expect(EventWrapper.find('h2.about')).toHaveLength(0);
    expect(EventWrapper.find('a.link')).toHaveLength(0);
    expect(EventWrapper.find('p.description')).toHaveLength(0);
    detailsButton.simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

})