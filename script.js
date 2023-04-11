const submit = document.querySelector(".card__button");
const inputNumber = document.querySelectorAll(".card__input");
const cardSubmitted = document.querySelector(".card__state--submitted");
const cardNormal = document.querySelector(".card__state");
const selectedText = document.querySelector(".submitted__illustration--text");

let clicked = false;
let rating = 0

for (const value of inputNumber) {
    value.addEventListener("click", function() {
        cleanValues();
        value.classList.toggle("card__input--selected");
        rating = value.textContent;
    });
}

function cleanValues() {
    for (const value of inputNumber) {
        value.classList.remove("card__input--selected");
    }
}

submit.addEventListener("click", function() {
    if (rating == 0) {
        alert("Please input a valid rating");
    }
    else {
        cardSubmitted.classList.toggle("card__state--hidden");
        cardNormal.classList.toggle("card__state--hidden");
        selectedText.textContent = "You selected " + rating + " out of 5";
    }
});