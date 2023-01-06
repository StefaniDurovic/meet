import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('that user hasn’t specified a number of events to be shown', () => {

        });

        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the number of shown events should be 32', () => {
            AppWrapper.update();
            expect(AppWrapper.state('numberOfEvents')).toEqual(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('that user has opened the app', () => {
            AppWrapper = mount(<App />);
        });

        when('the user enters the number of events to be shown', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventObject = { target: { value: 6 } };
            NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
        });

        then('that number of events should be shown', () => {
            expect(AppWrapper.find('.EventList')).toHaveLength(1);
        });
    });

});