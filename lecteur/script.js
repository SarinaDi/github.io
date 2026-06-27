// =================================================
// VARIABLES
// =================================================

let currentSpread = 0;


// =================================================
// ÉLÉMENTS HTML
// =================================================

// Accueil

const openButton = document.getElementById("openBook");
const homeScreen = document.querySelector(".home-screen");
const reader = document.getElementById("reader");
const bookCover = document.getElementById("book");

// Navigation

const previousButton = document.getElementById("previousPage");
const nextButton = document.getElementById("nextPage");

const openSummary = document.getElementById("openSummary");
const closeSummary = document.getElementById("closeSummary");

const summaryWindow = document.getElementById("summaryWindow");
const summaryList = document.getElementById("summaryList");

// Pages

const pageLeft = document.getElementById("pageLeft");
const pageRight = document.getElementById("pageRight");

// ---------- Page gauche ----------

const leftChapter = document.getElementById("leftChapter");
const leftTitle = document.getElementById("leftTitle");
const leftText = document.getElementById("leftText");

// ---------- Page droite ----------

const rightChapter = document.getElementById("rightChapter");
const rightTitle = document.getElementById("rightTitle");
const rightText = document.getElementById("rightText");

// ---------- Numéros ----------

const leftPageNumber = document.getElementById("leftPageNumber");
const rightPageNumber = document.getElementById("rightPageNumber");


// =================================================
// OUVERTURE DU LIVRE
// =================================================

openButton.addEventListener("click",()=>{

    bookCover.classList.add("opening");

    setTimeout(()=>{

        homeScreen.classList.add("hide");

        setTimeout(()=>{

            homeScreen.style.display="none";

            reader.style.display="flex";

            reader.classList.add("show");

        },700);

    },1200);

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

    pageLeft.classList.add("page-changing");
    pageRight.classList.add("page-changing");

    setTimeout(()=>{

        // ===========================
        // PAGE GAUCHE
        // ===========================

        leftChapter.textContent = spread.left.chapter || "";

        leftTitle.textContent = spread.left.title || "";

        leftText.textContent = spread.left.text || "";

        // ===========================
        // PAGE DROITE
        // ===========================

        rightChapter.textContent = spread.right.chapter || "";

        rightTitle.textContent = spread.right.title || "";

        rightText.textContent = spread.right.text || "";

        // ===========================
        // NUMÉROS DE PAGE
        // ===========================

        leftPageNumber.textContent = currentSpread * 2 + 1;

        rightPageNumber.textContent = currentSpread * 2 + 2;

        pageLeft.classList.remove("page-changing");
        pageRight.classList.remove("page-changing");

    },300);

}
// =================================================
// NAVIGATION
// =================================================

previousButton.addEventListener("click",()=>{

    if(currentSpread>0){

        loadSpread(currentSpread-1);

    }

});

nextButton.addEventListener("click",()=>{

    if(currentSpread<book.length-1){

        loadSpread(currentSpread+1);

    }

});


// =================================================
// SOMMAIRE
// =================================================

function buildSummary(){

    summaryList.innerHTML="";

    book.forEach((spread,index)=>{

        if(!spread.right) return;

        const button=document.createElement("button");

        button.className="summary-item";

        button.textContent=

            spread.right.chapter+" - "+spread.right.title;

        button.onclick=()=>{

            loadSpread(index);

            summaryWindow.style.display="none";

        };

        summaryList.appendChild(button);

    });

}

openSummary.onclick=()=>{

    summaryWindow.style.display="flex";

};

closeSummary.onclick=()=>{

    summaryWindow.style.display="none";

};
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

buildSummary();

loadSpread(0);
