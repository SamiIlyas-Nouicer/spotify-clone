const express = require("express");
const {
	createTrack,
	getTracks,
	getTrackById,
	updateTrack,
	deleteTrack,
} = require("../controllers/trackController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createTrack);
router.get("/", authMiddleware, getTracks);
router.get("/:id", authMiddleware, getTrackById);
router.put("/:id", authMiddleware, updateTrack);
router.delete("/:id", authMiddleware, deleteTrack);

module.exports = router;
