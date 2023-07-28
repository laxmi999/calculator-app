"use strict:";

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

const buttonNumbers = document.querySelectorAll(".number");
const buttonEqual = document.querySelectorAll(".button-equal");
const buttonOperators = document.querySelectorAll(".operator");
const buttonDelete = document.querySelector(".delete");
const buttonAllClear = document.querySelector(".all-clear");
const numberGrid = document.querySelector(".number-grid");

const display = document.querySelector(".display");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

// Hover function: change border color to white
const onHover = function (color) {
  basicButton.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      btn.style.borderColor = "#ffffff";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.borderColor = color;
    });
  });
  equalButton.addEventListener("mouseenter", function () {
    equalButton.style.borderColor = "#ffffff";
    equalButton.addEventListener("mouseleave", function () {
      equalButton.style.borderColor = color;
    });
  });
};

// Color mode changing function
const colorMode = function (boxColor, mainColor) {
  calculatorBox.style.backgroundColor = boxColor;
  calculatorBox.style.borderColor = mainColor;

  calculatorDisplay.style.borderColor = mainColor;

  basicButton.forEach((button) => (button.style.backgroundColor = mainColor));
  basicButton.forEach((button) => (button.style.borderColor = mainColor));

  equalButton.style.backgroundColor = mainColor;
  equalButton.style.borderColor = mainColor;
};

// Color changing functions
const darkColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  dark.classList.add("active");

  // Changing color mode
  colorMode("var(--mode1-box-color)", "var(--mode1-main-color)");

  // Hover effect
  onHover("var(--mode1-main-color)");
};

const chocolateColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  chocolate.classList.add("active");

  // Changing color mode
  colorMode("var(--mode2-box-color)", "var(--mode2-main-color)");

  // Hover effect
  onHover("var(--mode2-main-color)");
};

const maroonColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  maroon.classList.add("active");

  // Changing color mode
  colorMode("var(--mode3-box-color)", "var(--mode3-main-color)");

  // Hover effect
  onHover("var(--mode3-main-color)");
};

const orangeColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  orange.classList.add("active");

  // Changing color mode
  colorMode("var(--mode4-box-color)", "var(--mode4-main-color)");

  // Hover effect
  onHover("var(--mode4-main-color)");
};

// Event listeners
maroon.addEventListener("click", maroonColor);
chocolate.addEventListener("click", chocolateColor);
orange.addEventListener("click", orangeColor);
dark.addEventListener("click", darkColor);

// Calculation operations
// buttonAll = [...numberGrid.children];

const displayInput = function (digit) {
  const ip = input.textContent === "0" ? digit : input.textContent + digit;
  input.textContent = ip;
};

const deleteButton = function () {
  const ip = String(input.textContent).slice(0, -1);
  input.textContent = ip;
};

numberGrid.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("number") ||
    e.target.classList.contains("operator")
  ) {
    displayInput(e.target.textContent);
  }

  if (e.target.classList.contains("delete")) deleteButton();

  if (e.target.classList.contains("all-clear")) {
    input.textContent = "0";
    output.textContent = "0";
  }
});

window.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (Number(e.key)) displayInput(e.key);
  if (e.key === "Backspace") deleteButton();
});
