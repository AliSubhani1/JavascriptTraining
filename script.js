"use strict";

let add = (firstNumber, secondNumber) => {
  return new Promise((resolve, reject) => {
    let sum = firstNumber + secondNumber;
    if (sum) {
      resolve(sum);
    } else {
      reject(Error("sum not calculated"));
    }
  });
};
let minus = (firstNumber, secondNumber) => {
  return new Promise((resolve, reject) => {
    let subtract = firstNumber - secondNumber;
    if (subtract) {
      resolve(subtract);
    } else {
      reject(Error("Numbers not subtracted"));
    }
  });
};
add(2, 5)
  .then((result) => {
    return add(result, 50);
  })
  .then((result) => {
    return add(result, 50);
  })
  .then((result) => {
    return add(result, 50);
  })
  .then((result) => {
    return add(result, 50);
  })
  .then((result) => {
    return minus(result, 10);
    //return minus(result, undefined);
  })
  .catch((message) => {
    console.log(message);
  });
