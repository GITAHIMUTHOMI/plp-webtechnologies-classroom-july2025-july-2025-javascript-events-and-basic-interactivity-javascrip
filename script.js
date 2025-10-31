/* ===========================================
   Week 6 Assignment - Interactive Web Pages
   Author: GITAHIMUTHOMI
   =========================================== */

/* -------------------------------
   🌟 PART 1: Event Handling
---------------------------------- */
const clickBtn = document.getElementById("clickBtn");
const eventMessage = document.getElementById("eventMessage");

clickBtn.addEventListener("click", () => {
  eventMessage.textContent = "Button was clicked!";
});

clickBtn.addEventListener("mouseover", () => {
  eventMessage.textContent = "Mouse is over the button!";
});

clickBtn.addEventListener("mouseout", () => {
  eventMessage.textContent = "Mouse left the button.";
});

/* -------------------------------
   💡 PART 2: Interactive Elements
---------------------------------- */
// Dark/Light mode toggle
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleThemeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// Counter
let counter = 0;
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

/* -------------------------------
   📋 PART 3: Form Validation
---------------------------------- */
const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

// Regex patterns
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Minimum 6 chars, at least 1 letter & 1 number

myForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (!passwordPattern.test(passwordInput.value)) {
    passwordError.textContent = "Password must be at least 6 chars with letters and numbers";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final message
  if (valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
    myForm.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fix the errors above.";
  }
});
