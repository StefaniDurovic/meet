Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
Given that user hasn’t clicked on an event
When the user opens the app
Then all event elements should be collapsed by default

Scenario: User can expand an event to see its details
Given that user has opened the app
When the user clicks on an event
Then the user should see the event’s details

Scenario: User can collapse an event to hide its details
Given that user has clicked on an event
When the user clicks the designated button
Then the event details should be hidden