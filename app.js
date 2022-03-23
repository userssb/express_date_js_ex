const express = require("express");
app = express();
let dt = new Date();
// let dat = `${dt.getDate()} - ${dt.getMonth()} - ${dt.getFullYear()}`;
app.get("/", (request, response) => {
  response.send(`${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()}`);
});
app.listen(3000);
module.exports = app;
