"use strict";

const onMyBirthday = (isFriendSick) => {
  return new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        if (!isFriendSick) {
          resolve(1);
        } else {
          reject(0);
        }
      });
    },

    2000
  );
};

onMyBirthday(false)
  .then((result) => {
    console.log(`I have ${result} cakes`);
  })
  .catch((result) => {
    console.log(`I have ${result} cakes`);
  });
