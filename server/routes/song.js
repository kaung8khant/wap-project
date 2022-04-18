const express = require("express");
const SongController = require("../controllers/song");

const router = express.Router();

router.get("/", SongController.getSongs);

router.get("/:id", SongController.getSongByID);

module.exports = router;
