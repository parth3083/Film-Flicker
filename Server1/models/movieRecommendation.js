const mongoose = require("mongoose");

const movieRecommendationSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    enteredMovie: {
      type: String,
      required: true,
    },
    recommendedMovies: [
      {
        title: {
          type: String,
          required: true,
        },
        id: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const MovieRecommendationModel = mongoose.model(
  "MovieRecommendation",
  movieRecommendationSchema
);

module.exports = MovieRecommendationModel;
