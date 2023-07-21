const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlistController");

router.get("/playlist", playlistController.getAllPlaylists);
router.get("/playlist/:title", playlistController.getByTitle);

module.exports = router;
