const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlistController");

router.get("/playlist/most-played", playlistController.getMostPlayedSongs);
router.post("/playlist", playlistController.createPlaylist);
router.get("/playlist/:title", playlistController.getByTitle);
router.get("/playlist", playlistController.getAllPlaylists);

module.exports = router;
