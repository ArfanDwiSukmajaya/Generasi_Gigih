const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./app/routes/playlistRoute");

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
