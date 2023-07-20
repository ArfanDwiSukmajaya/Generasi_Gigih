const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let playlist = [
  {
    title: "Lemon Tree",
    artists: ["Fools Garden", "Willi Freibier"],
    url: "link spotify lemon tree",
  },
];

// 1. Add song to your playlist, Attributes: Title, Artists (can have multiple artist), URL (from spotify URL)
app.post("/playlist", (req, res) => {
  const { title, artists, url } = req.body;
  const song = { title, artists, url };
  const songExist = playlist.find((song) => song.title === title);
  if (songExist) {
    res.status(400).json({ message: "Song already exist" });
  }
  playlist.push(song);
  res.status(201).json({ message: "Song added to playlist", data: song });
});

// 2. Play song from your playlist
app.get("/playlist/:title", (req, res) => {
  const { title } = req.params;
  const song = playlist.find((song) => song.title === title);
  if (song) {
    res.status(200).json({ message: "Song found", data: song.url });
  } else {
    res.status(404).json({ message: "Song not found" });
  }
});

// 3. Get List of songs from your playlist
app.get("/playlist", (req, res) => {
  res.status(200).json({ message: "success", data: playlist });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
