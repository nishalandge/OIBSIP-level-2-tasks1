let display = document.getElementById('result');

function appendCharacter(char) {
    display.value += char;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteCharacter() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if (display.value[0] === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteCharacter();
    } else if (key === '+') {
        appendCharacter('+');
    } else if (key === '-') {
        appendCharacter('-');
    } else if (key === '*') {
        appendCharacter('*');
    } else if (key === '/') {
        appendCharacter('/');
    } else if (key === '(') {
        appendCharacter('(');
    } else if (key === ')') {
        appendCharacter(')');
    } else if (!isNaN(parseFloat(key))) {
        appendCharacter(key);
    }
});