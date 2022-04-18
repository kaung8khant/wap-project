const express = require("express");
const PlaylistController = require("../controllers/playlist");

const router = express.Router();

router.get("/", PlaylistController.getPlaylists);

router.put("/songs/:sid", PlaylistController.update);

router.delete("/songs/:sid", PlaylistController.deleteSong);

module.exports = router;
