var today = new Date();

var year = today.getFullYear();

var monthNumber = today.getMonth();
var monthNames = new Array(12);
monthNumber[0] = "January";
monthNumber[1] = "February";
monthNumber[2] = "March";
monthNumber[3] = "April";
monthNumber[4] = "may";
monthNumber[5] = "June";
monthNumber[6] = "July";
monthNumber[7] = "August";
monthNumber[8] = "September";
monthNumber[9] = "October";
monthNumber[10] = "November";
monthNumber[11] = "December";

var month = monthNames[monthNumber];

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



var fullDate = day +"," + month + ""+ today.getDate() +","+ year ;

document.getElementById("currentDate").innerHTML = fullDate;

document.getElementById("year").innerHTML =year;