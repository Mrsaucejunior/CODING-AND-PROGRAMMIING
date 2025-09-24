const form = document.querySelector('form');
const bill = document.getElementById('bill');
const tips = document.querySelectorAll('.select-btn');
const customTip = document.getElementById('customTip');
const numberOfPeople = document.getElementById('numOfPeople');
const resetBtn = document.getElementById('resetBtn');
const blockLetters = document.querySelectorAll('.active-input');
const errorMsg = document.getElementById('errorMsg');

let tipPerPerson = document.getElementById('tipPerPerson');
let totalPerPerson = document.getElementById('totalPerPerson');

let billValue = 0;
let peopleValue = 1;
let tipAmount = 0;

// Prevent letters in numeric inputs
blockLetters.forEach(letter => {
    letter.addEventListener("input", () => {
    letter.value = letter.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    if (letter.value.startsWith(".")) {
        letter.value = "0" + letter.value;
    }

  });
});

// Update values
bill.addEventListener("input", () => {
    billValue = parseFloat(bill.value) || 1;
    calculate();
});

numberOfPeople.addEventListener("input", () => {
    peopleValue = parseInt(numberOfPeople.value);
    if (peopleValue === 0) {
        errorMsg.classList.add("active-error-msg");
        numberOfPeople.classList.add("active-error-input");
    } else {
        errorMsg.classList.remove("active-error-msg");
        numberOfPeople.classList.remove("active-error-input");
    }
    calculate();
});

// Tip buttons and custom input
tips.forEach(tip => {
    if (tip.tagName === "BUTTON") {
        tip.addEventListener("click", () => {
            // remove active class from all buttons first
            removeActiveBtn();
            // add active class to the clicked button
            tip.classList.add("active-btn");

            let number = parseInt(tip.textContent);
            tipAmount = number / 100;
            tip.classList.add('active-btn');
            calculate();
        });
    }

    if (tip.tagName === "INPUT") {
            tip.addEventListener("input", () => {
            removeActiveBtn();
            let number = parseInt(tip.value);
            tipAmount = (number || 0) / 100;
            calculate();
        });
    }
});

// Submit handler (not strictly needed if we auto calc)
form.addEventListener("submit", e => {
    e.preventDefault();
    calculate();
});

function removeActiveBtn () {
    tips.forEach(btn => btn.classList.remove("active-btn"));
    errorMsg.classList.remove("active-error-msg");
    numberOfPeople.classList.remove("active-error-input");

}

function calculate() {
    if (peopleValue > 0) {
        let tipEach = (billValue * tipAmount) / peopleValue;
        let totalEach = (billValue * (1 + tipAmount)) / peopleValue;

        tipPerPerson.textContent = `$${tipEach.toFixed(2)}`;
        totalPerPerson.textContent = `$${totalEach.toFixed(2)}`;
    }
}

// Reset button
resetBtn.addEventListener("click", () => {
    bill.value = "";
    removeActiveBtn();
    customTip.value = "";
    numberOfPeople.value = "";
    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
    billValue = 0;
    peopleValue = 1;
    tipAmount = 0;
});
