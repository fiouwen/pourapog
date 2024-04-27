const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

yesButton.addEventListener("click", () => {
    alert("Je suis si heureuse my love");
});

noButton.addEventListener("click", () => {
    noButton.style.display = "none";
});
