const status = document.getElementById("status");
const backButton = document.getElementById("btn-back5");

backButton.addEventListener("click", () => {
    status.textContent = "Back 5 seconds pressed.";
});