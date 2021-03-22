"use strict";

let hisName = prompt("What's his name");
let herName = prompt("What's her name");

const result = Math.trunc(Math.random() * 100) + 1

function loveCalculator (){
    return alert(`Congratulations! ${herName}, you and ${hisName} are ${result}% compatible`)
}

loveCalculator();

//console.log(ready);