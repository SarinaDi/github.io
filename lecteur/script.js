// =================================================
// VARIABLES
// =================================================

let currentPage = 0;

// =================================================
// SAUVEGARDE
// =================================================

function savePage(){

    localStorage.setItem(

        "currentPage",

        currentPage

    );

}

function loadSavedPage(){

    const saved = localStorage.getItem("currentPage");

    if(saved !== null){

        currentPage = parseInt(saved);

    }

}

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

// ---------- Images ----------

const leftImage = document.getElementById("leftImage");
const rightImage = document.getElementById("rightImage");

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

        },700);

    },1200);

});


// =================================================
// FERMETURE DU LIVRE
// =================================================

goHome.addEventListener("click",()=>{

    reader.classList.remove("show");

    setTimeout(()=>{

        reader.style.display="none";

        homeScreen.style.display="flex";

        setTimeout(()=>{

            homeScreen.classList.remove("hide");

            bookCover.classList.remove("opening");

        },50);

    },600);

});


// =================================================
// AFFICHAGE D'UNE PAGE
// =================================================

function displayPage(page, side){

    const image =
        side === "left"
        ? leftImage
        : rightImage;

    const chapter =
        side === "left"
        ? leftChapter
        : rightChapter;

    const title =
        side === "left"
        ? leftTitle
        : rightTitle;

    const text =
        side === "left"
        ? leftText
        : rightText;

    const pageNumber =
        side === "left"
        ? leftPageNumber
        : rightPageNumber;


    // ==============================
    // PAGE VIDE
    // ==============================

    if(!page){

        image.style.display="none";

        chapter.style.display="block";
        title.style.display="block";
        text.style.display="block";

        chapter.textContent="";
        title.textContent="";
        text.innerHTML="";
        pageNumber.textContent="";

        return;

    }


    // ==============================
    // PAGE COUVERTURE
    // ==============================

    if(page.type==="cover"){

        image.src=page.image;

        image.style.display="block";
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.objectFit = "contain";

        chapter.style.display="none";
        title.style.display="none";
        text.style.display="none";

    }


    // ==============================
    // PAGE CHAPITRE
    // ==============================

    else if(page.type==="chapter"){

        image.style.display="none";

        chapter.style.display="block";
        title.style.display="block";
        text.style.display="block";

        chapter.textContent=page.chapter || "";

        title.textContent=page.title || "";

        const paragraphs = (page.text || "")
    .trim()
    .split(/\n\s*\n/);

text.innerHTML = paragraphs
    .map(p => `<p>${p.trim()}</p>`)
    .join("");

    }


    // ==============================
    // PAGE TEXTE
    // ==============================

    else if(page.type==="text"){

        image.style.display="none";

        chapter.style.display="none";
        title.style.display="none";

        text.style.display="block";

        text.innerHTML=page.text || "";

    }

}
// =================================================
// CHARGEMENT DES PAGES
// =================================================

function loadPages(startPage){

    if(startPage < 0){

        startPage = 0;

    }

    if(startPage >= pages.length){

        return;

    }

    currentPage = startPage;
    savePage();

    let leftIndex = currentPage;

if(leftIndex % 2 !== 0){

    leftIndex--;

}

displayPage(pages[leftIndex],"left");

displayPage(pages[leftIndex + 1],"right");

leftPageNumber.textContent = leftIndex + 1;

if(leftIndex + 1 < pages.length){

    rightPageNumber.textContent = leftIndex + 2;

}else{

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

        if(page.type !== "chapter"){
            return;
        }

        const button = document.createElement("button");

        button.className = "summary-item";

        button.textContent = page.chapter + " - " + page.title;

        button.addEventListener("click",()=>{

            loadPages(index);

            summaryWindow.style.display = "none";

        });

        summaryList.appendChild(button);

    });

}
// =================================================
// OUVERTURE / FERMETURE DU SOMMAIRE
// =================================================

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

    settingsWindow.style.display = "flex";

});

closeSettings.addEventListener("click",()=>{

    settingsWindow.style.display = "none";

});


// =================================================
// FERMETURE DES FENÊTRES
// =================================================

summaryWindow.addEventListener("click",(event)=>{

    if(event.target === summaryWindow){

        summaryWindow.style.display = "none";

    }

});

settingsWindow.addEventListener("click",(event)=>{

    if(event.target === settingsWindow){

        settingsWindow.style.display = "none";

    }

});


// =================================================
// DÉMARRAGE
// =================================================
console.log(pages);
buildSummary();

loadSavedPage();

loadPages(currentPage);
