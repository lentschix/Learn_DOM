*TASK 3: ul*

ul = unordered list; man benutzt es wenn man etwas aufzählen möchte bei dem die Reihenfolge erstmals egal ist

Es gibt noch ol (=Nummerierte Liste) und li (=einzelnes Element)

z.B. ul ist der äußere Kontainer und li sind die einzelnen Elemente
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

Parameter-Erklärung
In JavaScript greift man mit 
const myList = document.getElementById("myList"); 
auf die Liste zu. 

Folgende Parameter sind dabei am wichtigsten:
Struktur & Navigation:
- childElementCount: Gibt als Zahl zurück, wie viele Einträge (<li>) in der Liste sind.
- firstElementChild / lastElementChild: Greift direkt auf den allerersten oder den allerletzten Listenpunkt zu.
- children: Gibt eine Übersicht (Sammlung) aller enthaltenen <li>-Elemente zurück.

Inhalt:
- innerHTML: Liest oder ersetzt den gesamten HTML-Inhalt innerhalb von <ul>...</ul>.

Styling & Aussehen:
- style.listStyleType: Ändert die Form der Aufzählungspunkte (z. B. von Punkten "disc" auf Quadrate "square" oder entfernt sie mit "none").

*TASK 5: form*
form = formular; man benutzt es, um Benutzereingaben zu sammeln und an einen Server zu senden (oder mit JS weiterzuarbeiten).

Beispiel: form ist der äußere Kontainer und die Eingabefelder sind die einzelnen Elemente darin:
<form id="myForm" action="/submit" method="POST">
    <label for="username">Name:</label>
    <input type="text" id="username" name="username" required>
    <button type="submit">Absenden</button>
</form>

In JavaScript greift man mit:

const myForm = document.getElementById("myForm");

Struktur & Elemente:
- elements: Gibt eine Übersicht (HTMLFormControlsCollection) aller Eingabefelder, Buttons und Selects innerhalb des Formulars zurück. Man kann darüber direkt per Index oder name-Attribut auf Felder zugreifen (z. B. myForm.elements["username"]).
- length: Gibt als Zahl zurück, wie viele Formular-Steuerelemente (Inputs, Buttons usw.) im <form> enthalten sind.

Konfiguration & Versand:
- action: Liest oder ändert die Ziel-URL, an die die Formulardaten beim Absenden geschickt werden.
- method: Liest oder ändert die HTTP-Übertragungsmethode (meist "get" oder "post").
- noValidate: Ein Wahrheitswert (true/false), der festlegt, ob die eingebaute HTML5-Validierung (wie required oder type="email") beim Absenden übersprungen werden soll.

*TASK 5 button*
button = Schaltfläche; man benutzt es, um Aktionen auszulösen – entweder um ein Formular abzuschicken oder um per JavaScript Funktionen (z. B. ein Menü öffnen, Daten berechnen) zu starten.

z. B. <button> ist das klickbare Element selbst und umschließt den angezeigten Text (oder sogar Icons):

Button in HTML:
<button id="myBtn" type="button" name="actionBtn" value="start">Klick mich</button>

In JS greift man mit:
const myBtn = document.getElementById("myBtn");

Status & Verhalten:
- disabled: Ein Wahrheitswert (true/false), der den Button deaktiviert (ausgraut und nicht mehr klickbar macht) oder wieder aktiviert.s
- type: Liest oder ändert das Standardverhalten des Buttons ("submit", "reset" oder "button"). Wichtig: Innerhalb eines <form> ist "submit" der Standard!

Inhalt & Werte:
- textContent / innerText: Liest oder ändert den sichtbaren Text auf dem Button (z. B. von "Speichern" auf "Gespeichert!").
- value / name: Speichert einen internen Wert und Namen, die mitgeschickt werden, falls der Button ein Formular absendet.

*TASK 5: input*
input = Eingabefeld; man benutzt es, um verschiedene Arten von Daten vom Benutzer abzufragen (Text, Passwörter, Zahlen, Checkboxen, Datum usw.).

Es gibt noch textarea (=mehrzeiliges Textfeld), select (=Dropdown-Auswahl) und label (=Beschriftung für das Eingabefeld).

z. B. <input> ist ein alleinstehendes Tag (hat kein schließendes </input>) und wird über das type-Attribut gesteuert:

HTML:
<label for="ageInput">Alter:</label>
<input id="ageInput" type="number" name="age" value="25" min="18" max="99" placeholder="Dein Alter">

JavaScript:
const myInput = document.getElementById("ageInput");

