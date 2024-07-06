const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// User schema
const userSchema = new Schema({
	userId: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	plan: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	phoneNumber: { type: String, required: true },
	signupDate: { type: Date, required: true },
	userPlaylists: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
	userCollection: {
		albums: [{ type: Schema.Types.ObjectId, ref: "Album" }],
		tracks: [{ type: Schema.Types.ObjectId, ref: "Track" }],
	},
	followingArtists: [{ type: Schema.Types.ObjectId, ref: "Artist" }],
	followingPlaylists: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
});

// User model
const User = model("User", userSchema);

module.exports = User;
