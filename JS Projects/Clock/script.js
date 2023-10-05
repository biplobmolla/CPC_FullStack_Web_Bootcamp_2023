const inputBox = document.querySelector("#inputBox");

let previousNumber = false;
let previousOperator = false;
let operator,
  p = "",
  q = "";
let isResult = false;

function input(x) {
  if (
    x === "+" ||
    x === "-" ||
    x === "x" ||
    x === "÷" ||
    x === "%" ||
    x === "="
  ) {
    if (previousNumber === true) {
      if (previousOperator === false) {
        if (x !== "=") {
          inputBox.value += x;
          previousOperator = true;
          operator = x;
        } else {
          switch (operator) {
            case "+":
              sum(p, q);
              break;
            case "-":
              minus(p, q);
              break;
            case "x":
              multiple(p, q);
              break;
            case "÷":
              divide(p, q);
              break;
          }
        }
      }
    }
  } else {
    previousNumber = true;
    previousOperator = false;
    if (isResult) {
      inputBox.value = x;
      isResult = false;
      p = "";
      q = "";
      operator = undefined;
    } else {
      inputBox.value += x;
    }

    if (p && operator) {
      q += x;
      console.log("q: " + q);
    } else {
      p += x;
      console.log("p: " + p);
    }
  }
}

function sum(p, q) {
  inputBox.value = p * 1 + q * 1;
  isResult = true;
}

function minus(p, q) {
  inputBox.value = p - q;
  isResult = true;
}

function multiple(p, q) {
  inputBox.value = p * q;
  isResult = true;
}

function divide(p, q) {
  inputBox.value = p / q;
  isResult = true;
}

function ac() {
  inputBox.value = "";
  p = "";
  q = "";
  operator = undefined;
}
