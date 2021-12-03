"use strict";

let count = 0;
//Gets current list and update the count of list items in global variable
function getCurrentList() {
  let myNodelist = document.getElementsByTagName("LI");

  for (let i = 0; i < myNodelist.length; i++) {
    console.log(myNodelist[i]);
    count++;
  }
  console.log(count);
}
getCurrentList();

function addNewItem() {
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
    createAddButton.setAttribute("class", "btnAdd");
    createAddButton.setAttribute("id", "btnAdd" + count);
    //Creating remove button under div
    var createRemoveButton = document.createElement("button");
    createRemoveButton.innerHTML = "Remove";
    document
      .getElementById("listButtons" + count)
      .appendChild(createRemoveButton);
    createRemoveButton.className = "btnRemove";
    // createRemoveButton.setAttribute("class", "btnRemove");
    createRemoveButton.setAttribute("id", "btnRemove" + count);
    // createDiv.appendChild(document.createTextNode(inputVal));
    // createDiv.appendChild(entry);
  }
}

//removing an item from the current list
let element = document.getElementsByClassName("btnRemove");
for (let i = 0; i < element.length; i++) {
  element[i].onclick = function () {
    let item = this.parentElement.parentElement;
    item.style.display = "none";
  };
}

//completing an element from the to do list
let completeElement = document.getElementsByClassName("btnAdd");
for (let i = 0; i < completeElement.length; i++) {
  completeElement[i].onclick = function () {
    let item = this.parentElement;
    this.style.display = "none";
    let container = item.parentElement;
    container.style.backgroundColor = "green";
    container.append("Task Completed");
  };
}
