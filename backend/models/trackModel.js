const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Track schema
const trackSchema = new Schema({
	trackId: { type: String, required: true, unique: true },
	title: { type: String, required: true },
	genre: { type: String, required: true },
	length: { type: Number, required: true },
	artistID: { type: Schema.Types.ObjectId, ref: "Artist" },
});

// Track model
const Track = model("Track", trackSchema);

module.exports = Track;
