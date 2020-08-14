const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// static files

// static files
app.use(express.static(path.join(__dirname, "./src")));

app.get("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "./src/index.html"));
});

app.listen(process.env.PORT || port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
