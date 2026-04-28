let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    if (expression === '') return;
    if (/[+\-*\/]$/.test(expression)) {
        expression = expression.slice(0, -1);
    }
    expression += op;
    updateDisplay();
}

function appendDecimal() {
    if (expression === '' || /[+\-*\/]$/.test(expression)) {
        expression += '0.';
    } else if (!expression.split(/[+\-*\/]/).pop().includes('.')) {
        expression += '.';
    }
    updateDisplay();
}

function toggleSign() {
    if (expression === '') return;
    let lastNumber = expression.split(/[+\-*\/]/).pop();
    if (lastNumber) {
        expression = expression.slice(0, -lastNumber.length) + (lastNumber.startsWith('-') ? lastNumber.slice(1) : '-' + lastNumber);
    }
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function calculate() {
    if (expression === '') return;
    try {
        expression = String(eval(expression));
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function updateDisplay() {
    display.value = expression || '0';
}