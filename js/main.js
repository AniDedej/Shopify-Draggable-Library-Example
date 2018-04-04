const container = document.querySelector("#container");
const ansContainer = document.querySelector("#ansContainer");
const droppable = new Draggable.Droppable(document.querySelectorAll("#ansContainer"), {
    draggable: "#item",
    droppable: "#ansHolder, #ansContainer"
});
  
droppable.on("droppable:over", function() {
    document.querySelector("#ansHolder").classList.remove("draggable-droppable--occupied");
});

droppable.on("droppable:out");

const questions = [
    "Comment crée une base de donées ?", 
    "Comment crée une table ?", 
    "Comment ajouter une colonne dans une table ?",
    "Comment lire les données d'une table ?",
    "Quel mot clé utiliser pour lire les données d'une table avec une seul condition ?"
];

const answers = [
    "CREATE DATABASE ma_base",
    "CREATE TABLE ... (colonne1 type_donnees, colonne2 type_donnees)",
    "ADD",
    "SELECT ... FROM ...",
    "WHERE con"
];

questions.forEach(question => {
    let elm = document.createElement("p");
    let ansElm = document.createElement("div");
    let questHolder = document.createElement("div");
    ansElm.classList.add("ansHolder");
    ansElm.id = "ansHolder";
    questHolder.id = "questHolder";
    elm.textContent = question;
    questHolder.appendChild(elm);
    questHolder.appendChild(ansElm);
    container.appendChild(questHolder);
});

answers.forEach(answer => {
    let elm = document.createElement("p");
    elm.classList.add("item");
    elm.textContent = answer;
    elm.id = "item";
    ansContainer.appendChild(elm);
});
