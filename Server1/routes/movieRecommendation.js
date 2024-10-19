const express = require("express");
const { spawn } = require("child_process");
const MovieRecommendationModel = require("../models/MovieRecommendation");
const UserModel = require("../models/user");

const router = express.Router();

router.post("/get-recommendations", async (req, res) => {
  try {
    const { email, movieName } = req.body;

    
    const isUserAlreadyExist = await UserModel.findOne({ userEmail: email });
    if (!isUserAlreadyExist) {
      return res.status(404).json({ error: "User not found" });
    }

    
    const pythonProcess = spawn("python", ["./utils/main.py", movieName]);

    let recommendedMovies = [];

    
    pythonProcess.stdout.on("data", (data) => {
      const movies = data.toString().split("\n");
      recommendedMovies = movies
        .map((movie) => {
          const [title, id] = movie.split("|"); 
          return { title: title.trim(), id: id ? id.trim() : null };
        })
        .filter((movie) => movie.title && movie.id); 
    });

    
    pythonProcess.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      if (!res.headersSent) {
        return res.status(500).json({ error: "Error executing Python script" });
      }
    });

    // Handle script exit
    pythonProcess.on("close", async (code) => {
      if (code !== 0) {
        console.error(`Python script exited with code ${code}`);
        if (!res.headersSent) {
          return res.status(500).json({ error: "Python script failed" });
        }
      }
      
      const newRecommendation = new MovieRecommendationModel({
        username: isUserAlreadyExist.username,
        userEmail: email,
        enteredMovie: movieName,
        recommendedMovies,  
      });

      await newRecommendation.save();

      
      if (!res.headersSent) {
        return res.status(200).json({ recommendedMovies });
      }
    });
  } catch (error) {
    console.error("Error during recommendation:", error);
    if (!res.headersSent) {
      res.status(500).json({ message: "An error occurred" });
    }
  }
});

module.exports = router;
