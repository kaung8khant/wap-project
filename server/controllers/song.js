const Song = require("../models/song");
const path = require("path");

const getSongs = (req, res, next) => {
  let list = Song.fetch(req.query.s ? req.query.s : null);
  list.map((item) => {
    item.cover = item.cover
      ? path.resolve(__dirname, "..", "assets", "img", item.cover)
      : "default";
    return item;
  });
  res.status(200).json(list);
};
const getSongByID = (req, res, next) => {
  res.status(200).json(Song.fetchByID(req.params.id));
};

module.exports = {
  getSongs,
  getSongByID,
};
