const Song = require("../models/song");

const getSongs = (req, res, next) => {
  res.status(200).json(Song.fetch());
};
const getSongByID = (req, res, next) => {
  res.status(200).json(Song.fetchByID(req.params.id));
};

module.exports = {
  getSongs,
  getSongByID,
};
