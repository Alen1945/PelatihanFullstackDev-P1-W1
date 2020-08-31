// asyncrounus pada javascript

// setTimeout(() => {
//   console.log("saya sedang ngoding");
// }, 500);

// console.log("kalimat kedua");

// callback

// function showMyName() {
//   console.log("my name is khan");
// }
// setTimeout(() => {
//   console.log("saya sedang ngoding");
//   setTimeout(() => {
//     console.log("kalimat 2");
//     setTimeout(() => {
//       console.log("kalimat 3");
//     }, 100);
//   }, 100);
// }, 500);

// Promise

// const promiseOne = new Promise((resolve, reject) => {
//   if (2 !== 2) {
//     resolve("benar sekali");
//   } else {
//     reject("salah");
//   }
// });

// promiseOne
//   .then((dataText) => {
//     console.log(dataText);
//     console.log("text kedua");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async dan await
const promiseOne = new Promise((resolve, reject) => {
  if (1 == 2) {
    resolve("promise 1");
  } else {
    reject("gagal promise 1");
  }
});
const promisetwo = new Promise((resolve, reject) => {
  if (2 == 2) {
    resolve("promise 2");
  } else {
    reject("gagal promise 2");
  }
});

// promiseOne.then((data) => {
//   console.log(data);
//   console.log(`${data} wkwkwkwkwk`);
//   promisetwo.then((data) => console.log(data));
// });

async function penangananPromise() {
  try {
    const data1 = await promiseOne;
    console.log(data1);
    console.log(`${data1} wkwkwkwkw`);
    const data2 = await promisetwo;
    console.log(data2);
  } catch (err) {
    console.log(err);
  }
}
penangananPromise();
