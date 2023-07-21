const playlistService = require("../services/playlistService");
const express = require("express");
const app = express();
app.use(express.json());

const createPlaylist = (req, res) => {
  try {
    const { title, artists, url } = req.body;
    const song = { title, artists, url };
    playlistService.createPlaylist(song);
    res.status(201).json({ message: "Success", data: req.body });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
    const title = req.params.title;
    const playlist = playlistService.getByTitle(title);
    const success = playlistService.increasePlayCount(title);
    if (playlist && success) {
      res.status(200).json({ message: "Success", data: playlist });
    } else {
      res.status(404).json({ message: "Playlist not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get the list of songs sorted by most played
const getMostPlayedSongs = (req, res) => {
  try {
    const playlists = playlistService.getMostPlayedSongs();
    res.status(200).json({ message: "Success", data: playlists });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

module.exports = {
  getAllPlaylists,
  getByTitle,
  getMostPlayedSongs,
  createPlaylist,
};
