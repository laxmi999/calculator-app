"use strict:";

console.log("Welcome");
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

console.log("Screen width: " + screenWidth);
console.log("Screen height: " + screenHeight);

// Assigning variables to elements
const boxColor = document.querySelector(".calculator-box");
const displayColor = document.querySelector(".display");
const buttonColor = document.querySelectorAll(".basic-buttons");
const buttonEqual = document.querySelector(".button-equal");

// Color changing functions
const pinkColor = function () {
  boxColor.style.backgroundColor = "#fbd4f8";
  boxColor.style.borderColor = "#fb8fb7";

  displayColor.style.backgroundColor = "#fffcf2";
  displayColor.style.borderColor = "#fb8fb7";

  buttonColor.forEach((button) => (button.style.backgroundColor = "#faa5c4"));
  buttonColor.forEach((button) => (button.style.borderColor = "#fb8fb7"));

  buttonEqual.style.backgroundColor = "#faa5c4";
  buttonEqual.style.borderColor = "#fb8fb7";
};

const defaultColor = function () {
  boxColor.style.backgroundColor = "#bbbbbb";
  boxColor.style.borderColor = "#555555";

  displayColor.style.backgroundColor = "#f2f2f2";
  displayColor.style.borderColor = "#555555";

  buttonColor.forEach((button) => (button.style.backgroundColor = "#888888"));
  buttonColor.forEach((button) => (button.style.borderColor = "#555555"));

  buttonEqual.style.backgroundColor = "#888888";
  buttonEqual.style.borderColor = "#555555";
};


// Event listeners
document.querySelector(".pink").addEventListener("click", pinkColor);
document.querySelector(".def").addEventListener("click", defaultColor);
