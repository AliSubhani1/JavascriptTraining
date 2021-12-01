"use strict";

const enterNumber = (number) => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(window.prompt("Enter number 1-6"));
    const randomNumber = Math.floor(Math.random() * 7);
    if (isNaN(userNumber)) {
      reject("Wrong input type");
    } else if (userNumber < 1 || userNumber > 6) {
      reject("Incorrect number entered");
    } else if (userNumber != randomNumber) {
      resolve("Wrong guess");
    } else {
      reject("Correct guess!");
    }
  });
};

const start = () => {
  enterNumber()
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
};
start();
