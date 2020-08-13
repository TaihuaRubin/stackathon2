const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