Wert & Inhalt:
- value: Liest den aktuell eingegebenen Wert als String aus oder setzt ihn neu (selbst bei type="number" liefert .value einen String!).
- valueAsNumber: Gibt den Wert direkt als echte Zahl (Number) zurück (funktioniert bei type="number" oder type="date").
- checked: Ein Wahrheitswert (true/false), der nur bei type="checkbox" oder type="radio" angibt, ob das Feld angehakt ist.

Konfiguration & Einschränkungen:
- type: Liest oder ändert die Art des Eingabefelds (z. B. von "password" auf "text", um ein Passwort sichtbar zu machen).
- placeholder: Liest oder ändert den grauen Hinweistext, der erscheint, solange das Feld leer ist.
- disabled / readOnly: Mit disabled = true wird das Feld komplett gesperrt und ausgegraut; mit readOnly = true kann der Benutzer den Wert zwar sehen und kopieren, aber nicht bearbeiten.
- equired / min / max: Legt Validierungsregeln fest (Pflichtfeld, Minimal- oder Maximalwert).

*Task 5: div*
div = Division (Bereich/Container); man benutzt es als neutralen Block-Container, um andere HTML-Elemente zu gruppieren, Layouts zu strukturieren oder gemeinsam mit CSS und JavaScript zu gestalten. Es hat selbst keine spezielle semantische Bedeutung.

z. B. div umschließt andere Elemente wie Überschriften und Absätze als gemeinsamer Block:
HTML:
<div id="myBox" class="card active" data-category="info">
    <h2>Titel</h2>
    <p>Das ist ein Text im Container.</p>
</div>

In JavaScript:
const myBox = document.getElementById("myBox");

Da ein <div> keine eigenen Formular- oder Listen-Spezialparameter hat, nutzt man hier vor allem die allgemeinen HTMLElement-Eigenschaften:

Inhalt & Struktur:
- innerHTML: Liest oder ersetzt den gesamten HTML-Code innerhalb des <div> (inklusive Unter-Tags wie <p> oder <h2>).
- textContent: Liest oder ändert nur den reinen Text innerhalb des Containers (ignoriert HTML-Tags und ist sicherer gegen XSS).
- children / childElementCount: Gibt alle enthaltenen Kind-Elemente zurück bzw. zählt, wie viele Elemente im <div> liegen.

Styling & Klassen:
- classList: Ermöglicht das gezielte Hinzufügen (add), Entfernen (remove) oder Umschalten (toggle) von CSS-Klassen, ohne bestehende Klassen zu überschreiben.
- style: Ermöglicht den direkten Zugriff auf Inline-CSS-Eigenschaften (z. B. myBox.style.backgroundColor = "lightblue" oder myBox.style.display = "none" zum Verstecken).

*Task 5: Table*
table = Tabelle; man benutzt es, um tabellarische Daten strukturiert in Zeilen und Spalten darzustellen (nicht mehr für Seiten-Layouts, dafür nimmt man heute CSS Grid/Flexbox).

Es gibt noch thead (=Tabellenkopf), tbody (=Tabellenkörper), tfoot (=Tabellenfuß), tr (=Tabellenzeile / table row), th (=Kopfzelle / table header) und td (=Datenzelle / table data).

z. B. table ist der äußere Kontainer, tr bildet die Zeilen und th/td die einzelnen Zellen darin:
HTML:
<table id="myTable">
    <thead>
        <tr>
            <th>Name</th>
            <th>Punkte</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Anna</td>
            <td>95</td>
        </tr>
        <tr>
            <td>Lukas</td>
            <td>88</td>
        </tr>
    </tbody>
</table>

In JavaScript:
const myTable = document.getElementById("myTable");

Struktur & Bereiche:
- rows: Gibt eine Sammlung (HTMLCollection) aller <tr>-Zeilen in der gesamten Tabelle zurück (inklusive Kopf- und Fußzeilen). Man kann per Index darauf zugreifen (z. B. myTable.rows[0]).
- tHead / tFoot: Greift direkt auf das <thead>- bzw. <tfoot>-Element der Tabelle zu (oder gibt null zurück, falls keines existiert).
- tBodies: Gibt eine Sammlung aller <tbody>-Bereiche zurück (meist myTable.tBodies[0]).
- caption: Liest oder setzt das <caption>-Element (die Tabellenüberschrift).

(Hinweis zu den Zeilen selbst: Jedes <tr> hat zusätzlich cells zum Auslesen der Zellen und insertCell(index) zum Einfügen neuer <td>-Zellen.)

