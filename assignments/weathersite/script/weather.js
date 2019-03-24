

    //forecast 
      
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ab2c30aa22c580af118981f42afc6f64&units=imperial';
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


var apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ab2c30aa22c580af118981f42afc6f64&units=imperial';

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

