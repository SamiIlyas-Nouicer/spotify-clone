const express = require("express");
const {
	createArtist,
	getArtists,
	getArtistById,
	updateArtist,
	deleteArtist,
} = require("../controllers/artistController");

const router = express.Router();

router.post("/", createArtist);
router.get("/", getArtists);
router.get("/:id", getArtistById);
router.put("/:id", updateArtist);
router.delete("/:id", deleteArtist);

module.exports = router;
