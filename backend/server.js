const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

// Import routes
const userRoutes = require("./routes/userRoutes");
const playlistRoutes = require("./routes/playlistRoutes");
const trackRoutes = require("./routes/trackRoutes");
const albumRoutes = require("./routes/albumRoutes");
const artistRoutes = require("./routes/artistRoutes");

// Initialize app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to DB
connectDB();

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api/tracks", trackRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/artists", artistRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
