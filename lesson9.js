//Method pada Array

// listAngka = [1, 2, 3, 4, 5];

// listAngka.push(10);

// console.log(listAngka);

// forEach, map, filter, dan reduce

// example forEach

// const listAngka = [1, 2, 3, 4, 5];

// function diPanggil(value) {
//   console.log(value);
// }

// listAngka.forEach(diPanggil);

// example for map

// const listAngka = [1, 2, 3, 4, 5];

// const listbaru = listAngka.map((value) => {
//   return 2 * value;
// });

// console.log(listbaru);

// example filter

// const listAngka = [1, 2, 3, 4, 5];

// const listBaru = listAngka.filter((value) => {
//   if (value > 2) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(listBaru);

// const listAngka = [1, 2, 3, 4, 5];

// const sumList = listAngka.reduce((sum, value) => {
//   return sum + value;
// }, 0);

// console.log(sumList);
// const listString = ["saya", "sedang", "ngoding", "santuy"];

// const concatString = listString.reduce((conString, value) => {
//   return `${conString} ${value}`;
// }, "");

// console.log(concatString);

const listString = ["saya", "sedang", "ngoding", "santuy"];

const concatString = listString.reduce(
  (conString, value) => `${conString} ${value}`,
  ""
);

console.log(concatString);
