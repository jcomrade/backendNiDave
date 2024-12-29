import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const playlistSchema = new Schema(
  {
    playlist_name: {
      type: String,
      required: true,
      minlength: [1, 'Minimum Playlist name length is 1 characters'],
    },
    songs: {
      type: Array,
      required: true,
    },
    owner: {
      type: Map,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("playlist", playlistSchema);
