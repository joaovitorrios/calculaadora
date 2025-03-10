let currentInput = '';
let operation = null;
let firstInput = null;

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function chooseOperation(op) {
  if (currentInput === '') return;
  if (firstInput === null) {
    firstInput = parseFloat(currentInput);
  } else if (operation) {
    calculate();
  }
  operation = op;
  currentInput = '';
}

function calculate() {
  if (firstInput === null || currentInput === '') return;
  let secondInput = parseFloat(currentInput);
  let result = 0;
  switch (operation) {
    case '+':
      result = firstInput + secondInput;
      break;
    case '-':
      result = firstInput - secondInput;
      break;
    case '*':
      result = firstInput * secondInput;
      break;
    case '/':
      result = firstInput / secondInput;
      break;
  }
  document.getElementById('display').value = result;
  firstInput = result;
  currentInput = '';
  operation = null;
}

function clearDisplay() {
  currentInput = '';
  firstInput = null;
  operation = null;
  document.getElementById('display').value = '';
}
