function reverseString(str) {
    //return str.split('').reverse().join('');
    // or
    _str;
    for (let i = str.length - 1; i >= 0; i--) {
        _str += str[i];
    }
    return _str;
}
document.getElementById("result").innerText = reverseString("Hello, World!");