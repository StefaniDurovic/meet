# A React app for finding events in different cities

## FEATURES:

* **FEATURE 1: FILTER EVENTS BY CITY**     

*Scenario 1*: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.  

Given user hasn’t searched for any city  

When the user opens the app  

Then the user should see a list of all upcoming events  


*Scenario 2*: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY. 

Given the main page is open  

When user starts typing in the city textbox  

Then the user should see a list of cities (suggestions) that match what they’ve typed  


*Scenario 3*: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.  

Given the user was typing “Berlin” in the city textbox  

And the list of suggested cities is showing  

When the user selects a city (e.g., “Berlin, Germany”) from the list  

Then their city should be changed to that city (i.e., “Berlin, Germany”)  

And the user should receive a list of upcoming events in that city  


* **FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS**   

*Scenario 1*: An event element is collapsed by default  

User story: As a user, I would like the event element to be collapsed by default, so that I can easily navigate and find the events I like.  

Gherkin: 

Given that user hasn’t clicked on an event  

When the user opens the app  

Then all event elements should be collapsed by default  


*Scenario 2*: User can expand an event to see its details  

User story: As a user, I should be able to expand an event, so that I can see the details of the event I am interested in.  

Gherkin:  

Given that user has opened the app  

When the user clicks on an event  

Then the user should see the event’s details    


*Scenario 3*: User can collapse an event to hide its details  

User story: As a user, I should be able to collapse an event, so that I can hide its details.  

Gherkin:  

Given that user has clicked on an event  

When the user clicks the designated button  

Then the event details should be hidden   


* **FEATURE 3: SPECIFY NUMBER OF EVENTS**  

*Scenario 1*: When user hasn’t specified a number, 32 is the default number  

User story: As a user, if I have not specified the number of events to see, I should see that the default number of events is 32, so that I know what to expect.  

Gherkin:   

Given that user hasn’t specified a number of events to be shown  

When the user opens the app  

Then the number of shown events should be 32  


*Scenario 2*: User can change the number of events they want to see  

User story: As a user, I should be able to change the number of events I want to see, so that I can adjust the user experience in this feature to my preferences.  

Gherkin:  

Given that user has opened the app  

When the user enters the number of events to be shown  

Then that number of events should be shown  


* **FEATURE 4: USE THE APP WHEN OFFLINE**  

*Scenario 1*: Show cached data when there’s no internet connection  

User story: As a user, I should be able to see cached data when there is no internet connection, so that I can continue seeing previously saved data.  

Gherkin:  

Given that there is no internet connection  

When the user opens the app in offline mode   

Then the user should see previously saved data  


*Scenario 2*: Show error when user changes the settings (city, time range)  

User story: As a user, I should be able to see an error message when trying to change settings in offline mode, so that I have an overview of which settings of mine are saved.  

Gherkin:   

Given that there is no internet connection  

When the user tries to change settings in offline mode  

Then the user should see an error message  


* **FEATURE 5: DATA VISUALIZATION**   

*Scenario 1*: Show a chart with the number of upcoming events in each city   

User story: As a user, I should be able to see a chart with the number of upcoming events in each city, so that that can make it easier for me to browse the information I am interested in.   

Gherkin:  

Given that user has opened the app  

When the user selects a city  

Then the user should see a chart with the number of upcoming events in that city
