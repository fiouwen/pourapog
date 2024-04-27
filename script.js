const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

yesButton.addEventListener("click", () => {
    alert("Super ! Les chats sont géniaux !");
});

noButton.addEventListener("click", () => {
    noButton.style.display = "none";
});
