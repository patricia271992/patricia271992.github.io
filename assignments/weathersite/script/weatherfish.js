
var apiURLstring ='https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=ab2c30aa22c580af118981f42afc6f64';
var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;
    
    document.getElementById("weather1").innerHTML= weatherData.weather[0].description;
    document.getElementById("weather2").innerHTML= weatherData.main.temp +"&deg; F";
    document.getElementById("weather3").innerHTML= weatherData.main.humidity +"%";
    document.getElementById("weather4").innerHTML= weatherData.wind.speed + "mph";
  }


var apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=ab2c30aa22c580af118981f42afc6f64&units=imperial';

var forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', apiURLforecast, true);
forecastRequest.responseType ='json';
forecastRequest.send();

forecastRequest.onload = function() {
    var forecastData = forecastRequest.response;

    document.getElementById("temp1").innerHTML= forecastData.list[0].main.temp + "&deg"+"F";
    document.getElementById("temp2").innerHTML= forecastData.list[1].main.temp + "&deg"+"F";
    document.getElementById("temp3").innerHTML= forecastData.list[2].main.temp + "&deg"+"F";
    document.getElementById("temp4").innerHTML= forecastData.list[3].main.temp + "&deg"+"F";
    document.getElementById("temp5").innerHTML= forecastData.list[4].main.temp + "&deg"+"F";
}

var weatherMap = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=ab2c30aa22c580af118981f42afc6f64'
var mapRequest =new XMLHttpRequest();
mapRequest.open('GET', weatherMap, true);
mapRequest.responseType ='json';
mapRequest.send();

var imageUrl = 'http://openweathermap.org/data/2.5?'+ weatherMap +'.png';

 
document.createElement("map").innerHTML= weatherMap;
