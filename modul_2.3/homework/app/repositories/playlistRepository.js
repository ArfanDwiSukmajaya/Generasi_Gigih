const MyPlatlisy = require("../models/playlist");

const getAllPlaylists = () => {
  return MyPlatlisy.playlist;
};

const getByTitle = (title) => {
  return MyPlatlisy.playlist.find((item) => item.title === title);
};

module.exports = {
  getAllPlaylists,
  getByTitle,
};
