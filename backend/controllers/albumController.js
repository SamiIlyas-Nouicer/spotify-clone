const Album = require("../models/albumModel");

// Create Album
exports.createAlbum = async (req, res) => {
	try {
		const newAlbum = new Album(req.body);
		const savedAlbum = await newAlbum.save();
		res.status(201).json(savedAlbum);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Read Albums
exports.getAlbums = async (req, res) => {
	try {
		const albums = await Album.find();
		res.status(200).json(albums);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Read Single Album
exports.getAlbumById = async (req, res) => {
	try {
		const album = await Album.findById(req.params.id);
		if (!album) return res.status(404).json({ message: "Album not found" });
		res.status(200).json(album);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update Album
exports.updateAlbum = async (req, res) => {
	try {
		const updatedAlbum = await Album.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
		);
		if (!updatedAlbum)
			return res.status(404).json({ message: "Album not found" });
		res.status(200).json(updatedAlbum);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete Album
exports.deleteAlbum = async (req, res) => {
	try {
		const deletedAlbum = await Album.findByIdAndDelete(req.params.id);
		if (!deletedAlbum)
			return res.status(404).json({ message: "Album not found" });
		res.status(200).json({ message: "Album deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
