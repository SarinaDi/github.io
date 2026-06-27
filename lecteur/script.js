// =================================================
// VARIABLES
// =================================================

let currentPage = 0;


// =================================================
// ÉLÉMENTS HTML
// =================================================

// Accueil

const openButton = document.getElementById("openBook");
const homeScreen = document.querySelector(".home-screen");
const reader = document.getElementById("reader");
const book = document.getElementById("book");

// Pages

const leftPage = document.getElementById("pageLeft");
const rightPage = document.getElementById("pageRight");

// Contenu

const leftTitle = document.getElementById("leftTitle");
const leftSubtitle = document.getElementById("leftSubtitle");

const chapterNumber = document.getElementById("chapterNumber");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");

// Navigation

const previousButton = document.getElementById("previousPage");
const nextButton = document.getElementById("nextPage");

// Sommaire

const summaryWindow = document.getElementById("summaryWindow");
const openSummary = document.getElementById("openSummary");
const closeSummary = document.getElementById("closeSummary");


// =================================================
// OUVERTURE DU LIVRE
// =================================================

openButton.addEventListener("click", () => {

    book.classList.add("opening");

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
// GESTION DES PAGES
// =================================================

function loadPage(index){

    if(index < 0 || index >= pages.length){
        return;
    }

    leftPage.classList.add("page-changing");
    rightPage.classList.add("page-changing");

    setTimeout(() => {

        currentPage = index;

        const page = pages[currentPage];

        // Page gauche

        leftTitle.textContent = page.leftTitle;
        leftSubtitle.textContent = page.leftSubtitle;

        // Page droite

        chapterNumber.textContent = page.rightChapter;
        chapterTitle.textContent = page.rightTitle;
        chapterText.textContent = page.rightText;

        leftPage.classList.remove("page-changing");
        rightPage.classList.remove("page-changing");

    },300);

}


// =================================================
// NAVIGATION
// =================================================

previousButton.addEventListener("click", () => {

    if(currentPage > 0){

        loadPage(currentPage - 1);

    }

});

nextButton.addEventListener("click", () => {

    if(currentPage < pages.length - 1){

        loadPage(currentPage + 1);

    }

});


// =================================================
// SOMMAIRE
// =================================================

if(openSummary && summaryWindow){

    openSummary.addEventListener("click", () => {

        summaryWindow.style.display = "flex";

    });

}

if(closeSummary && summaryWindow){

    closeSummary.addEventListener("click", () => {

        summaryWindow.style.display = "none";

    });

}


// =================================================
// PARAMÈTRES
// =================================================

// À venir


// =================================================
// SAUVEGARDE
// =================================================

// À venir


// =================================================
// ANIMATIONS
// =================================================

// À venir


// =================================================
// DÉMARRAGE
// =================================================

loadPage(0);
