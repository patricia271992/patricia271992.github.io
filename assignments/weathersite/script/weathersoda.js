     
var apiURLstring2 ='https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=ab2c30aa22c580af118981f42afc6f64';
var weatherRequest2 = new XMLHttpRequest();

weatherRequest2.open('GET', apiURLstring2, true);
weatherRequest2.responseType = 'json';
weatherRequest2.send();

weatherRequest2.onload = function() {
    var weatherData2 = weatherRequest2.response;
    
    document.getElementById("weather1.2").innerHTML= weatherData2.weather[0].description;
    document.getElementById("weather2.2").innerHTML= weatherData2.main.temp +"&deg; F";
    document.getElementById("weather3.2").innerHTML= weatherData2.main.humidity +"%";
    document.getElementById("weather4.2").innerHTML= weatherData2.wind.speed + "mph";
  }


var apiURLforecast2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=ab2c30aa22c580af118981f42afc6f64&units=imperial';

var forecastRequest2 = new XMLHttpRequest();

forecastRequest2.open('GET', apiURLforecast2, true);
forecastRequest2.responseType ='json';
forecastRequest2.send();

forecastRequest2.onload = function() {
    var forecastData2 = forecastRequest2.response;

    document.getElementById("sodatemp1").innerHTML= forecastData2.list[0].main.temp + "&deg"+"F";
    document.getElementById("sodatemp2").innerHTML= forecastData2.list[1].main.temp + "&deg"+"F";
    document.getElementById("sodatemp3").innerHTML= forecastData2.list[2].main.temp + "&deg"+"F";
    document.getElementById("sodatemp4").innerHTML= forecastData2.list[3].main.temp + "&deg"+"F";
    document.getElementById("sodatemp5").innerHTML= forecastData2.list[4].main.temp + "&deg"+"F";
}

