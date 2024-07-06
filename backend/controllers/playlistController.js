const Playlist = require("../models/playlistModel");

// Create Playlist
exports.createPlaylist = async (req, res) => {
	try {
		const newPlaylist = new Playlist(req.body);
		const savedPlaylist = await newPlaylist.save();
		res.status(201).json(savedPlaylist);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Read Playlists
exports.getPlaylists = async (req, res) => {
	try {
		const playlists = await Playlist.find().populate("tracks");
		res.status(200).json(playlists);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Read Single Playlist
exports.getPlaylistById = async (req, res) => {
	try {
		const playlist = await Playlist.findById(req.params.id).populate("tracks");
		if (!playlist)
			return res.status(404).json({ message: "Playlist not found" });
		res.status(200).json(playlist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update Playlist
exports.updatePlaylist = async (req, res) => {
	try {
		const updatedPlaylist = await Playlist.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
		);
		if (!updatedPlaylist)
			return res.status(404).json({ message: "Playlist not found" });
		res.status(200).json(updatedPlaylist);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete Playlist
exports.deletePlaylist = async (req, res) => {
	try {
		const deletedPlaylist = await Playlist.findByIdAndDelete(req.params.id);
		if (!deletedPlaylist)
			return res.status(404).json({ message: "Playlist not found" });
		res.status(200).json({ message: "Playlist deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
