const express = require("express");

const app = express();

app.get("/nama", (request, respond, next) => {
  respond.send("<h1>ini adalah app web saya</h1>");
});

const port = 3000;

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
