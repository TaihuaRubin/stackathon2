const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// static files
app.use(express.static("src"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
