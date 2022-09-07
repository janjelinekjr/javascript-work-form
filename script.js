const form = document.querySelector(".form");
const username = document.querySelector("#input-username");
const usernameCkeck = document.querySelector("#username-check");
const password = document.querySelector("#input-password");
const passwordCheck = document.querySelector("#password-check");
const confirmPassword = document.querySelector("#input-confirm-password");
const confirmPasswordCheck = document.querySelector("#confirm-password-check");
const email = document.querySelector("#input-email");
const emailCheck = document.querySelector("#email-check");
const user = document.querySelector(".user");
const emptyPar = document.querySelector(".empty");

// Form Validation and Send
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameInput = event.target.username.value;
  const passwordInput = event.target.password.value;
  const confirmPasswordInput = event.target.confirmPassword.value;
  const emailInput = event.target.email.value;
  const dateInput = event.target.date.value;

  // username validation
  const usernameInputIsValid =
    usernameInput.length >= 4 && usernameInput.length <= 64;

  if (!usernameInputIsValid) {
    usernameCkeck.classList.toggle("username-check-hidden");
  }

  // passwords validation
  const passwordInputIsValid =
    passwordInput.length >= 8 && passwordInput.length <= 64;

  if (!passwordInputIsValid) {
    passwordCheck.classList.toggle("password-check-hidden");
  }

  const confirmPasswordInputIsEqual =
    confirmPasswordInput === passwordInput && confirmPasswordInput.length > 0;

  if (!confirmPasswordInputIsEqual) {
    confirmPasswordCheck.classList.toggle("confirm-password-check-hidden");
  }

  // email validation
  const emailInputIsValid = emailInput.includes("@") && emailInput.length >= 5;

  if (!emailInputIsValid) {
    emailCheck.classList.toggle("email-check-hidden");
  }

  // add user to list
  if (
    usernameInputIsValid &&
    passwordInputIsValid &&
    confirmPasswordInputIsEqual &&
    emailInputIsValid
  ) {
    emptyPar.textContent = "";
    let newParahraph = document.createElement("p");
    newParahraph.innerHTML = `<p class="new-user">${usernameInput}-${emailInput}-${dateInput}</p>`;
    emptyPar.insertAdjacentElement("afterend", newParahraph);

    // remove inputs after send
    event.target.username.value = "";
    event.target.password.value = "";
    event.target.confirmPassword.value = "";
    event.target.email.value = "";
    event.target.date.value = "";

    // restore invalid inputs
    usernameCkeck.classList.add("username-check-hidden");
    passwordCheck.classList.add("password-check-hidden");
    confirmPasswordCheck.classList.add("confirm-password-check-hidden");
    emailCheck.classList.add("email-check-hidden");
  }
});
