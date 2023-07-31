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

const buttonEqual = document.querySelector(".equal-button");
const numberGrid = document.querySelector(".number-grid");

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
  buttonEqual.addEventListener("mouseenter", function () {
    buttonEqual.style.borderColor = "#ffffff";
    buttonEqual.addEventListener("mouseleave", function () {
      buttonEqual.style.borderColor = color;
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

  buttonEqual.style.backgroundColor = mainColor;
  buttonEqual.style.borderColor = mainColor;
};

// Color changing functions
const darkColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  dark.classList.add("active");

  colorMode("var(--mode1-box-color)", "var(--mode1-main-color)");
  onHover("var(--mode1-main-color)");
};

const chocolateColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  chocolate.classList.add("active");

  colorMode("var(--mode2-box-color)", "var(--mode2-main-color)");
  onHover("var(--mode2-main-color)");
};

const maroonColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  maroon.classList.add("active");

  colorMode("var(--mode3-box-color)", "var(--mode3-main-color)");
  onHover("var(--mode3-main-color)");
};

const orangeColor = function () {
  allCircles.forEach((circle) => circle.classList.remove("active"));
  orange.classList.add("active");

  colorMode("var(--mode4-box-color)", "var(--mode4-main-color)");
  onHover("var(--mode4-main-color)");
};

// Event listeners
maroon.addEventListener("click", maroonColor);
chocolate.addEventListener("click", chocolateColor);
orange.addEventListener("click", orangeColor);
dark.addEventListener("click", darkColor);

// Calculation operations
let ipString = "0";
let outputActive = false;
let dotActive = false;

const switchSymbol = function (operator) {
  switch (operator) {
    case "%":
      return "/100";
    case "÷":
      return "/";
    case "×":
      return "*";
    case "−":
      return "-";
    case "+":
      return "+";
    case ".":
      return ".";
  }
};

const slicing = function () {
  ip = input.innerText;
  input.innerText = ip.slice(0, -1);
  ipString = ipString.slice(0, -1);
};

const appendingOperator = function (keyValue) {
  input.innerText += keyValue;
  ipString += switchSymbol(keyValue);
};

const isPlus = function (keyValue) {
  let ip = input.innerText;
  if (ip === "0") {
    appendingOperator(keyValue);
  } else if (ip.charAt(ip.length - 1) === "−") {
    slicing();
    appendingOperator(keyValue);
  } else if (ip.charAt(ip.length - 1) === "+") {
  } else {
    appendingOperator(keyValue);
  }
};

const isMinus = function (keyValue) {
  let ip = input.innerText;
  if (ip === "0") {
    appendingOperator(keyValue);
  } else if (ip.charAt(ip.length - 1) === "+") {
    slicing();
    appendingOperator(keyValue);
  } else if (ip.charAt(ip.length - 1) === "−") {
  } else {
    appendingOperator(keyValue);
  }
};

const isMultiply = function (keyValue) {
  let ip = input.innerText;
  if (ip === "0") {
    appendingOperator(keyValue);
  } else if (
    ip.charAt(ip.length - 1) === "−" ||
    ip.charAt(ip.length - 1) === "+" ||
    ip.charAt(ip.length - 1) === "÷"
  ) {
    slicing();
    appendingOperator(keyValue);
  } else if (ip.charAt(ip.length - 1) === "×") {
  } else {
    appendingOperator(keyValue);
  }
};

const isDivide = function (keyValue) {
  let ip = input.innerText;
  if (ip === "0") {
    appendingOperator(keyValue);
  } else if (
    ip.charAt(ip.length - 1) === "−" ||
    ip.charAt(ip.length - 1) === "+" ||
    ip.charAt(ip.length - 1) === "×"
  ) {
    slicing();
    appendingOperator(keyValue);
  } else if (ip.charAt(ip.length - 1) === "÷") {
  } else {
    appendingOperator(keyValue);
  }
};

