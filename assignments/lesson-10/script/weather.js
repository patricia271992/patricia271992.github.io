
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ab2c30aa22c580af118981f42afc6f64&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;
    
    document.getElementById("weather1").innerHTML= weatherData.description;
    document.getElementById("current-temp").innerHTML= weatherData.weather.description;
}
