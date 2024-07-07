const express = require("express");
const {
	createArtist,
	getArtists,
	getArtistById,
	updateArtist,
	deleteArtist,
} = require("../controllers/artistController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createArtist);
router.get("/", authMiddleware, getArtists);
router.get("/:id", authMiddleware, getArtistById);
router.put("/:id", authMiddleware, updateArtist);
router.delete("/:id", authMiddleware, deleteArtist);

module.exports = router;
