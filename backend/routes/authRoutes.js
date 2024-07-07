const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/userModel");

const router = express.Router();

// User registration
router.post(
	"/register",
	[
		check("email", "Please include a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters",
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			userId,
			firstName,
			lastName,
			email,
			password,
			address,
			plan,
			phoneNumber,
		} = req.body;

		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ msg: "User already exists" });
			}

			user = new User({
				userId,
				firstName,
				lastName,
				email,
				password,
				address,
				plan,
				phoneNumber,
				signupDate: new Date(),
			});

			// Hash the password before saving
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			// Save the user to the database
			await user.save();

			// Create JWT payload
			const payload = {
				user: {
					id: user.id,
				},
			};

			// Sign the JWT
			jwt.sign(
				payload,
				"your_jwt_secret", // Replace with your JWT secret key
				{ expiresIn: "1h" },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				},
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	},
);

module.exports = router;
