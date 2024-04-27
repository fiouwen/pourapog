const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const chatImage = document.getElementById("chatImage");

yesButton.addEventListener("click", () => {
    weddingImage.classList.add("visible");
});

noButton.addEventListener("click", () => {
    noButton.style.display = "none";
});
