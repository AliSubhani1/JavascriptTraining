"use strict";
const para = document.createElement("p");
// let text = document.getElementById("").value;
// console.log(text);
let count = 5;
function getInputValue() {
  count++;
  // Selecting the input element and get its value
  var inputVal = document.getElementById("textField").value;
  if (inputVal === "") {
    alert("Please add the task name");
  } else {
    // Displaying the value
    // alert(inputVal);
    var list = document.getElementById("demo-list");
    // var firstname = document.getElementById("firstname").value;
    var entry = document.createElement("li");
    entry.setAttribute("class", "block");
    entry.setAttribute("id", "block" + count);
    entry.appendChild(document.createTextNode(inputVal));
    list.appendChild(entry);

    //creating a div under list item
    var createDiv = document.createElement("div");
    document.getElementById("block" + count).appendChild(createDiv);
    createDiv.setAttribute("class", "listButtons");
    createDiv.setAttribute("id", "listButtons" + count);

    //Creating add button under div
    var createAddButton = document.createElement("BUTTON");
    createAddButton.innerHTML = "Done";
    document.getElementById("listButtons" + count).appendChild(createAddButton);
    // document.body.appendChild(createAddButton);
    createAddButton.setAttribute("class", "btnAdd" + count);
    createAddButton.setAttribute("id", "btnAdd" + count);
    //Creating remove button under div
    var createRemoveButton = document.createElement("button");
    createRemoveButton.innerHTML = "Remove";
    document
      .getElementById("listButtons" + count)
      .appendChild(createRemoveButton);
    createRemoveButton.setAttribute("class", "btnRemove" + count);
    createRemoveButton.setAttribute("id", "btnRemove" + count);
    // createDiv.appendChild(document.createTextNode(inputVal));
    // createDiv.appendChild(entry);
  }
}

function removeItem(str) {
  // document.getElementById("block").style.display = "none";
  let value = str;
  let size = value.length;
  let result = value.charAt(size - 1);
  console.log(result);
  var element = document.getElementById("block" + result);
  element.classList.add("hideElement");
  // document.getElementById(block + result).style.visibility = "hidden";
  // btn.style.display = "none";
}
function completeItem(str) {
  let value = str;
  let size = value.length;
  let result = value.charAt(size - 1);
  console.log(result);
  // var element = document.getElementById(str);
  // element.classList.add("hideElement");
  var container = document.getElementById("block" + result);
  container.classList.add("complete");
  document.getElementById("block" + result).textContent = "Task Completed";
}
