// =================================================
// VARIABLES
// =================================================

let currentPage = 0;


// =================================================
// ÉLÉMENTS HTML
// =================================================

// ---------- Accueil ----------

const homeScreen = document.getElementById("homeScreen");

const reader = document.getElementById("reader");

const openButton = document.getElementById("openBook");

const bookCover = document.getElementById("book");

// ---------- Livre ----------

const pageLeft = document.getElementById("pageLeft");

const pageRight = document.getElementById("pageRight");

// ---------- Contenu gauche ----------

const leftChapter = document.getElementById("leftChapter");

const leftTitle = document.getElementById("leftTitle");

const leftText = document.getElementById("leftText");

// ---------- Contenu droite ----------

const rightChapter = document.getElementById("rightChapter");

const rightTitle = document.getElementById("rightTitle");

const rightText = document.getElementById("rightText");

// ---------- Numéros ----------

const leftPageNumber = document.getElementById("leftPageNumber");

const rightPageNumber = document.getElementById("rightPageNumber");

// ---------- Navigation ----------

const previousButton = document.getElementById("previousPage");

const nextButton = document.getElementById("nextPage");

const goHome = document.getElementById("goHome");

// ---------- Sommaire ----------

const summaryWindow = document.getElementById("summaryWindow");

const summaryList = document.getElementById("summaryList");

const openSummary = document.getElementById("openSummary");

const closeSummary = document.getElementById("closeSummary");

// ---------- Paramètres ----------

const settingsWindow = document.getElementById("settingsWindow");

const openSettings = document.getElementById("openSettings");

const closeSettings = document.getElementById("closeSettings");

// =================================================
// OUVERTURE DU LIVRE
// =================================================

openButton.addEventListener("click", () => {

    bookCover.classList.add("opening");

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
// FERMETURE DU LIVRE
// =================================================

goHome.addEventListener("click", () => {

    reader.classList.remove("show");

    setTimeout(() => {

        reader.style.display = "none";

        homeScreen.style.display = "flex";

        setTimeout(() => {

            homeScreen.classList.remove("hide");

            bookCover.classList.remove("opening");

        }, 50);

    }, 600);

});


// =================================================
// CHARGEMENT D'UNE DOUBLE PAGE
// =================================================

// =================================================
// CHARGEMENT DES PAGES
// =================================================

function loadPages(startPage){

    if(startPage < 0){

        startPage = 0;

    }

    currentPage = startPage;

    const left = pages[startPage];

    const right = pages[startPage + 1];

    // ========================
    // PAGE GAUCHE
    // ========================

    if(left){

        leftChapter.textContent = left.chapter || "";

        leftTitle.textContent = left.title || "";

        leftText.innerHTML = left.text || "";

        leftPageNumber.textContent = startPage + 1;

    }

    // ========================
    // PAGE DROITE
    // ========================

    if(right){

        rightChapter.textContent = right.chapter || "";

        rightTitle.textContent = right.title || "";

        rightText.innerHTML = right.text || "";

        rightPageNumber.textContent = startPage + 2;

    }else{

        rightChapter.textContent = "";

        rightTitle.textContent = "";

        rightText.innerHTML = "";

        rightPageNumber.textContent = "";

    }

}
// =================================================
// NAVIGATION
// =================================================

previousButton.addEventListener("click",()=>{

    if(currentPage >= 2){

        loadPages(currentPage - 2);

    }

});

nextButton.addEventListener("click",()=>{

    if(currentPage + 2 < pages.length){

        loadPages(currentPage + 2);

    }

});
// =================================================
// SOMMAIRE
// =================================================

function buildSummary(){

    summaryList.innerHTML = "";

    pages.forEach((page,index)=>{

    if(page.chapter === ""){

        return;

    }

    const button = document.createElement("button");

    button.className = "summary-item";

    button.textContent = page.chapter + " - " + page.title;

    button.addEventListener("click",()=>{

        let target = index;

        if(target % 2 !== 0){

            target--;

        }

        loadPages(target);

        summaryWindow.style.display = "none";

    });

    summaryList.appendChild(button);

});
// =================================================
// PARAMÈTRES
// =================================================

openSettings.addEventListener("click",()=>{

    settingsWindow.style.display="flex";

});

closeSettings.addEventListener("click",()=>{

    settingsWindow.style.display="none";

});


// =================================================
// FERMETURE DES FENÊTRES
// =================================================

summaryWindow.addEventListener("click",(event)=>{

    if(event.target===summaryWindow){

        summaryWindow.style.display="none";

    }

});

settingsWindow.addEventListener("click",(event)=>{

    if(event.target===settingsWindow){

        settingsWindow.style.display="none";

    }

});


// =================================================
// DÉMARRAGE
// =================================================

buildSummary();

loadPages(0);
