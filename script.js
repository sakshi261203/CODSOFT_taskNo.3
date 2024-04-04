let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value).toFixed(100);
        display.value = result.replace(/(\.\d*?[1-9])?0*$/, '$1');
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateSquare() {
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue).toFixed(100).replace(/(\.\d*?[1-9])?0*$/, '$1');
}

function calculateSquareRoot() {
    const currentValue = parseFloat(display.value);
    display.value = Math.sqrt(currentValue).toFixed(100).replace(/(\.\d*?[1-9])?0*$/, '$1');
}

function calculateCube() {
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue * currentValue).toFixed(100).replace(/(\.\d*?[1-9])?0*$/, '$1');
}

function calculateCubeRoot() {
    const currentValue = parseFloat(display.value);
    display.value = Math.cbrt(currentValue).toFixed(100).replace(/(\.\d*?[1-9])?0*$/, '$1');
}

function calculatePercentage() {
    const currentValue = parseFloat(display.value);
    display.value = (currentValue / 100).toFixed(100).replace(/(\.\d*?[1-9])?0*$/, '$1');
}
