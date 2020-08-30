//Anonymous function atau Arrow function

//function biasa
// function PrintHello() {
//   console.log(this);
//   console.log("Hello semua");
// }
// PrintHello();

//arrow function
// const PrintHello2 = () => {
//   console.log("Hello semua lagi");
// };

// PrintHello2();
console.log("parent", this);
const showTeks = (teks) => {
  console.log("child", this);
  console.log(teks);
};
showTeks("nama saya alen");
