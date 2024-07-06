const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Album schema
const albumSchema = new Schema({
	albumId: { type: String, required: true, unique: true },
	title: { type: String, required: true },
	genre: { type: String, required: true },
	artistID: { type: Schema.Types.ObjectId, ref: "Artist" },
});

// Album model
const Album = model("Album", albumSchema);

module.exports = Album;
