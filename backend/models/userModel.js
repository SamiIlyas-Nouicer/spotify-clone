const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	userId: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	address: {
		street: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		country: { type: String, required: true },
	},
	plan: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	signupDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
