const book = document.getElementById("book");
const button = document.getElementById("openBook");
const reader = document.getElementById("reader");
const home = document.querySelector(".home-screen");

button.addEventListener("click", () => {

    book.classList.add("open");

    button.disabled = true;

    setTimeout(() => {

        home.style.display = "none";

        reader.style.display = "flex";

    },1000);

});
