
const numOne = document.getElementById("number-one-div");
const operand = document.getElementById("operand-div")
const numTwo = document.getElementById("number-two-div");
const btn = document.getElementById("btn-random");

function RandomOperation() {

    numOne.textContent = getRandomNumber(10); // Change the 10 to a seed
    operand.textContent = getRandomOperand();
    numTwo.textContent = getRandomNumber(10); // Change the 10 to a seed based 
                                              //    on difficulty and operand

}

function getRandomNumber(max) {
    
    return Math.floor(Math.random() * max);

}

function getRandomOperand() {
    
    return Math.random() < 0.5 ? "+" : "-";

}

RandomOperation();

btn.addEventListener("click", RandomOperation);
