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

function caesarCipher (str, shift) {
    if (shift === 0) return str;
  
    return str.replace(/[a-z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
    );
  };

function arrayAnalysis (arr) {
    return {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
      };
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, arrayAnalysis};