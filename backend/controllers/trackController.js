const Track = require("../models/trackModel");

// Create Track
exports.createTrack = async (req, res) => {
	try {
		const newTrack = new Track(req.body);
		const savedTrack = await newTrack.save();
		res.status(201).json(savedTrack);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Read Tracks
exports.getTracks = async (req, res) => {
	try {
		const tracks = await Track.find();
		res.status(200).json(tracks);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Read Single Track
exports.getTrackById = async (req, res) => {
	try {
		const track = await Track.findById(req.params.id);
		if (!track) return res.status(404).json({ message: "Track not found" });
		res.status(200).json(track);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update Track
exports.updateTrack = async (req, res) => {
	try {
		const updatedTrack = await Track.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
		);
		if (!updatedTrack)
			return res.status(404).json({ message: "Track not found" });
		res.status(200).json(updatedTrack);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete Track
exports.deleteTrack = async (req, res) => {
	try {
		const deletedTrack = await Track.findByIdAndDelete(req.params.id);
		if (!deletedTrack)
			return res.status(404).json({ message: "Track not found" });
		res.status(200).json({ message: "Track deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
