const HourHand =document.querySelector("#hour");
const MinuteHand = document.querySelector("#minute");
const SecondHand = document.querySelector("#second");

var date = new Date();
let hr=date.getHours();
let min=date.getMinutes();
let sec = date.getSeconds();
//Setting the hour, minute and second position to the degrees
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min * 360/60)+(sec*(360/60)/60);
let secPosition = sec*360/6;

function running_clock(){
 hrPosition = hrPosition +(3/360);
     minPosition = minPosition+(6/60);
     secPosition = secPosition+6;
//rotates the clock according to the degree
HourHand.style.transform = "rotate("+ hrPosition + "deg)";
MinuteHand.style.transform = "rotate("+ minPosition + "deg)";
SecondHand.style.transform = "rotate("+ secPosition + "deg)";
}

//runs in every 1000 ms
var interval = setInterval(running_clock, 1000);