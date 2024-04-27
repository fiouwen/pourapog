const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const imageContainer = document.getElementById("imageContainer");
const weddingImage = document.getElementById("weddingImage");

yesButton.addEventListener("click", () => {
    imageContainer.style.opacity = "1";
    weddingImage.classList.add("visible");
});

noButton.addEventListener("click", () => {
    noButton.style.display = "none";
});
