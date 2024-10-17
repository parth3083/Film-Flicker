const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  const uri = process.env.MONGO_DB_URI;

  if (!uri) {
    console.error("MongoDB URI is not defined in the environment variables");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connection successful 🔥🔥🔥🔥🔥");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = connectDb;
