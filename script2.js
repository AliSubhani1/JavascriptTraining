"use strict";

let count = 0;
let maxCount = 0;
let tasks = [];
let taskStatus = [];

function addNewItem() {
  //   count = tasks.length;

  console.log("count=", count);
  // Storing the input field value
  var inputVal = document.getElementById("textField").value;
  //clear text field
  document.getElementById("textField").value = "";

  if (inputVal === "") {
    alert("Please add the task name");
  } else {
    // count = tasks.length;

    //Create a list item with a div
    createListItemWithDiv(inputVal);

    //storing item in array and also in local storage
    storeItems(inputVal);

    var createAddButton = document.createElement("BUTTON");

    //Creates a Done button in list item
    createDoneBtn(createAddButton);

    /////////////// event listener for Done button
    createAddButton.addEventListener("click", function () {
      const self = this;
      clickDoneBtn(self, inputVal);
    });

    //Creating remove button under div
    var createRemoveButton = document.createElement("button");

    //Creates a remove button in list item
    createRemoveBtn(createRemoveButton);

    //////Add on click function for btnRemove here//////////////
    createRemoveButton.addEventListener("click", function () {
      const self = this;
      clickRemovebtn(self, inputVal);
    });
    count++;
  }
}
// window.onload = function () {
//   const storageTasks = localStorage.getItem("tasks");
//   tasks = storageTasks ? JSON.parse(storageTasks) : [];

//   const storangeTaskStatus = localStorage.getItem("taskStatus");
//   taskStatus = storangeTaskStatus ? JSON.parse(storangeTaskStatus) : [];
// };
// init();
window.onload = function () {
  //tasks = JSON.parse(localStorage.getItem("tasks"));
  const storageTasks = localStorage.getItem("tasks");
  tasks = storageTasks ? JSON.parse(storageTasks) : [];

  const storangeTaskStatus = localStorage.getItem("taskStatus");
  taskStatus = storangeTaskStatus ? JSON.parse(storangeTaskStatus) : [];

  // taskStatus = JSON.parse(localStorage.getItem("taskStatus"));
  for (let task = 0; task < tasks.length; task++) {
    // if (taskStatus[task] == true) {
    //   let item = this.parentElement;
    //   this.style.display = "none";
    //   let container = item.parentElement;
    //   container.style.backgroundColor = "green";
    //   container.append("Task Completed");
    // } else {
    count++;
    createListItemWithDiv(tasks[task]);
    var createAddButton = document.createElement("BUTTON");
    createDoneBtn(createAddButton);
    createAddButton.onclick = function () {
      let index = tasks.indexOf(tasks[task]);
      let item = this.parentElement;
      this.style.display = "none";
      let container = item.parentElement;
      container.style.backgroundColor = "green";
      container.append("Task Completed");
      taskStatus[index] = "true";
      localStorage.setItem("taskStatus", taskStatus);
    };
    //Creating remove button under div
    var createRemoveButton = document.createElement("button");

    //Creates a remove button in list item
    createRemoveBtn(createRemoveButton);
    createRemoveButton.onclick = function () {
      let item = this.parentElement.parentElement;
      item.style.display = "none";
      //   var index = self.id.match(/\d/g);
      //   index = index.join("");
      let index = tasks.indexOf(tasks[task]);
      tasks.splice(index, 1);
      taskStatus.splice(index, 1);
      console.log(tasks);
      console.log(taskStatus);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("taskStatus", JSON.stringify(taskStatus));
    };
  }
};

//store new item name in local arrays and also set the items in local storage
let storeItems = (str) => {
  tasks.push(str);
  taskStatus.push("false");
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("taskStatus", JSON.stringify(taskStatus));
};

//Create a list item with a div
let createListItemWithDiv = (inputVal) => {
  var list = document.getElementById("demo-list");

  //creating a list item
  var entry = document.createElement("li");

  //assigning class and id to list item
  entry.className = "block";
  entry.id = "block" + count;

  entry.appendChild(document.createTextNode(inputVal));
  list.appendChild(entry);

  //creating a div under list item
  var createDiv = document.createElement("div");
  document.getElementById("block" + count).appendChild(createDiv);

  //Assigning class and id to div item
  createDiv.className = "listButtons";
  createDiv.id = "listButtons" + count;
};

//Creates done button for the list item
let createDoneBtn = (createAddButton) => {
  //Creating add button under div

  createAddButton.innerHTML = "Done";
  document.getElementById("listButtons" + count).appendChild(createAddButton);

  //Assigning class and id to add button
  createAddButton.className = "btnAdd";
  createAddButton.id = "btnAdd" + count;
};

let createRemoveBtn = (createRemoveButton) => {
  createRemoveButton.innerHTML = "Remove";
  document
    .getElementById("listButtons" + count)
    .appendChild(createRemoveButton);

  //Assigning class and id to remove button
  createRemoveButton.className = "btnRemove";
  createRemoveButton.id = "btnRemove" + count;
};
let clickDoneBtn = (self, taskName) => {
  console.log("Hello done button");
  //   var index = self.id.match(/\d/g);
  //   index = index.join("");
  let index = tasks.indexOf(taskName);
  let item = self.parentElement;
  self.style.display = "none";
  let container = item.parentElement;
  container.style.backgroundColor = "green";
  container.append("Task Completed");
  taskStatus[index] = "true";
  localStorage.setItem("taskStatus", taskStatus);
  console.log(index);
};

let clickRemovebtn = (self, itemName) => {
  let item = self.parentElement.parentElement;
  item.style.display = "none";
  //   var index = self.id.match(/\d/g);
  //   index = index.join("");
  let index = tasks.indexOf(itemName);
  tasks.splice(index, 1);
  taskStatus.splice(index, 1);
  console.log(tasks);
  console.log(taskStatus);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("taskStatus", JSON.stringify(taskStatus));
  //   count = tasks.length;
  console.log(count);
};
