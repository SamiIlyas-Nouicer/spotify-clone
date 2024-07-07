const express = require("express");
const {
	createPlaylist,
	getPlaylists,
	getPlaylistById,
	updatePlaylist,
	deletePlaylist,
} = require("../controllers/playlistController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createPlaylist);
router.get("/", authMiddleware, getPlaylists);
router.get("/:id", authMiddleware, getPlaylistById);
router.put("/:id", authMiddleware, updatePlaylist);
router.delete("/:id", authMiddleware, deletePlaylist);

module.exports = router;
