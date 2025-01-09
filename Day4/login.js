const nameInput = document.getElementById("Name");
const emailInput = document.getElementById("Email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const submitButton = document.getElementById("submit-btn");
const label1 = document.getElementById("name-label");
const label2 = document.getElementById("email-label");
const label3 = document.getElementById("password-label");

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

emailInput.addEventListener("blur", () => {
  const value = emailInput.value.trim();
  if (!value) {
    emailError.textContent = "Email is required.";
  } else if (!validateEmail(value)) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
});

[nameInput, emailInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => {
    submitButton.disabled = !(
      nameInput.value &&
      emailInput.value &&
      passwordInput.value &&
      !emailError.textContent
    );
  });
});

emailInput.addEventListener("focus", () => {
  label2.classList.add("labelMovement");
});
emailInput.addEventListener("blur", () => {
  if (!emailInput.value) {
    label2.classList.remove("labelMovement");
  }
});

nameInput.addEventListener("focus", () => {
  label1.classList.add("labelMovement");
});
nameInput.addEventListener("blur", () => {
  if (!nameInput.value) {
    label1.classList.remove("labelMovement");
  }
});

passwordInput.addEventListener("focus", () => {
  label3.classList.add("labelMovement");
});
passwordInput.addEventListener("blur", () => {
  if (!passwordInput.value) {
    label3.classList.remove("labelMovement");
  }
});

submitButton.addEventListener("click", () => {
  // const name = nameInput.value;
  // const email = emailInput.value;
  // const password = passwordInput.value;
  // const user = {
  //   name,
  //   email,
  //   password,
  // };
  // localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "../TodoList(CSEC Bootcamp)/FirstPage.html";
});
