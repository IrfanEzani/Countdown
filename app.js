var countDownDate = new Date("May 23, 2020 14:50:00").getTime();


countdown = setInterval(function() {

var currentDate = new Date().getTime();
let timeremain = Math.floor((countDownDate - currentDate)/1000);

var days = Math.floor(timeremain / (60 * 60 * 24));
var hours = Math.floor((timeremain % ( 60 * 60 * 24)) / (60 * 60));
var minutes = Math.floor((timeremain % (60 * 60)) / (60));
var seconds = Math.floor(timeremain % (60));


document.getElementById('dy').innerHTML = days
document.getElementById('hr').innerHTML = hours
document.getElementById('mn').innerHTML = minutes
document.getElementById('sc').innerHTML = seconds

if (timeremain < 0) {
  document.getElementById('dy').innerHTML = "D"
  document.getElementById('hr').innerHTML = "O"
  document.getElementById('mn').innerHTML = "N"
  document.getElementById('sc').innerHTML = "E"
}

},1000);
