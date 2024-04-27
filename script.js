const fadeInButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const imageContainer = document.getElementById("imageContainer");
const weddingImage = document.getElementById("weddingImage");

fadeInButton.addEventListener("click", () => {
            // Afficher l'image en augmentant l'opacité progressivement
  imageContainer.style.opacity = "1";       
});

noButton.addEventListener("click", () => {
    noButton.style.display = "none";
});
