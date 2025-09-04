function getFactorial(n) {
    for ( let i = n - 1; i > 1; i--) {
        n *= i;
    }
    return n;
}
document.getElementById("result").innerText = getFactorial(5);