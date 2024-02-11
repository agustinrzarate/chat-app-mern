const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Worldd");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
