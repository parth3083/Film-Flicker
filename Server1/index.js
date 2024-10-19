const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/dbConnect");
const userRegister = require("./routes/userRegistration");
const movieRecommendation = require("./routes/movieRecommendation");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
}));

// Database Connection
connectDb();

// Routes
app.get("/", (req, res) => {
  res.send("Backend started working");
});

app.post("/user-register", userRegister);
app.use("/api", movieRecommendation);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
