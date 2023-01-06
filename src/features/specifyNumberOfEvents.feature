Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given that user hasn’t specified a number of events to be shown
When the user opens the app
Then the number of shown events should be 32

Scenario: User can change the number of events they want to see
Given that user has opened the app
When the user enters the number of events to be shown
Then that number of events should be shown

