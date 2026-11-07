TASK 3: ul

ul = unordered list; man benutzt es wenn man etwas aufzählen möchte bei dem die Reihenfolge erstmals egal ist

Es gibt noch ol (=Nummerierte Liste) und li (=einzelnes Element)

z.B. ul ist der äußere Kontainer und li sind die einzelnen Elemente
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

Parameter-Erklärung
In JavaScript greift man mit const myList = document.getElementById("myList"); auf die Liste zu. 
Folgende Parameter sind dabei am wichtigsten:

Struktur & Navigation:
-childElementCount: Gibt als Zahl zurück, wie viele Einträge (<li>) in der Liste sind.
-firstElementChild / lastElementChild: Greift direkt auf den allerersten oder den allerletzten Listenpunkt zu.
-children: Gibt eine Übersicht (Sammlung) aller enthaltenen <li>-Elemente zurück.

Inhalt:
-innerHTML: Liest oder ersetzt den gesamten HTML-Inhalt innerhalb von <ul>...</ul>.

Styling & Aussehen:
-style.listStyleType: Ändert die Form der Aufzählungspunkte (z. B. von Punkten "disc" auf Quadrate "square" oder entfernt sie mit "none").
