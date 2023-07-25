"use strict:";

console.log("Welcome");
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

console.log("Screen width: " + screenWidth);
console.log("Screen height: " + screenHeight);

// Assigning variables to elements
const maroon = document.querySelector(".maroon");
const chocolate = document.querySelector(".chocolate");
const orange = document.querySelector(".orange");
const dark = document.querySelector(".dark");

const allCircles = document.querySelectorAll(".circle");

const calculatorBox = document.querySelector(".calculator-box");
const calculatorDisplay = document.querySelector(".display");
const basicButton = document.querySelectorAll(".basic-buttons");
const equalButton = document.querySelector(".button-equal");

// Color changing functions
const maroonColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  maroon.classList.add("active");

  calculatorBox.style.backgroundColor = "#ffb8b1";
  calculatorBox.style.borderColor = "#993441";

  calculatorDisplay.style.borderColor = "#993441";

  basicButton.forEach((button) => (button.style.backgroundColor = "#993441"));
  basicButton.forEach((button) => (button.style.borderColor = "#993441"));

  equalButton.style.backgroundColor = "#993441";
  equalButton.style.borderColor = "#993441";
};

const chocolateColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  chocolate.classList.add("active");

  calculatorBox.style.backgroundColor = "#ebc999";
  calculatorBox.style.borderColor = "#4d3227";

  calculatorDisplay.style.borderColor = "#4d3227";

  basicButton.forEach((button) => (button.style.backgroundColor = "#4d3227"));
  basicButton.forEach((button) => (button.style.borderColor = "#4d3227"));

  equalButton.style.backgroundColor = "#4d3227";
  equalButton.style.borderColor = "#4d3227";
};

const darkColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  dark.classList.add("active");

  calculatorBox.style.backgroundColor = "#ccc7bf";
  calculatorBox.style.borderColor = "#2b2d42";

  calculatorDisplay.style.borderColor = "#2b2d42";

  basicButton.forEach((button) => (button.style.backgroundColor = "#2b2d42"));
  basicButton.forEach((button) => (button.style.borderColor = "#2b2d42"));

  equalButton.style.backgroundColor = "#2b2d42";
  equalButton.style.borderColor = "#2b2d42";
};

const orangeColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  orange.classList.add("active");

  calculatorBox.style.backgroundColor = "#cccccc";
  calculatorBox.style.borderColor = "#f18805";

  calculatorDisplay.style.borderColor = "#f18805";

  basicButton.forEach((button) => (button.style.backgroundColor = "#f18805"));
  basicButton.forEach((button) => (button.style.borderColor = "#f18805"));

  equalButton.style.backgroundColor = "#f18805";
  equalButton.style.borderColor = "#f18805";
};

// Event listeners
maroon.addEventListener("click", maroonColor);
chocolate.addEventListener("click", chocolateColor);
orange.addEventListener("click", orangeColor);
dark.addEventListener("click", darkColor);
