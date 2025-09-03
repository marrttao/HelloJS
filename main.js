document.addEventListener('DOMContentLoaded', () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The sum is: ${sum}`;
});
