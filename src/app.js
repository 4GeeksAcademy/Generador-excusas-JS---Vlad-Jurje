import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {

let who = ['My dog ', 'Ana ', 'My cat ', 'Dad ', 'Somebody ']
let action = ['ate ', 'broke ', 'stole ', 'peed ',' crushed ']
let what = ['my homework ', 'my laptop ', 'the money ', ' the blanket ']
let when = ['at breakfast time.', 'during class.', 'when I was sleeping.', 'while I was playing.']

function getRandomNumber (a, b) {
return Math.floor(Math.random() * (b - a) + a); 
}

function getRandom(anyArray){
let max = anyArray.length;
let min = 0;
let random = getRandomNumber (min, max);
return anyArray[random]; 
}


document.getElementById("excuse").innerHTML = getRandom(who) + getRandom(action) + getRandom(what) + getRandom(when)
};


