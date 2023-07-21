const MyPlaylist = require("../models/playlist");

const getAllPlaylists = () => {
  return MyPlaylist.playlist;
};

const getByTitle = (title) => {
  return MyPlaylist.playlist.find((item) => item.title === title);
};

const createPlaylist = (title, artists, url) => {
  MyPlaylist.playlist.push({ title, artists, url, playCount: 0 });
};

// Get the list of songs sorted by most played
const getMostPlayed = () => {
  return MyPlaylist.playlist.slice().sort((a, b) => b.playCount - a.playCount);
};

module.exports = {
  getAllPlaylists,
  getByTitle,
  getMostPlayed,
  createPlaylist,
};
