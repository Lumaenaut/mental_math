
const numOneDiv = document.getElementById("number-one-div");
const operandDiv = document.getElementById("operand-div")
const numTwoDiv = document.getElementById("number-two-div");
const btn = document.getElementById("btn-random");

let numOne = 0;
let operation = "";
let numTwo = 0;
let result = 0;

function getOperation() {

    // I need to change the order of assignments, first I need to assign the
    //  the numbers and then use the text to display on divs
    numOneDiv.textContent = getRandomNumber(10); // Change the 10 to a difficulty seed
    operandDiv.textContent = getRandomOperand();
    numTwoDiv.textContent = getRandomNumber(10); // Change the 10 to a difficulty seed, besides, not all operations need two numbers

    // Defining operation and result
    numOne = parseInt(numOneDiv.textContent, 10);
    numTwo = parseInt(numTwoDiv.textContent, 10);
    result = getResult(numOne, numTwo, operation);

}

function getRandomNumber(max) {

    return Math.floor(Math.random() * max);

}

function getRandomOperand() {
    
    operation = Math.random() < 0.5 ? "+" : "-";

    return operation;

}

function getResult(numOne, numTwo, operation) {
    
    if (operation == "+"){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

getOperation();

btn.addEventListener("click", getOperation);
