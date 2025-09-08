const errorMsg = document.getElementById('error-message');  
const emailInput = document.getElementById('email');
const form = document.getElementById('form');
const submitbtn = document.getElementById('btn-submit');


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
    // remove email error message
    errorMsg.textContent = "";
    emailInput.classList.remove('active-email-error');
    window.location.href = 'success.html';
  }
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
