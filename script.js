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

//div
const myDiv = document.getElementById("myDiv");

myDiv.innerHTML = "<strong>Updated:</strong> This is a styled div.";
myDiv.style.backgroundColor = "lightgray";
myDiv.style.padding = "10px";
console.log("Div Breite:", myDiv.offsetWidth);

//Table
const myTable = document.getElementById("myTable");

const newRow = myTable.insertRow(-1);
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
cell1.textContent = "Clara";
cell2.textContent = "25";

console.log("Anzahl der Tabellenzeilen:", myTable.rows.length);

//Select & option
const colorSelect = document.getElementById("color");

const yellowOption = new Option("Yellow", "yellow");
colorSelect.add(yellowOption);
colorSelect.value = "yellow";

colorSelect.addEventListener("change", function () {
    myDiv.style.backgroundColor = colorSelect.value;
    console.log("Gewählte Farbe:", colorSelect.options[colorSelect.selectedIndex].text);
});

//input
const nameInput = document.getElementById("name");
const agreeCheckbox = document.getElementById("agree");

nameInput.placeholder = "Enter your name here...";
agreeCheckbox.checked = true; // Checkbox standardmäßig anhaken

//From & Button
const myForm = document.getElementById("myForm");
const submitBtn = document.getElementById("submitBtn");

console.log("Anzahl der Formular-Elemente:", myForm.length);

// Klick auf den Button abfangen und Eingaben auslesen
submitBtn.addEventListener("click", function () {
    console.log("Eingegebener Name:", nameInput.value);
    console.log("Checkbox angehakt?:", agreeCheckbox.checked);

    submitBtn.textContent = "Submitted!";
    submitBtn.disabled = true; // Button nach Klick deaktivieren
});

// --- CANVAS ---
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

// Ein blaues Rechteck und Text zeichnen
ctx.fillStyle = "steelblue";
ctx.fillRect(20, 20, 100, 60);

ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("Hello Canvas!", 20, 110);