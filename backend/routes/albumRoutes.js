const express = require("express");
const {
	createAlbum,
	getAlbums,
	getAlbumById,
	updateAlbum,
	deleteAlbum,
} = require("../controllers/albumController");

const router = express.Router();

router.post("/", createAlbum);
router.get("/", getAlbums);
router.get("/:id", getAlbumById);
router.put("/:id", updateAlbum);
router.delete("/:id", deleteAlbum);

module.exports = router;
