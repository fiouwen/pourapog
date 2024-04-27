const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const imageContainer = document.getElementById("imageContainer");

yesButton.addEventListener("click", () => {
    alert("Je suis si heureuse my love");
    imageContainer.style.opacity = "1";
});

noButton.addEventListener("click", () => {
    noButton.style.display = "none";
});
