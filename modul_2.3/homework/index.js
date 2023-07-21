const express = require("express");
const bodyParser = require("body-parser");
const router = require("./app/routes/playlistRoute");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
