  var today = new Date();

var year = today.getFullYear();


var monthNames = new Array(12);
monthNames[0] = "January";
monthNames[1] = "February";
monthNames[2] = "March";
monthNames[3] = "April";
monthNames[4] = "may";
monthNames[5] = "June";
monthNames[6] = "July";
monthNames[7] = "August";
monthNames[8] = "September";
monthNames[9] = "October";
monthNames[10] = "November";
monthNames[11] = "December";
var month = monthNames[today.getMonth()];

//day of week
    var dayOfWeek = today.getDay();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var day = weekday[dayOfWeek];



var getDate = today [today.getDate()];



var fullDate = day +", " + month + " "+ today.getDate() +","+ year ;

document.getElementById("currentDate").innerHTML=fullDate;
