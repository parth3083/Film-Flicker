const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/dbConnect");
const userRegister = require("./routes/userRegistration");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

connectDb();

app.get("/", (req, res) => {
  res.send("Backend started working");
});

app.post("/user-register", userRegister);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on http://localhost:8000");
});
