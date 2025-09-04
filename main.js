function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
document.getElementById("result").innerText = isPrime(17) ? "17 is prime" : "17 is not prime";
