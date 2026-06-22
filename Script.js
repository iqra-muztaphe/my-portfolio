const display = document.getElementById('display');


function appendValue(input) {
    display.value += input;
}


function clearDisplay() {
    display.value = '';
}


function backspace() {
    display.value = display.value.slice(0, -1);
}


function toggleSign() {
    if (display.value) {
        if (display.value.startsWith('-')) {
            display.value = display.value.substring(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}


function calculateResult() {
    try {
      
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
