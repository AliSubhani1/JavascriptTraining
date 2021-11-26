const restaurant = {
  name: "Classico Ilatiano",
  location: "Via Angelo Tevanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`your paste with ${ing1},${ing2},${ing3}`);
  },
};

const { sat, ...others } = restaurant.openingHours;
console.log(others);

const add = function (...numbers) {
  let sum = 0;
  for (number in numbers) {
    sum += numbers[number];
  }
  console.log(sum);
};
add(2, 3);
add(3, 4, 5, 6, 7, 7);
add(1, 2, 3, 4, 5, 6, 7, 7);
