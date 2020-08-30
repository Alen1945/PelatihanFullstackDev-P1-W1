// cara lama
// let list1 = [1, 2, 3, 4];
// const list2 = [5, 6, 7, 8];

// for (let i = 0; i < list2.length; i++) {
//   list1.push(list2[i]);
// }
// console.log(list1);

// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];

// const list = [...array1, ...array2];
// console.log(list);

const object1 = {
  nama: "alen",
  umur: 23,
};
const object2 = {
  nama: "dwi",
  umur: 40,
  tamatan: "SMA",
  hoby: "makan,tidur",
};

const objectBaru = {
  ...object2,
  ...object1,
};

console.log(objectBaru);
