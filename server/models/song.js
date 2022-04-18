let songs = [
  {
    id: "0.123125334",
    title: "Bohemian Rhapsody (Queen)",
    release_date: "1975-10-31",
    cover: "bohemian.png",
    file: "https://drive.google.com/file/d/1dHbIQbrLYqxnhjxt4utOC2doTGuMIxIu/view?usp=sharing",
  },
  {
    id: "0.234234234",
    title: "Homocide (Logic ft Eminem)",
    release_date: "2019-5-3",
    cover: "homocide.png",
    file: "https://drive.google.com/file/d/1ZSLdChk6suf13h8ohI0DgAXCs-XNI2k_/view?usp=sharing",
  },
  {
    id: "0.344511231",
    title: "I won't give up (Jason Mraz)",
    release_date: "2012-10-19",
    cover: "i-wont-give-up.png",
    file: "https://drive.google.com/file/d/1TtFQ7ynma43NMonUEDPqARpOgqCayuFB/view?usp=sharing",
  },
  {
    id: "0.452342342",
    title: "Love of my life (Queen)",
    release_date: "1975-11-21",
    cover: "love-of-my-life.png",
    file: "https://drive.google.com/file/d/1UTNPD6inCJrc6WiMbPBQ9kSdJs2Uc63v/view?usp=sharing",
  },
  {
    id: "0.534532342",
    title: "Rap God (Enimen)",
    release_date: "2013-10-14",
    cover: "rap-god.png",
    file: "https://drive.google.com/file/d/19CkRz7GXJMg21QOsadzbHMf4UMtGV4zj/view?usp=sharing",
  },
  {
    id: "0.534532342",
    title: "When I grow up (NF)",
    release_date: "2019-7-27",
    cover: "when-i-grow-up.png",
    file: "https://drive.google.com/file/d/1qs1cRtLC7zxq-opgeKoEDe1aiOXYoUS0/view?usp=sharing",
  },
];

class Song {
  constructor(title, date, cover, id = null) {
    this.id = id;
    this.title = title;
    this.release_date = date;
    this.cover = cover;
  }

  static fetch() {
    return songs;
  }

  static fetchByID(songId) {
    const index = songs.findIndex((item) => item.id === songId);
    if (index < 0) throw new Error("Not Found");
    return songs[index];
  }
}

module.exports = Song;
