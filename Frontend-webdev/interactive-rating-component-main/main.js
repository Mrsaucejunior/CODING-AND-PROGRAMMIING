const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submitBtn");
const selectedRate = document.getElementById("selectedRate");
const cardSection = document.getElementById("cardSection");
const thankYouSection = document.getElementById("thankYouSection");

let rateNum;

function removeActiveBtn () {
    ratingBtn.forEach(btn => btn.classList.remove("active-rating-btn"))
}

function activeSubmitBtn () {
    submitBtn.addEventListener('click', () => {
        cardSection.style.display = "none";
        thankYouSection.style.display = "flex";
        selectedRate.textContent = rateNum;
    });
}

ratingBtn.forEach(button => {
    button.addEventListener ('click', () => {
        removeActiveBtn();
        rateNum = button.textContent;
        button.classList.add("active-rating-btn");
        submitBtn.classList.add("active-submit-btn");
        activeSubmitBtn();
    })
});