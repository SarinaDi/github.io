const book = document.getElementById("book");
const button = document.getElementById("openBook");

button.addEventListener("click", () => {

    // Lance l'animation
    book.classList.add("open");

    // Désactive le bouton
    button.disabled = true;

    // Attend la fin de l'animation
    setTimeout(() => {

        window.location.href = "lecture/index.html";

    }, 1200);

});
