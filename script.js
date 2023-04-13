const submit = document.querySelector(".card__button");
const cardSubmitted = document.querySelector(".card__state--submitted");
const cardNormal = document.querySelector(".card__state");
const selectedText = document.querySelector(".submitted__illustration--text");

submit.addEventListener("click", function() {
    const rating = document.querySelector(".ratings-input:checked").value;
    console.log(rating)
    if (rating == 0) {
        alert("Please input a valid rating");
    }
    else {
        cardSubmitted.classList.toggle("card__state--hidden");
        cardNormal.classList.toggle("card__state--hidden");
        selectedText.textContent = "You selected " + rating + " out of 5";
    }
});