
const numOneDiv = document.getElementById("number-one-div");
const operandDiv = document.getElementById("operand-div")
const numTwoDiv = document.getElementById("number-two-div");
const btn = document.getElementById("btn-random");
const resultInput = document.getElementById("result-input");

let numOne = 0;
let operand = "";
let numTwo = 0;
let result = 0;

function getOperation() {

    // Defining a random operation and its result.
    numOne = getRandomNumber(10);  // Change the 10 to a difficulty seed
    operand = getRandomOperand();
    numTwo = getRandomNumber(10);  // Change the 10 to a difficulty seed, besides, not all operations need two numbers
    result = getResult(numOne, numTwo, operand);

    numOneDiv.textContent = numOne;
    operandDiv.textContent = operand;
    numTwoDiv.textContent = numTwo;

    resultInput.focus();

}

function getRandomNumber(max) {

    return Math.floor(Math.random() * max);

}

function getRandomOperand() {
    
    operand = Math.random() < 0.5 ? "+" : "-";

    return operand;

}

function getResult(numOne, numTwo, operand) {

    // In the future, the function should generate the following operands:
    //  +
    //  -
    //  *
    //  /
    //  **
    //  sqrt
    //  These would be cool for now
    
    if (operand == "+"){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

function handleInput(e) {

    // This is validating that only digits 0 - 9 are typed
    e.target.value = e.target.value.replace(/\D/g, "");

    // If the number typed in is equal to the result. create the next operation

}

getOperation();

btn.addEventListener("click", getOperation);
resultInput.addEventListener("input", handleInput);
