"use strict";

let p = new Promise((resolve, reject) => {
  let a = Math.floor(Math.random() * 3);
  if (a == 2) {
    resolve("PASSED");
  } else {
    reject("FAILED");
  }
});

p.then((message) => {
  console.log(`promised has been completed: ${message}`);
}).catch((message) => {
  console.log(`promise has not been completed ${message}`);
});
