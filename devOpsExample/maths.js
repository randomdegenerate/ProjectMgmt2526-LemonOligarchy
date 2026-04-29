const PI = 3.14159;

function multiply(a, b) {
    return a * b
}

function subtract(a , b) {
    return a - b
}

function sum(a , b) { 
    return a + b
}

// new math function added
function square(a) {
    return a * a
}

module.exports = {multiply, subtract , sum , PI, square}
