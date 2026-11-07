TASK 1
what is the "document" variable in javascript?
document is a built-in JavaScript object that represents the webpage. I use it to find and change things on the page.

what can I do with the "document" variable?
I use document to work with the webpage. It lets me find HTML elements, read or change their text, and add or remove elements.

Bulletpoints:
-document represents the webpage in JavaScript.
-I can use it to find HTML elements and read their content.
-I can use it to change, add, or remove things on the webpage.

TASK 2
How can I access the list "myList" in the html file?
Use document.getElementById("myList") to access the list in the HTML.

How can I change the list "myList" in the html file?
To change the list "myList", select it with 
const list = document.getElementById("myList") 
and use one of these methods:

-Add a new item: Create an element with document.createElement("li"), set its text, and add it using list.appendChild(newItem).

-Overwrite all items: Replace the content directly using list.innerHTML = "<li>Item 1</li><li>Item 2</li>".

-Remove an item: Delete a specific child element using list.removeChild(list.lastElementChild).
