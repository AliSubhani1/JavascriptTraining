"use strict";

let count = 0;
let tasks = [];
let taskStatus = [];
function addNewItem() {
  count++;
  // Selecting the input element and get its value
  var inputVal = document.getElementById("textField").value;
  if (inputVal === "") {
    alert("Please add the task name");
  } else {
    // Displaying the value
    // alert(inputVal);
    document.getElementById("textField").value = "";
    var list = document.getElementById("demo-list");
    // var firstname = document.getElementById("firstname").value;
    var entry = document.createElement("li");
    entry.className = "block";
    entry.id = "block" + count;

    entry.appendChild(document.createTextNode(inputVal));
    list.appendChild(entry);

    //stored the new item in an array and saved it in local storage
    tasks.push(inputVal);
    taskStatus.push("false");
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("taskStatus", JSON.stringify(taskStatus));
    //creating a div under list item
    var createDiv = document.createElement("div");
    document.getElementById("block" + count).appendChild(createDiv);
    createDiv.className = "listButtons";
    createDiv.id = "listButtons" + count;

    //Creating add button under div
    var createAddButton = document.createElement("BUTTON");
    createAddButton.innerHTML = "Done";
    document.getElementById("listButtons" + count).appendChild(createAddButton);
    // document.body.appendChild(createAddButton);
    createAddButton.className = "btnAdd";
    createAddButton.id = "btnAdd" + count;
    createAddButton.onclick = function () {
      let index = this.id.charAt(this.id.length - 1);
      let item = this.parentElement;
      this.style.display = "none";
      let container = item.parentElement;
      container.style.backgroundColor = "green";
      container.append("Task Completed");
      taskStatus[index - 1] = true;
      localStorage.setItem("taskStatus", taskStatus);
    };
    //Creating remove button under div
    var createRemoveButton = document.createElement("button");
    createRemoveButton.innerHTML = "Remove";
    document
      .getElementById("listButtons" + count)
      .appendChild(createRemoveButton);

    createRemoveButton.className = "btnRemove";
    createRemoveButton.id = "btnRemove" + count;
    createRemoveButton.onclick = function () {
      let item = this.parentElement.parentElement;
      item.style.display = "none";
      tasks.pop();
      taskStatus.pop();
      localStorage.removeItem("tasks");
      localStorage.removeItem("taskStatus");
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("taskStatus", JSON.stringify(taskStatus));
    };
  }
}

window.onload = function () {
  let elemCount = 0;
  let UpdatedTasks = JSON.parse(localStorage.getItem("tasks"));
  let UpdatedTaskStatus = JSON.parse(localStorage.getItem("taskStatus"));
  //   let Tasks = JSON.parse(localStorage.getItem("tasks"));
  //   let TaskStatus = JSON.parse(localStorage.getItem("taskStatus"));
  console.log(UpdatedTasks);
  console.log(UpdatedTaskStatus);
  for (let task = 0; task < UpdatedTasks.length; task++) {
    elemCount++;

    var list = document.getElementById("demo-list");
    // var firstname = document.getElementById("firstname").value;
    var entry = document.createElement("li");
    entry.className = "block";
    entry.id = "block" + elemCount;

    entry.appendChild(document.createTextNode(UpdatedTasks[task]));
    list.appendChild(entry);
    //creating a div under list item
    var createDiv = document.createElement("div");
    document.getElementById("block" + elemCount).appendChild(createDiv);
    createDiv.className = "listButtons";
    createDiv.id = "listButtons" + elemCount;

    //Creating add button under div
    var createAddButton = document.createElement("BUTTON");
    createAddButton.innerHTML = "Done";
    document
      .getElementById("listButtons" + elemCount)
      .appendChild(createAddButton);
    // document.body.appendChild(createAddButton);
    createAddButton.className = "btnAdd";
    createAddButton.id = "btnAdd" + elemCount;
    createAddButton.onclick = function () {
      let index = this.id.charAt(this.id.length - 1);
      let item = this.parentElement;
      this.style.display = "none";
      let container = item.parentElement;
      container.style.backgroundColor = "green";
      container.append("Task Completed");
      taskStatus[index - 1] = true;
      localStorage.setItem("taskStatus", taskStatus);
    };
    //Creating remove button under div
    var createRemoveButton = document.createElement("button");
    createRemoveButton.innerHTML = "Remove";
    document
      .getElementById("listButtons" + elemCount)
      .appendChild(createRemoveButton);

    createRemoveButton.className = "btnRemove";
    createRemoveButton.id = "btnRemove" + elemCount;
    createRemoveButton.onclick = function () {
      let item = this.parentElement.parentElement;
      item.style.display = "none";
      tasks.pop();
      taskStatus.pop();
      localStorage.removeItem("tasks");
      localStorage.removeItem("taskStatus");
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("taskStatus", JSON.stringify(taskStatus));
    };
  }
};
