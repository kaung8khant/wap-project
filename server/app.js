const express = require("express");

const playlistRouter = require("./routes/playlist");
const songRouter = require("./routes/song");

const cors = require("cors");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/playlists", playlistRouter);
app.use("/songs", songRouter);

//Error Handler
app.use((req, res, next) => {
  res.status(404).json({ error: req.url + " API not supported" });
});

app.use((err, req, res, next) => {
  console.log(err);
  if (err.message === "NOT FOUND") {
    res.status(404).json({ error: err.message });
  } else if (err.message === "Already exist") {
    res.status(500).json({ error: "The song is already exist in playlist!" });
  } else {
    res.status(500).json({ error: "Server error!" });
  }
});

app.listen(3000, () => console.log("running on 3000..."));
