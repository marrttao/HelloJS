document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === '×') {
            appendToDisplay('*');
        } else if (value === '÷') {
            appendToDisplay('/');
        } else {
            appendToDisplay(value);
        }
    });
});

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}


function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}