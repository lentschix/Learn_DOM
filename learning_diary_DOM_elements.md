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