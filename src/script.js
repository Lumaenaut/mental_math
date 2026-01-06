const numDivOne = document.getElementById("number-one");
const numDivTwo = document.getElementById("number-two");
const btn = document.getElementById("btn-random");

function generateRandomNum() {
    const randomNumOne = Math.floor(Math.random() * 100);
    const randomNumTwo = Math.floor(Math.random() * 100);
    numDivOne.textContent = randomNumOne;
    numDivTwo.textContent = randomNumTwo;
}

generateRandomNum();

btn.addEventListener("click", generateRandomNum);

