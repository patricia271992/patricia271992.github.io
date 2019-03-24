var townInfo= {
  "towns" : [
  {
    "name": "Franklin",
    "motto": "Where you will grow!",
    "yearFounded": 1788,
    "currentPopulation": 30458,
    "averageRainfall": 21,
    "events" : [
      "March 4: March to the Drum of Donuts",
      "September 5 - 11: Founder Days",
      "December 1 - 26: Christmas in the Heart"
    ]
  },
  {
    "name": "Fish Haven",
    "motto": "This is Fish Heaven.",
    "yearFounded": 1864,
    "currentPopulation": 501,
    "averageRainfall": 14.20,
    "events" : [
      "April 1: How Big Was That Fish Day",
      "May 15-30: Rush the Creek Days",
      "July 24: Bear Lake Blunder Run",
      "December 12: Light the Tree"
    ]
  },
  {
    "name": "Greenville",
    "motto": "Green is our way of life.",
    "yearFounded": 1805,
    "currentPopulation": 33458,
    "averageRainfall": 25,
    "events" : [
      "February 10-12: Greenbration",
      "May 8 - 18: Greenville Founder Days",
      "June 20: Verde and Valiant Day",
      "November 15-16: Greensome Gathering"
    ]
  },
  {
    "name": "Placerton",
    "motto": "Positive Placement in Placerton.",
    "yearFounded": 1946,
    "currentPopulation": 512,
    "averageRainfall": 39,
    "events" : [
      "July 4: A Blaze of Glory",
      "October 20: Fall through Fall"
    ]
  },
  {
    "name": "Preston",
    "motto": "Home of Napoleon Dynamite",
    "yearFounded": 1866,
    "currentPopulation": 5204,
    "averageRainfall": 16.65,
    "events" : [
      "March 29: Work Creek Revival",
      "July 8-12: Napoleon Dynamite Festival",
      "November 2-4: Freedom Days"
    ]
  },
  {
    "name": "Soda Springs",
    "motto": "Historic Oregon Trail Oasis. The Soda is on Us",
    "yearFounded": 1858,
    "currentPopulation": 2985,
    "averageRainfall": 15.75,
    "events" : [
      "February 29: Geyser Song Day",
      "May 1-6: Days of May Celebration",
      "October 15-16: Octoberfest"
    ]
  },
  {
    "name": "Springfield",
    "motto": "Where everyone is lifted.",
    "yearFounded": 1826,
    "currentPopulation": 17852,
    "averageRainfall": 17,
    "events" : [
      "January 8: Spring into Winter",
      "April 10-20: Celebration of Life",
      "July 31-Aug 15: Dog Days of Summer Festival"
    ]
  }
 ]
};


      for (var i = 0; i < townInfo.towns.length; i++) {
        if (i===0 || i===2 || i===3 ||i===6) {continue;}
        
        var article = document.createElement('article');
        var h1 = document.createElement('h1'); 
        h1.textContent = townInfo.towns[i].name;
        var h2 = document.createElement('h2');
        h2.textContent = townInfo.towns[i].motto;
        var h3 = document.createElement('h3');
        h3.textContent = "Year Founded: " + townInfo.towns[i].yearFounded;
        var h4 = document.createElement('h4');
        h4.textContent = "Population: " + townInfo.towns[i].currentPopulation;
        var h5 = document.createElement('h5');
        h5.textContent = "Annual Rain Fall: " + townInfo.towns[i].averageRainfall;
     
        var img = document.createElement('img');
        if (townInfo.towns[i].name === 'Preston'){
            img.setAttribute("src","./images/cit230_image_franklin-small.jpg" );
        }
        else if (townInfo.towns[i].name === 'Fish Haven'){
         img.setAttribute("src","./images/fish.png" );
        }
             else if (townInfo.towns[i].name === 'Soda Springs') 
               {img.setAttribute("src","./images/soda.png" );
                        }
    
        article.appendChild(h1);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
        article.appendChild(img);
        document.getElementById("section").appendChild(article);
      }
    
 


      
var forecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ab2c30aa22c580af118981f42afc6f64&units=imperial';
var icon = forecast.list[0].weather[0].icon;
var Description = forecast.weather[0].main; 

    var imageUrl = 'http://openweathermap.org/img/w/'+ icon +'.png';

 
    document.getElementById("currentIcon").setAttribute("src",imageUrl);
    document.getElementById("currentIcon").setAttribute("alt",Description);
