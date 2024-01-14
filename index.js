// the key to the openWeather API that we are going to use
const MY_API_KEY = "ce21ea009e94e1fc7a863c0d2988825f";
// a url to our API
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// this variables will be used to display the weather conditions on the browser
let city, sunshine, cloud, humidity, temperature, windspeed, pressure,
search_input, toggle_switch, dark_light_mode = "light", weather_details_div, parent_div, toggle_circle

// method to initialize our elements
function InitializeElements(){
    city = document.getElementById("city-name");
    sunshine = document.getElementById("sunny_value");
    cloud = document.getElementById("clouds_value");
    humidity = document.getElementById("humidity_value");
    temperature = document.getElementById("temperature_value");
    windspeed = document.getElementById("wind_value");
    pressure = document.getElementById("pressure_value");
    search_input = document.getElementById("search_city");
    toggle_switch = document.getElementById("toggle2");
    weather_details_div = document.getElementsByClassName("weather-details")[0];
    parent_div = document.getElementsByClassName("main-body")[0];
    toggle_circle = document.getElementById("slide-ball");
}

// this function will load data from API
async function FetchDataFromApi(city_name){
    const response = await fetch(API_URL + city_name.toLowerCase() + `&appid=${MY_API_KEY}`);