*Task 5 select/option*
select = Dropdown-Auswahlliste; man benutzt es, um dem Benutzer eine vordefinierte Liste von Auswahlmöglichkeiten anzubieten (entweder als Einzelauswahl oder mit multiple als Mehrfachauswahl).

option = einzelner Auswahlpunkt innerhalb des <select>-Menüs. Außerdem gibt es noch optgroup (=Gruppierung mehrerer Optionen unter einer nicht anklickbaren Zwischenüberschrift).

z. B. select ist der äußere Kontainer und option sind die einzelnen Auswahlpunkte darin:
HTML
<label for="courseSelect">Kurs wählen:</label>
<select id="courseSelect" name="course">
    <option value="js">JavaScript Basics</option>
    <option value="tdd" selected>Test-Driven Development</option>
    <option value="sql">Datenbanken & SQL</option>
</select>

in JavaScript:
const mySelect = document.getElementById("courseSelect");

Beim <select>-Element:
- value: Liest den value-Wert der aktuell ausgewählten <option> aus (z. B. "tdd") oder wählt per Zuweisung direkt eine bestimmte Option aus (mySelect.value = "sql").
- selectedIndex: Gibt die Index-Position (beginnend bei 0) der aktuell gewählten Option als Zahl zurück (oder -1, falls nichts gewählt ist).
- options: Gibt eine Sammlung (HTMLOptionsCollection) aller enthaltenen <option>-Elemente zurück.
- selectedOptions: Gibt eine Liste aller gewählten Optionen zurück (besonders nützlich, wenn das Attribut multiple gesetzt ist).
- length: Gibt als Zahl zurück, wie viele <option>-Einträge im Dropdown vorhanden sind.
- multiple / disabled: Wahrheitswerte (true/false), um Mehrfachauswahl zu erlauben oder das gesamte Dropdown zu sperren.

Beim einzelnen <option>-Element (z. B. mySelect.options[0]):
- text: Der sichtbare Text im Dropdown (z. B. "JavaScript Basics").
- value: Der interne Wert, der beim Absenden übertragen wird (z. B. "js").
- selected: Ein Wahrheitswert (true/false), der angibt, ob genau diese Option gerade ausgewählt ist.

*TASK 5: canvas*
canvas = Zeichenfläche (Leinwand); man benutzt es, um per JavaScript dynamisch 2D-Grafiken, Diagramme, Animationen oder ganze Spiele direkt im Browser zu zeichnen. Ohne JavaScript ist <canvas> einfach nur ein leeres, durchsichtiges Rechteck.

z. B. <canvas> braucht eine Breite (width) und Höhe (height), damit die Zeichenfläche nicht verzerrt wird:
HTML: 
<canvas id="myCanvas" width="400" height="200" style="border: 1px solid black;">
    Dein Browser unterstützt kein Canvas.
</canvas>

JavaScript:
const myCanvas = document.getElementById("myCanvas");

Beim <canvas>-Element selbst:
- width / height: Liest oder ändert die interne Auflösung der Zeichenfläche in Pixeln (Standardwert ist 300 x 150, falls nichts im HTML steht). Wichtig: Wenn man width oder height per JS neu setzt, wird die gesamte Zeichenfläche komplett geleert!

Wichtige Methoden am <canvas>-Element:
- getContext("2d"): Gibt das Zeichen-Objekt (CanvasRenderingContext2D) zurück, mit dem man Formen, Linien, Texte und Bilder zeichnen kann (für 3D gibt es "webgl").
- toDataURL(): Exportiert alles, was aktuell auf das Canvas gezeichnet wurde, als fertiges Bild (Base64-Data-URL, z. B. als PNG), um es herunterzuladen oder in einem <img> anzuzeigen.

Die wichtigsten Parameter & Methoden am 2D-Kontext (ctx):
- fillStyle / strokeStyle: Legt die Füllfarbe bzw. Linienfarbe fest (z. B. "blue" oder "#ff0000").
- lineWidth: Bestimmt die Dicke der gezeichneten Linien in Pixeln.
- fillRect(x, y, width, height): Zeichnet direkt ein ausgefülltes Rechteck an den Koordinaten (x, y) (oben links ist 0, 0).
- clearRect(x, y, width, height): Radiert einen bestimmten Bereich wieder komplett transparent (wird bei Animationen vor jedem neuen Frame genutzt).
- arc(...) / beginPath() / stroke(): Wird genutzt, um Kreise, Bögen und eigene Pfade/Linien zu zeichnen.