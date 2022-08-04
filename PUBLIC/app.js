//get elements

var dispHours = document.getElementById("hours");
var dispMins = document.getElementById("mins");
var dispSeconds = document.getElementById("seconds");


//get values now

var userHour = document.getElementById("userHours");
var userMinutes = document.getElementById("userMins");
var sentValue1 = document.getElementById("sentValue1");
var sentValue2 = document.getElementById("sentValue2");
var start = document.getElementById("start");

//set time to the main counter
var hour = 0;
var minutes= 0;
var seconds = 59;

function showTime() {
    dispHours.innerHTML = hour;
    dispMins.innerHTML = minutes;
    dispSeconds.innerHTML = seconds;
}
showTime();





//now get values from user
function getUserHour() {
    hour = userHour.value;
    if (hour.value > 24 || hour.value < 0) {
        alert('enter correct hours')
    }
userHour.value = "";
showTime();
}


function getUserMins() {
    minutes = userMinutes.value;
    if (minutes.value > 59 || minutes.value < 0) {
        alert('enter correct minutes')
    }
    userMinutes.value = "" ;
    showTime();
}


function startTimer() {
    showTime();
    setInterval( runTimer,1000);
}



function runTimer(){
    if(seconds > 59 || seconds < 0 || userMinutes.value > 59 || userMinutes.value < 0 || userHour.value > 24 || userHour.value < 0){
        alert("Invalid Input")
      }

seconds = seconds - 1;
if (seconds < 0 ) {
    seconds = 59;
minutes = minutes - 1;
}

if (minutes < 0) {
    minutes = 59;
    hour = hour - 1;
}


if (hour == 0 && minutes == 0 && seconds == 0) { alert*("Times up buddy")
}
showTime();

}




















