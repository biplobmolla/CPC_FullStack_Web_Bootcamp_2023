const inputBox = document.querySelector("#inputBox");
let isPreviousVlaueOperator = false;
let previousNumber;
let previousOperator;
let x = "";
let y = "";
let history = false;

function input(value) {
  if (
    value === "x" ||
    value === "÷" ||
    value === "%" ||
    value === "+" ||
    value === "-" ||
    value === "="
  ) {
    if (value === "=") {
      console.log(previousOperator);
      switch (previousOperator) {
        case "+":
          sum(x, y);
          break;
        case "-":
          minus(x, y);
          break;
        case "x":
          multiple(x, y);
          break;
        case "÷":
          divide(x, y);
          break;
      }
    } else {
      if (previousNumber) {
        previousOperator = value;
        if (isPreviousVlaueOperator === false) {
          inputBox.value = inputBox.value + value;
          isPreviousVlaueOperator = true;
          return;
        }
      }
      return;
    }
  } else {
    previousNumber = true;
    if (history === true) {
      inputBox.value = "";
      history = false;
    }
    if (previousOperator) {
      y += value;
      console.log("Y: " + y);
    } else {
      x += value;
      console.log("X: " + x);
    }
    inputBox.value = inputBox.value + value;
    isPreviousVlaueOperator = false;
  }
}

let r = 10;
console.log(r);

function rty() {
  console.log("Hello World");
}

rty();

function sum(x, y) {
  console.log(x + " " + y);
  inputBox.value = x * 1 + y * 1;
  history = true;
}

function minus(x, y) {
  console.log(x + " " + y);
  inputBox.value = x - y;
  history = true;
}

function multiple(x, y) {
  console.log(x + " " + y);
  inputBox.value = x * y;
  history = true;
}

function divide(x, y) {
  console.log(x + " " + y);
  inputBox.value = x / y;
  history = true;
}

function ac() {
  inputBox.value = "";
}
