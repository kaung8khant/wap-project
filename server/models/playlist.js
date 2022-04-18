let playlists = [
  {
    id: "123123121",
    song_id: "0.123125334",
  },
];

class Playlist {
  constructor(song_id, id = null) {
    this.id = id;
    this.song_id = song_id;
  }

  addToList(sid) {
    const index = playlists.findIndex((item) => item.song_id === sid);
    if (index > -1) throw new Error("Already exist");
    this.id = Math.random().toString();
    playlists.push(this);
    return this;
  }

  static fetch() {
    return playlists;
  }

  static delete(sid) {
    const index = playlists.findIndex((item) => item.song_id === sid);
    if (index < 0) throw new Error("Not Found");
    playlists = playlists.filter((item) => item.song_id !== sid);
  }
}

module.exports = Playlist;
