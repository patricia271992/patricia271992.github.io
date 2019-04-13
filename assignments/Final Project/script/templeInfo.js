var temple= {
    "list": [
    {
    "Name":"Boise Idaho Temple",
"Address":["1211 S Cole Rd",
"Boise ID 83709-1871",
 "United States"],
"Telephone":"(1) 208-322-4422",
"Services": ["No clothing rental available",
"No cafeteria available",
"No patron housing available" ,
"Distribution center nearby"],
"Closures" : [
"Monday, 6 May 2019 - Monday, 20 May 2019",
"Thursday, 4 July 2019",
"Saturday, 5 October 2019",
 "Monday, 14 October 2019 - Monday, 28 October 2019",
 "Wednesday, 27 November 2019 (Limited Hours)",
 "Thursday, 28 November 2019",
 "Tuesday, 24 December 2019 - Wednesday, 25 December 2019",
 "Tuesday, 31 December 2019 (Limited Hours)"]
},
{
    "Name":"Idaho Falls Idaho Temple",
"Address": ["1000 Memorial Dr", 
    "Idaho Falls ID 83402-3410",
    "United States"],
"Telephone":"(1) 208-522-7669",
"Services":["Clothing rental available",
    "Cafeteria available",
    "No patron housing available",
    "Distribution center nearby"],
    "Closures" :["Monday, 24 June 2019 - Monday, 8 July 2019",
     "Saturday, 5 October 2019",
     "Wednesday, 27 November 2019 (Limited Hours)",
     "Thursday, 28 November 2019",
     "Tuesday, 24 December 2019 - Wednesday, 25 December 2019",
     "Tuesday, 31 December 2019"]
},
{
    "Name":"Meridian Idaho Temple",
"Address": ["7355 N Linder Rd",
     "Meridian ID 83646" ,
     "United States"],
"Telephone":"(1) 208-957-7300",
"Services":["No clothing rental available",
"No cafeteria available",
"No patron housing available",
"No distribution center nearby"],
"Closures" : ["Monday, 3 June 2019 - Monday, 17 June 2019",
    "Thursday, 4 July 2019",
    "Saturday, 5 October 2019",
    "Monday, 4 November 2019 - Monday, 18 November 2019",
    "Wednesday, 27 November 2019 - Thursday, 28 November 2019",
    "Tuesday, 24 December 2019 - Wednesday, 25 December 2019",
    "Tuesday, 31 December 2019 - Wednesday, 1 January 2020"]
},
{
    "Name":"Twin Falls Idaho Temple",
"Address":[ "1405 Eastland Dr N",
    "Twin Falls ID 83301",
    "United States"],
"Telephone":"(1) 208-736-7070",
"Services":[ "No clothing rental available",
    "No cafeteria available",
    "No patron housing available",
    "Distribution center nearby"],
"Closures" : ["Monday, 10 June 2019 - Monday, 24 June 2019",
    "Thursday, 4 July 2019",
    "Saturday, 5 October 2019",
    "Wednesday, 27 November 2019 (Limited Hours)",
    "Thursday, 28 November 2019",
    "Tuesday, 24 December 2019",
    "Wednesday, 25 December 2019",
    "Tuesday, 31 December 2019"]
}
]
};

for (var i = 0; i < temple.list.length; i++){

if (temple.list[i].Name === 'Boise Idaho Temple'){
document.getElementById(name).innerHTML= temple.list[i].Name;
document.getElementById(address).innerHTML= temple.list[i].Address;
document.getElementById(telephone).innerHTML= temple.list[i].Telephone;
document.getElementById(services).innerHTML= temple.list[i].Services;
document.getElementById(closure).innerHTML= temple.list[i].Closures;
}
else if (temple.list[i].Name === 'Idaho Falls Idaho Temple'){
    document.getElementById(name2).innerHTML= temple.list[i].Name;
    document.getElementById(address2).innerHTML= temple.list[i].Address;
    document.getElementById(telephone2).innerHTML= temple.list[i].Telephone;
    document.getElementById(services2).innerHTML= temple.list[i].Services;
    document.getElementById(closure2).innerHTML= temple.list[i].Closures;
    }
    else if (temple.list[i].Name === 'Meridian Idaho Temple'){
        document.getElementById(name3).innerHTML= temple.list[i].Name;
        document.getElementById(address3).innerHTML= temple.list[i].Address;
        document.getElementById(telephone3).innerHTML= temple.list[i].Telephone;
        document.getElementById(services3).innerHTML= temple.list[i].Services;
        document.getElementById(closure3).innerHTML= temple.list[i].Closures;
        }
else if (temple.list[i].Name === 'Twin Falls Idaho Temple'){
    document.getElementById(name4).innerHTML= temple.list[i].Name;
    document.getElementById(address4).innerHTML= temple.list[i].Address;
    document.getElementById(telephone4).innerHTML= temple.list[i].Telephone;
    document.getElementById(services4).innerHTML= temple.list[i].Services;
    document.getElementById(closure4).innerHTML= temple.list[i].Closures;
    }
}