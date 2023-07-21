const playlistService = require("../services/playlistService");
const express = require("express");
const app = express();
app.use(express.json());

const getAllPlaylists = (req, res) => {
  try {
    const playlists = playlistService.getAllPlaylists();
    res.status(200).json({ message: "Success", data: playlists });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByTitle = (req, res) => {
  try {
    const { title } = req.params;
    const playlist = playlistService.getByTitle(title);
    if (playlist) {
      res.status(200).json({ message: "Success", data: playlist });
    } else {
      res.status(404).json({ message: "Playlist not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPlaylists,
  getByTitle,
};
