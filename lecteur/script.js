const openButton = document.getElementById("openBook");
const homeScreen = document.querySelector(".home-screen");
const reader = document.getElementById("reader");
const book = document.getElementById("book");

openButton.addEventListener("click", () => {

    // Animation du livre
    book.classList.add("opening");

    // Attendre la fin de l'animation
    setTimeout(() => {

        homeScreen.classList.add("hide");

        setTimeout(() => {

            homeScreen.style.display = "none";

            reader.style.display = "flex";

            reader.classList.add("show");

        }, 700);

    }, 1200);

});
