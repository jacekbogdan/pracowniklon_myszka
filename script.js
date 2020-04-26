//zmienne globalne
let triggers = document.querySelectorAll(".triggers button");
let mouseContainer = document.getElementById("mouse-container");
let textContainer = document.getElementById("text-container");
let promise;
let lastMouseBehaviourTimel; //w tej zmiennej będę przechowywał czas, kiedy zostało wywołane ostatnie zdarzenie



//dodaje do kontenera myszki klasę o nazie przekazanej w argumencie
function addClass(cl) {
    mouseContainer.classList.add(cl);
}

//usuwa z kontenera myszki klasę o nazwie przekazanej w argumencie
function removeClass(cl) {
    mouseContainer.classList.remove(cl);
    void mouseContainer.offsetWidth;
}

//dodaje chmurke do text containera z treścią przekazaną w argumencie
function addText(txt) {
    if (txt) {
        let newElement = document.createElement("div");
        newElement.setAttribute("id", "text-cloud");
        newElement.innerHTML = txt;
        textContainer.appendChild(newElement);
    }
    else return
}

// usuwa diva z chmurką tekstu z text containera
function removeText() {
    if (document.getElementById("text-cloud")) {
    document.getElementById("text-container").removeChild(document.getElementById("text-cloud"));
    }
}

//dodaje klase i tekst
function addEvent(cl, txt) {
    addClass(cl);
    addText(txt);
}

//usuwa klase i tekst
function removeEvent(cl) {
    removeClass(cl);
    removeText();
}

//obsluguje pojedyncze zachowanie
function singleBehaviour(cls, txt, tim) {
    return new Promise((resolve, reject) => {
 
        addEvent(cls, txt);
        setTimeout(() => {
            removeEvent(cls);
            resolve();
        }, tim);
    });
}

//obsluguje parę zachowań.
// chciałbym, żeby działało tak, że jak striggeruje nową parę, to te poprzednie się od razu wykonają;
// ALE NIE WIEM, JAK TO ZROBIĆ
function newManageMouseAppBehaviour() {
    let cls1 = document.getElementById("classes-list1").value;
    let txt1 = document.getElementById("text-field1").value;
    let tim1 = document.getElementById("duration-time1").value;
    let cls2 = document.getElementById("classes-list2").value;
    let txt2 = document.getElementById("text-field2").value;
    let tim2 = document.getElementById("duration-time2").value;

    promise = singleBehaviour(cls1, txt1, tim1).then((value) => {
        promise = singleBehaviour(cls2, txt2, tim2);
    });
}

function addIntervalBehaviour(){
    setInterval(() => {
        
    }, interval);

}

