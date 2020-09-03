// const fs = require("fs");
// fs.readFile("./lesson111.js", (error, data) => {
//   if (!error) {
//     console.log(data.toString());
//   } else {
//     console.log(error);
//   }
// });

const axios = require("axios").default;

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
  console.log(data.data);
});

console.log(axios);
