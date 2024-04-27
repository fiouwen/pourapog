const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const imageContainer = document.getElementById("imageContainer");

yesButton.addEventListener("click", () => {
    imageContainer.style.opacity = "1";
});

noButton.addEventListener("click", () => {
    noButton.style.display = "none";
});
