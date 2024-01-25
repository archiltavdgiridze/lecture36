// let fruits = [
//   "apple",
//   "pear",
//   "orange",
//   "banana",
//   "peach",
//   "watermelon",
//   "grape",
// ];

// .push()
// გამოიყენება მასივში ერთი ან მეტი ელემენტის დასამატებლად.
// იგი ცვლის მასივს და ამატებს ახალ ელემენტებს

// fruits.push("kiwi", "mango");

// .pop()
// ეს მეთოდი გამოიყენება მასივში ბოლო ელემენტის წასაშლელად

// fruits.pop();

// console.log(fruits);

let fruits = [
  "apple",
  "banana",
  "cherry",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "ice-cream bean",
  "jackfruit",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
];
// console.log(fruits.length);

// for (let i = 0; i < fruits.length - 5; i++) {
//   fruits.pop();
// }

// console.log(fruits);

// .shift()
// ეს მეთოდი შლის პირველ ელემენტს მასივიდან და გადააქვს ყველა დარჩენილი ელემენტი ქვედა ინდექსზე
// fruits.shift();

// .unshift()
// ეს მეთოდი ამატებს ერთ ან მეტ ელემენტს მასივის დასაწყისში და არსებულ ელემენტებს ემატებათ ინდექსი
// fruits.unshift("plane");

// for (let i = 0; i < fruits.length; i++) {
//   // document.write(`<p>${fruits[i]}</p>`);
// }

// document.write(`<p>${fruits.join(" ====== ")}</p>`);

// // მრავალგანზომილებიანი მასივი
// // ეს არის მასივი, რომელიც შეიცავს სხვა მასივებს, როგორც მის ელემენტებს.

// let matrix = [
//   [1, 2, [3, 3.14]], // index = 0
//   [4, 5, 6], // index = 1
//   [7, 8, 9], // index = 2
// ];

// console.log(matrix[0][2][1]);

// let numbers = [
//   4, 1, 4, 1, 6, 32, 4, 512, 6, 9, 2, 2, 7, 8, 2, 5, 32, 1, 3, 4, 5, 7, 7, 8, 9,
//   0,
// ];

// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(`nummm
//   ${num.sort(function () {
//     return 0.5 - Math.random();
//   })}`);

// console.log(fruits.sort());

// console.log(
//   numbers.sort(function (a, b) {
//     return a - b;
//   })
// );

// OBJECTS
let car = {
  brand: "BMW",
  model: "X6",
  date: 2009,
  price: 40000,
  color: "Black",
  engine: 4.2,
  fullInfo: function() {
    return (
      "ამ მანქანის ბრენდი არის " +
      this.brand +
      " მოდელი არის " +
      this.model +
      " ხოლო გამოშვების თარიღი არის " +
      this.date
    );
  },
};

console.log(car.date, car.price, car.color);

document.getElementById("brand").innerHTML = car.brand;
document.getElementById("model").innerHTML = car.model;
document.getElementById("date").innerHTML = car.date;
document.getElementById("fullInfo").innerHTML = car.fullInfo();
