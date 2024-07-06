const User = require("../models/userModel");

// Create User
exports.createUser = async (req, res) => {
	try {
		const newUser = new User(req.body);
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Read Users
exports.getUsers = async (req, res) => {
	try {
		const users = await User.find().populate(
			"userPlaylists userCollection.albums userCollection.tracks followingArtists followingPlaylists",
		);
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Read Single User
exports.getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).populate(
			"userPlaylists userCollection.albums userCollection.tracks followingArtists followingPlaylists",
		);
		if (!user) return res.status(404).json({ message: "User not found" });
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update User
exports.updateUser = async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!updatedUser)
			return res.status(404).json({ message: "User not found" });
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete User
exports.deleteUser = async (req, res) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		if (!deletedUser)
			return res.status(404).json({ message: "User not found" });
		res.status(200).json({ message: "User deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
