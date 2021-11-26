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

const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, second] = restaurant.categories;
console.log(first, second);
[second, first] = [first, second];
console.log(first, second);

console.log("----OBJECT DESTRUCTURING----");

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: RestaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(RestaurantName, hours, tags);

restaurant.orderDelivery({
  time: "22:30",
  address: "cekndnd",
  mainIndex: 2,
  starterIndex: 2,
});

const arrr = [7, 8, 9];
const badNewArr = [1, 2, arrr[0], arrr[1], arrr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arrr];
console.log(newArr);
console.log(...newArr);
const newMenu = [...restaurant.mainMenu, "gocci"];
console.log(newMenu);
console.log(...newMenu);

const maninMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(menu);

const str = "jones";
const letters = [...str, "", "g."];
console.log(letters);

// const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { founder: "abc", ...restaurant };
console.log(newRestaurant);
