require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Frontend Files
app.use(express.static(path.join(__dirname, "../frontend")));

// API Routes
app.use("/api/contact", contactRoutes);

// Serve index.html for all frontend routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});