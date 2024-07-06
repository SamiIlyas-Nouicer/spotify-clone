const Artist = require("../models/artistModel");

// Create Artist
exports.createArtist = async (req, res) => {
	try {
		const newArtist = new Artist(req.body);
		const savedArtist = await newArtist.save();
		res.status(201).json(savedArtist);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Read Artists
exports.getArtists = async (req, res) => {
	try {
		const artists = await Artist.find();
		res.status(200).json(artists);
	} catch (error) {
		res.status500.json({ error: error.message });
	}
};

// Read Single Artist
exports.getArtistById = async (req, res) => {
	try {
		const artist = await Artist.findById(req.params.id);
		if (!artist) return res.status(404).json({ message: "Artist not found" });
		res.status(200).json(artist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update Artist
exports.updateArtist = async (req, res) => {
	try {
		const updatedArtist = await Artist.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
		);
		if (!updatedArtist)
			return res.status(404).json({ message: "Artist not found" });
		res.status(200).json(updatedArtist);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete Artist
exports.deleteArtist = async (req, res) => {
	try {
		const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
		if (!deletedArtist)
			return res.status(404).json({ message: "Artist not found" });
		res.status(200).json({ message: "Artist deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