const isPercentage = function (keyValue) {
  let ip = input.innerText;
  if (ip === "0") {
    appendingOperator(keyValue);
  } else if (
    ip.charAt(ip.length - 1) === "−" ||
    ip.charAt(ip.length - 1) === "+" ||
    ip.charAt(ip.length - 1) === "÷" ||
    ip.charAt(ip.length - 1) === "×"
  ) {
    slicing();
    appendingOperator(keyValue);
  } else if (ip.charAt(ip.length - 1) === "%") {
  } else {
    appendingOperator(keyValue);
  }
};

const isDot = function (keyValue) {
  let ip = input.innerText;
  if (dotActive === false) {
    if (ip === "0") {
      input.innerText += keyValue;
      ipString = switchSymbol(keyValue);
      dotActive = true;
    } else {
      appendingOperator(keyValue);
      dotActive = true;
    }
  }
};

const checkOutputActive = function () {
  if (outputActive === true) {
    input.innerText = "";
  }
  outputActive = false;
};

const displayNumber = function (keyValue) {
  if (input.innerText === "0") {
    input.innerText = keyValue;
    ipString = keyValue;
  } else {
    checkOutputActive();
    input.innerText += keyValue;
    ipString += keyValue;
  }
  console.log(ipString);
};

const displayOperator = function (keyValue) {
  checkOutputActive();
  if (keyValue === ".") {
    isDot(keyValue);
  } else if (keyValue === "+") {
    isPlus("+");
    dotActive = false;
  } else if (keyValue === "−") {
    isMinus("−");
    dotActive = false;
  } else if (keyValue === "×") {
    isMultiply("×");
    dotActive = false;
  } else if (keyValue === "÷") {
    isDivide("÷");
    dotActive = false;
  } else if (keyValue === "%") {
    isPercentage("%");
    dotActive = false;
  }
  console.log(ipString);
};

const changeSymbolOnDisplay = function (symbol) {
  if (symbol === "/") return "÷";
  if (symbol === "*") return "×";
  if (symbol === "-") return "−";
};

const displayOutput = function (inputStr) {
  const op = String(eval(inputStr));
  output.innerText = op.includes("-")
    ? op.replace("-", changeSymbolOnDisplay("-"))
    : op;
  outputActive = true;
  ipString = "";
  dotActive = false;
};

const deleteButton = function () {
  let ip = String(input.innerText);
  if (ip.charAt(ip.length - 1) === ".") {
    slicing();
    dotActive = false;
  } else if (ip.charAt(ip.length - 1) === "%") {
    ip = input.innerText;
    input.innerText = ip.slice(0, -1);
    ipString = ipString.slice(0, -4);
  } else {
    slicing();
  }
  if (input.innerText === "") {
    input.innerText = "0";
  }
  output.innerText = "0";
};

numberGrid.addEventListener("click", function (e) {
  if (e.target.classList.contains("number")) displayNumber(e.target.innerText);

  if (e.target.classList.contains("operator")) {
    displayOperator(e.target.innerText);
  }

  if (e.target.classList.contains("delete")) deleteButton();

  if (e.target.classList.contains("all-clear")) {
    input.innerText = "0";
    output.innerText = "0";
    ipString = "";
    dotActive = false;
  }
});

// Displaying output
buttonEqual.addEventListener("click", function () {
  if (ipString != 0) {
    displayOutput(ipString);
  }
});

window.addEventListener("keydown", function (e) {
  if (Number(e.key)) displayNumber(e.key);
  if (e.key === "%" || e.key === "+" || e.key === ".") displayOperator(e.key);
  if (e.key === "/" || e.key === "*" || e.key === "-") {
    const changedSymbol = changeSymbolOnDisplay(e.key);
    displayOperator(changedSymbol);
  }
  if (e.key === "Backspace") deleteButton();
  if (e.key === "=") displayOutput(ipString);
});
