const openButton = document.getElementById("openBook");
const homeScreen = document.querySelector(".home-screen");
const reader = document.getElementById("reader");
const book = document.getElementById("book");
const chapterNumber = document.getElementById("chapterNumber");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");

// =================================================
// DONNÉES DU LIVRE
// =================================================

const pages = [

{
    leftTitle: "Tome I",
    leftSubtitle: "Le Prince des Enfers",

    rightChapter: "Chapitre I",
    rightTitle: "Une paix fragile",

    rightText:
`Le royaume des Enfers n'était jamais réellement silencieux.

Même lorsque les flammes semblaient s'endormir, les anciennes pierres murmuraient encore les souvenirs des âmes qui avaient traversé leurs portes.`

},

{
    leftTitle: "Tome I",
    leftSubtitle: "Le Prince des Enfers",

    rightChapter: "Chapitre II",
    rightTitle: "Le prince",

    rightText:
`Kaël observait les flammes éternelles depuis le balcon du palais. Depuis toujours, ce royaume était le sien...`

}

];

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
// =================================================
// NAVIGATION
// =================================================

const previousButton = document.getElementById("previousPage");
const nextButton = document.getElementById("nextPage");

previousButton.addEventListener("click", () => {

    console.log("Page précédente");

});

nextButton.addEventListener("click", () => {

    console.log("Page suivante");

});
