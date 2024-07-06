const express = require("express");
const {
	createTrack,
	getTracks,
	getTrackById,
	updateTrack,
	deleteTrack,
} = require("../controllers/trackController");

const router = express.Router();

router.post("/", createTrack);
router.get("/", getTracks);
router.get("/:id", getTrackById);
router.put("/:id", updateTrack);
router.delete("/:id", deleteTrack);

module.exports = router;
