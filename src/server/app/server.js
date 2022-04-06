const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.send("ok");
});

app.listen(9999, () => {
  console.log("appi up and running ");
});
