const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Artist schema
const artistSchema = new Schema({
	artistId: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	description: { type: String, required: true },
});

// Artist model
const Artist = model("Artist", artistSchema);

module.exports = Artist;
