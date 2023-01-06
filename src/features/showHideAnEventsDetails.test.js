import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('that user hasn’t clicked on an event', () => {

        });

        when("the user opens the app", () => {
          AppWrapper = mount(<App />);
        });

        then('all event elements should be collapsed by default', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(0); 
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('that user has opened the app', () => {
            AppWrapper = mount(<App />);
        });

        when('the user clicks on an event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
        });

        then('the user should see the event’s details', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('that user has clicked on an event', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click')
        });

        when('the user clicks the designated button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
        });

        then('the event details should be hidden', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
        });
    });
});