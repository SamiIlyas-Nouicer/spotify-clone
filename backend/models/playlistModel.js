const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Playlist schema
const playlistSchema = new Schema({
	playlistId: { type: String, required: true },
	ownerId: { type: String, required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	tracks: [{ type: Schema.Types.ObjectId, ref: "Track" }],
});

// Playlist model
const Playlist = model("Playlist", playlistSchema);

module.exports = Playlist;
