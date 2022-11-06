let container = document.querySelector(".container");
let box = document.querySelector(".box");

//Making the div element
let divElem = document.createElement("div");

//Creating a text node
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode(`This is my element click to edit it`);
} else {
  text = document.createTextNode(val);
}

//Appending the text node
divElem.appendChild(text);

//Giving div an id & class
divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");

//Adding some inline css
divElem.setAttribute("style", "border:2px solid black");

//Inserting the element before box
container.insertBefore(divElem, box);

//Adding an Event Listener:

divElem.addEventListener("click", () => {
  let noofTextareas = document.getElementsByClassName("textarea").length;
  if (noofTextareas == 0) {
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea name="" id="textarea" class="textarea" cols="30" rows="10">${html}</textarea>`;
  }
  //  Blur Event
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", () => {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});
