const cover = document.getElementById("coverScreen");
const reader = document.getElementById("reader");
const button = document.getElementById("openBook");

button.addEventListener("click", () => {

    cover.style.display = "none";
    reader.style.display = "flex";

});
