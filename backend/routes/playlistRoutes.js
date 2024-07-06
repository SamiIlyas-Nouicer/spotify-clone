const express = require("express");
const {
	createPlaylist,
	getPlaylists,
	getPlaylistById,
	updatePlaylist,
	deletePlaylist,
} = require("../controllers/playlistController");

const router = express.Router();

router.post("/", createPlaylist);
router.get("/", getPlaylists);
router.get("/:id", getPlaylistById);
router.put("/:id", updatePlaylist);
router.delete("/:id", deletePlaylist);

module.exports = router;
