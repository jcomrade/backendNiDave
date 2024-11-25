const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    playlist_name: {
      type: String,
      required: true,
    },
    songs: {
      type: Array,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("playlist", playlistSchema);
