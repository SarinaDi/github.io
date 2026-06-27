// =================================================
// VARIABLES
// =================================================

let currentSpread = 0;


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

function loadSpread(index){

    if(index < 0 || index >= book.length){

        return;

    }

    currentSpread = index;

    const spread = book[currentSpread];

    pageLeft.classList.add("turn");

    pageRight.classList.add("turn");

    setTimeout(() => {

        // ==========================
        // PAGE GAUCHE
        // ==========================

        leftChapter.textContent = spread.left.chapter || "";

        leftTitle.textContent = spread.left.title || "";

        leftText.innerHTML = spread.left.text || "";

        // ==========================
        // PAGE DROITE
        // ==========================

        rightChapter.textContent = spread.right.chapter || "";

        rightTitle.textContent = spread.right.title || "";

        rightText.innerHTML = spread.right.text || "";

        // ==========================
        // NUMÉROS
        // ==========================

        leftPageNumber.textContent = currentSpread * 2 + 1;

        rightPageNumber.textContent = currentSpread * 2 + 2;

        pageLeft.classList.remove("turn");

        pageRight.classList.remove("turn");

    }, 350);

}
// =================================================
// NAVIGATION
// =================================================

previousButton.addEventListener("click", () => {

    if(currentSpread > 0){

        loadSpread(currentSpread - 1);

    }

});

nextButton.addEventListener("click", () => {

    if(currentSpread < book.length - 1){

        loadSpread(currentSpread + 1);

    }

});


// =================================================
// SOMMAIRE
// =================================================

function buildSummary(){

    summaryList.innerHTML = "";

    book.forEach((spread,index)=>{

        const button = document.createElement("button");

        button.className = "summary-item";

        let title = "";

        if(spread.right.chapter){

            title = spread.right.chapter;

        }

        if(spread.right.title){

            title += " - " + spread.right.title;

        }

        button.textContent = title;

        button.addEventListener("click",()=>{

            loadSpread(index);

            summaryWindow.style.display = "none";

        });

        summaryList.appendChild(button);

    });

}

openSummary.addEventListener("click",()=>{

    summaryWindow.style.display = "flex";

});

closeSummary.addEventListener("click",()=>{

    summaryWindow.style.display = "none";

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

loadSpread(0);
