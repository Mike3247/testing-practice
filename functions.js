// function sum(a, b) {
//     return a + b;
//   }

// function subtract(a, b) {
//     return a - b;
// }

function capitalize(string) {
    return string.charAt(0).toUpperCase() +
    string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function calculator(a, operation, b) { 
    if (operation === "+") {
        let add = a + b;
        return add;
    }
    if (operation === "-") {
        let subtract = a - b;
        return subtract;
    }
    if (operation === "*") {
        let multiply = a * b;
        return multiply;
    }
    if (operation === "/") {
        let divide = a / b;
        return divide;
    }
}

module.exports = { capitalize, reverseString, calculator};