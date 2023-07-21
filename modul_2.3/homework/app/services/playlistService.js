const repositoryPlaylist = require("../repositories/playlistRepository");

const getAllPlaylists = () => {
  return repositoryPlaylist.getAllPlaylists();
};

const getByTitle = (title) => {
  return repositoryPlaylist.getByTitle(title);
};

module.exports = {
  getAllPlaylists,
  getByTitle,
};
