const myList = document.getElementById("myList");

//Item 4 hinzufügen
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
myList.appendChild(newItem);

//Anzahl der Einträge abfragen
console.log("Anzahl der Einträge:", myList.childElementCount);

// Das erste Element rot färben
if (myList.firstElementChild) {
    myList.firstElementChild.style.color = "red";
}

//Die Aufzählungspunkte von Punkten zu Quadraten ändern
myList.style.listStyleType = "square";