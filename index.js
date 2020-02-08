const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");

app.get("/", (request, response) => {
  console.log("Message from .get at 4000/");
  response.send('<h1>"Server active, homework second try"</h1>');
});

app.listen(port, () => {
  console.log(`Server has started, listening on: ${port}`);
});
