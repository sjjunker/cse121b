/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.getElementById("add1").value);
    let addNumber2 = Number(document.getElementById("add2").value);

    document.getElementById("sum").value =  add(addNumber1, addNumber2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
    return number1 - number2;
}

let subtractNumbers = function() {
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.getElementById("subtract2").value);
    
    
    document.getElementById("difference").value = subtract(subtract1, subtract2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;

let multiplyNumbers = () => {
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);

    document.getElementById("product").value =  multiply(factor1, factor2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (dividend, divisor) => dividend / divisor;

function divideNumbers() {
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);

    document.getElementById("quotient").value = divide(dividend, divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function subtotal () {
    let subtotal = Number(document.getElementById("subtotal").value);

    const isMember = document.getElementById("member").checked;
    if (isMember) {
        subtotal -= subtotal * .2;
    }

    document.getElementById("total").innerText = `$ ${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click", subtotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let originalString = "";

numbers.forEach(function(number) {
    originalString += `${String(number)},`;
});

document.getElementById("array").innerText = originalString;

/* Output Odds Only Array */
let oddNumbers = numbers.filter((number) => number % 2 > 0);
let oddString = "";

oddNumbers.forEach(function(number) {
    oddString += `${String(number)},`;
});

document.getElementById("odds").innerText = oddString;

/* Output Evens Only Array */
let evenNumbers = numbers.filter((number) => number % 2 === 0);
let evenString = "";

evenNumbers.forEach(function(number) {
    evenString += `${String(number)},`;
});

document.getElementById("evens").innerText = evenString;

/* Output Sum of Org. Array */
let sumOfNumbers = numbers.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").innerText = ` ${String(sumOfNumbers)}`;

/* Output Multiplied by 2 Array */
let timesTwo = numbers.map(number => number * 2);
let productString = ""

timesTwo.forEach(function(number) {
    productString += `${String(number)},`;
})

document.getElementById("multiplied").innerText = productString;

/* Output Sum of Multiplied by 2 Array */
let sumOfMutiplied = timesTwo.reduce((sum, number) => sum + number);
document.getElementById("sumOfMultiplied").innerText = String(sumOfMutiplied);