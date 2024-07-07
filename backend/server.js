const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const playlistRoutes = require("./routes/playlistRoutes");
const trackRoutes = require("./routes/trackRoutes");
const albumRoutes = require("./routes/albumRoutes");
const artistRoutes = require("./routes/artistRoutes");
const authRoutes = require("./routes/authRoutes"); // Add this line

const app = express();
app.use(bodyParser.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api/tracks", trackRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/auth", authRoutes); // Add this line

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
