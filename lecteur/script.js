const cover = document.querySelector(".cover-screen");
const reader = document.getElementById("reader");

document.getElementById("openBook").addEventListener("click", () => {

    cover.style.display = "none";

    reader.style.display = "flex";

});
