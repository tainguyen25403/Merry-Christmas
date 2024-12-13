const correctPassword = "More Than I Can Say";
const submitButton = document.getElementById("submit");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

submitButton.addEventListener("click", function () {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    window.location.href = "src/merry_christmas.html";
  } else {
    errorMessage.textContent = "Incorrect password. Please try again.";
  }
});
