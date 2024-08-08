let currentNumber = "0";
let previousNumber = "";
let operator = "";
let shouldResetScreen = false;

function appendNumber(number) {
  if (currentNumber === "0" || shouldResetScreen) {
    resetScreen();
  }
  if (number === "." && currentNumber.includes(".")) return;
  currentNumber += number;
  updateDisplay();
}

function setOperator(op) {
  if (currentNumber === "") return;
  if (previousNumber !== "") {
    calculateResult();
  }
  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  operator = "";
  previousNumber = "";
  updateDisplay();
}

function clearDisplay() {
  currentNumber = "0";
  previousNumber = "";
  operator = "";
  shouldResetScreen = false;
  updateDisplay();
}

function resetScreen() {
  currentNumber = "";
  shouldResetScreen = false;
}

function updateDisplay() {
  document.getElementById("display").innerText = currentNumber;
}

function toggleSign() {
  currentNumber = (parseFloat(currentNumber) * -1).toString();
  updateDisplay();
}

function percentage() {
  currentNumber = (parseFloat(currentNumber) / 100).toString();
  updateDisplay();
}
