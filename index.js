// the key to the openWeather API that we are going to use
const MY_API_KEY = "ce21ea009e94e1fc7a863c0d2988825f";
// a url to our API
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// this variables will be used to display the weather conditions on the browser
let city, sunshine, cloud, humidity, temperature, windspeed, pressure,
search_input, toggle_switch, dark_light_mode = "light", weather_details_div, parent_div, toggle_circle; 