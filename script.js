"use strict:";

// var screenWidth = window.innerWidth;
// var screenHeight = window.innerHeight;

// console.log("Screen width: " + screenWidth);
// console.log("Screen height: " + screenHeight);

// Assigning variables to elements
const maroon = document.querySelector(".maroon");
const chocolate = document.querySelector(".chocolate");
const orange = document.querySelector(".orange");
const dark = document.querySelector(".dark");

const calculatorBox = document.querySelector(".calculator-box");
const calculatorDisplay = document.querySelector(".display");
const basicButton = document.querySelectorAll(".basic-buttons");
const equalButton = document.querySelector(".button-equal");

const allCircles = document.querySelectorAll(".circle");

const buttonNumbers = document.querySelectorAll(".number");
const buttonEqual = document.querySelectorAll(".button-equal");
const buttonDelete = document.querySelector(".delete");
const buttonAllClear = document.querySelector(".all-clear");

const display = document.querySelector(".display");
const input = document.querySelector(".input");
const output = document.querySelector(".ouput");

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

  // Hover effect
  basicButton.forEach(btn => {
    btn.addEventListener("mouseenter", function () {
      btn.style.borderColor = "#ffffff";
    });
  });
  equalButton.addEventListener("mouseenter", function () {
    equalButton.style.borderColor = "#ffffff";
  });

  basicButton.forEach(btn => {
    btn.addEventListener("mouseleave", function () {
      btn.style.borderColor = "#993441";
    });
  });
  equalButton.addEventListener("mouseleave", function () {
    equalButton.style.borderColor = "#993441";
  });
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

  // Hover effect
  basicButton.forEach(btn => {
    btn.addEventListener("mouseenter", function () {
      btn.style.borderColor = "#ffffff";
    });
  });
  equalButton.addEventListener("mouseenter", function () {
    equalButton.style.borderColor = "#ffffff";
  });

  basicButton.forEach(btn => {
    btn.addEventListener("mouseleave", function () {
      btn.style.borderColor = "#4d3227";
    });
  });
  equalButton.addEventListener("mouseleave", function () {
    equalButton.style.borderColor = "#4d3227";
  });
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

  // Hover effect
  basicButton.forEach(btn => {
    btn.addEventListener("mouseenter", function () {
      btn.style.borderColor = "#ffffff";
    });
  });
  equalButton.addEventListener("mouseenter", function () {
    equalButton.style.borderColor = "#ffffff";
  });

  basicButton.forEach(btn => {
    btn.addEventListener("mouseleave", function () {
      btn.style.borderColor = "#2b2d42";
    });
  });
  equalButton.addEventListener("mouseleave", function () {
    equalButton.style.borderColor = "#2b2d42";
  });
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

  // Hover effect
  basicButton.forEach(btn => {
    btn.addEventListener("mouseenter", function () {
      btn.style.borderColor = "#ffffff";
    });
  });
  equalButton.addEventListener("mouseenter", function () {
    equalButton.style.borderColor = "#ffffff";
  });

  basicButton.forEach(btn => {
    btn.addEventListener("mouseleave", function () {
      btn.style.borderColor = "#f18805";
    });
  });
  equalButton.addEventListener("mouseleave", function () {
    equalButton.style.borderColor = "#f18805";
  });
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

buttonNumbers.forEach((btn) => {
  btn.addEventListener("click", function () {
    // console.log(btn.textContent);
    // input.textContent = btn.textContent;
    displayInput(btn.textContent);
  });
});

// buttonAllClear.addEventListener("click", function () {
//   input.textContent = "0";
//   output.textContent = "0";
// });

buttonAllClear.addEventListener("click", function () {
  const ipop = [...display.children];
  ipop.forEach((content) => {
    content.textContent = "0";
  });
});

buttonDelete.addEventListener("click", function () {
  buttonDelete.classList.add("clicked");
  const ip = String(input.textContent).slice(0, -1);
  input.textContent = ip;
});
