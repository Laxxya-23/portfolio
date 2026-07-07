require("dotenv").config();
const contactRoutes = require("./routes/contact");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//middleware

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;



connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});