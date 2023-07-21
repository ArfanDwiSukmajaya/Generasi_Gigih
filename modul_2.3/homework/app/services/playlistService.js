const repositoryPlaylist = require("../repositories/playlistRepository");

const getAllPlaylists = () => {
  return repositoryPlaylist.getAllPlaylists();
};

const getByTitle = (title) => {
  return repositoryPlaylist.getByTitle(title);
};

const createPlaylist = (title, artists, url) => {
  repositoryPlaylist.createPlaylist(title, artists, url);
};

// Increase the play count for a specific track
const increasePlayCount = (title) => {
  const playlist = getByTitle(title);
  if (playlist) {
    playlist.playCount++;
    return true;
  }
  return false;
};

// Get the list of songs sorted by most played
const getMostPlayedSongs = () => {
  return repositoryPlaylist.getMostPlayed();
};

module.exports = {
  getAllPlaylists,
  getByTitle,
  increasePlayCount,
  getMostPlayedSongs,
  createPlaylist,
};
