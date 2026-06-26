const cover = document.querySelector(".cover-screen");
const reader = document.querySelector(".reader");

document.getElementById("openBook").onclick = () => {

    cover.style.display = "none";

    reader.style.display = "flex";

};
