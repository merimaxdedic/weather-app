# Weather-App
Welcome to the Weather App! This simple web application provides you with the latest weather information for different cities. It is built using HTML, CSS, and JavaScript, that fetches weather data.dddd
# Overview
This is a Single Page Weather Application. The App uses openWeather API to get real time data of weather conditions at different places around the globe.
# Functions
This application has just two functions/methods that have been written in javascript:

InitializeElements() is the first function. What this function does, it initializes the html elements that we use to display the data from our API The initialization process helps javascript to know on which html element it will display the API data.

FetchDataFromApi(city_name) is another function What this function does, it uses the API key plus the link to the server where the API is hosted, it then fetches weather data from the server. The name of the city whose data is to be fetched is passed as a parameter to the function.

The function then loops through the json data returned and extracts the needed data from the objects in the json data.
# Event Listeners
This application has three event listeners:

Input event-This event listener is used on the search bar to automatically start searching for the weather data of the city you have entered on the search bar. Therefore, no "submit" button is required to submit the data since it is automatically submitted.

Click event-This event is used to listen if the user clicks the toggle switch to change the display of the app from dark to light and vice versa.

Transitionend event-This event is used to listen when the toggle button's circlar part finishes transitioning from one end of the switch to the other for it to change its background color between green and blue.

# How it works
This is just a one page Application. Once the app is started on the browser, just search the name of the city you are interested to know its weather conditions. As you continue typing, the app will fetch the data from the server using the API.
