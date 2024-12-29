import PLAYLIST from "../Models/playlistSchema.js";

const getPlaylists = async (req, res) => {
  try {
    const userPlaylists = await PLAYLIST.find({
      'owner.email':  req.body.owner.email,
    });
    res.status(200).json(userPlaylists);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPlaylist = async (req, res) => {
  try {
    await PLAYLIST.create({
      playlist_name: req.body.playlist_name,
      songs: req.body.songs,
      owner: req.body.owner,
    });
    res.status(200).json({ message: "playlist created" });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getOnePlaylist = async (req, res) => {
  const { playlistId } = req.params;
  try {
    const playlist = await PLAYLIST.findById(playlistId);
    res
      .status(200)
      .json({ ...playlist._doc, owner: playlist.owner.get("name") });
  } catch (error) {
    res.status(400).json(error);
  }
};

export {
  createPlaylist,
  getPlaylists,
  getOnePlaylist,
};
