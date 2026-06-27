const openButton = document.getElementById("openBook");
const homeScreen = document.querySelector(".home-screen");
const reader = document.getElementById("reader");
const book = document.getElementById("book");
const chapterNumber = document.getElementById("chapterNumber");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");
const leftTitle = document.getElementById("leftTitle");
const leftSubtitle = document.getElementById("leftSubtitle");
const leftPage = document.getElementById("pageLeft");
const rightPage = document.getElementById("pageRight");

// =================================================
// DONNÉES DU LIVRE
// =================================================


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

    if(currentPage > 0){

        loadPage(currentPage - 1);

    }

});
    }

});

nextButton.addEventListener("click", () => {

    if(currentPage < pages.length - 1){

        loadPage(currentPage + 1);

    }

});

    }

});
// =================================================
// CHARGER UNE PAGE
// =================================================

let currentPage = 0;

function loadPage(index){

    if(index < 0 || index >= pages.length){
        return;
    }

    leftPage.classList.add("page-changing");
    rightPage.classList.add("page-changing");

    setTimeout(() => {

        currentPage = index;

        const page = pages[currentPage];

        leftTitle.textContent = page.leftTitle;
        leftSubtitle.textContent = page.leftSubtitle;

        chapterNumber.textContent = page.rightChapter;
        chapterTitle.textContent = page.rightTitle;
        chapterText.textContent = page.rightText;

        leftPage.classList.remove("page-changing");
        rightPage.classList.remove("page-changing");

    },300);

}
loadPage(currentPage);
// =================================================
// GESTION DES PAGES
// =================================================

let currentPage = 0;

function loadPage(index){

    if(index < 0 || index >= pages.length){
        return;
    }

    currentPage = index;

    const page = pages[currentPage];

    leftTitle.textContent = page.leftTitle;
    leftSubtitle.textContent = page.leftSubtitle;

    chapterNumber.textContent = page.rightChapter;
    chapterTitle.textContent = page.rightTitle;
    chapterText.textContent = page.rightText;

}

// =================================================
// DÉMARRAGE
// =================================================

loadPage(0);
