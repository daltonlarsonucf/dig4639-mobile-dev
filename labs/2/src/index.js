import Card from "./components/Card/index.js"

function runOnLoad() {
    let element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    var newCard = new Card ({
        answer: "npm init",
        question: "What command creates a package.json file?"
    });
    element.appendChild(newCard.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);