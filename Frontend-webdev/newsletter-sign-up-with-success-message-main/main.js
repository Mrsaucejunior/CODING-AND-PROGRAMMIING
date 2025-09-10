const errorMsg = document.getElementById('error-message');  
const emailInput = document.getElementById('email');
const form = document.getElementById('form');
const submitbtn = document.getElementById('btn-submit');
const container = document.getElementById('container');

// popup message variables
const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("popup");
const popupEmail = document.getElementById("popup-email");
const closePopup = document.getElementById("closePopup");


// activate button
emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    submitbtn.classList.add("active-btn-submit");

  } else {
    submitbtn.classList.remove("active-btn-submit");
    errorMsg.textContent = "";
  }
});


// form submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formDataEntries = new FormData(form).entries();
    const { email } = Object.fromEntries(formDataEntries);

    const emailError = validateEmail(email);

    if (emailError) {
    // show email error message to user
    errorMsg.textContent = emailError;
    emailInput.classList.add('active-email-error');
  } else  {
    // remove email error message and show success page
    errorMsg.textContent = "";
    emailInput.classList.remove('active-email-error');
    const emailValue = emailInput.value.trim();
    popup.style.display = "flex"; // show popup
    popupEmail.textContent = emailValue;

    if (window.innerWidth > 768) {
      container.style.visibility = "hidden"; // hide form container on desktop
      popup.style.visibility = "visible"; // show popup
      popupEmail.textContent = emailValue;
    }
    form.reset(); // reset form
  }
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none"; // hide popup
    container.style.visibility = "visible"; // hide form container on desktop
});

// email validation function
function validateEmail(email) {
  if (!email) return 'Valid email required';

  const isValidEmail = /^\S+@\S+\.\S+$/g
  if (!isValidEmail.test(email)) {
    return 'Valid email required';
  }
  return '';
}
