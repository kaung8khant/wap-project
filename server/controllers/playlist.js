const Playlist = require("../models/playlist");
const Song = require("../models/song");
const path = require("path");

const getPlaylists = (req, res, next) => {
  let list = Playlist.fetch();
  if (list.length > 0) {
    list.map((item) => {
      let song = Song.fetchByID(item.song_id);
      item["title"] = song.title;
      item["released_date"] = song.release_date;
      item["cover"] = song.cover
        ? path.join(__dirname, "assets", "img", song.cover)
        : "default";
      item["file"] = song.file;
      return item;
    });
  }
  res.status(200).json(list);
};

const update = (req, res, next) => {
  res.status(200).json(new Playlist(req.params.sid).addToList(req.params.sid));
};

const deleteSong = (req, res, next) => {
  Playlist.delete(req.params.sid);
  res.status(200).json({ message: "Success" });
};

module.exports = {
  getPlaylists,
  update,
  deleteSong,
};
