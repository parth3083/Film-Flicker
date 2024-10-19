
const UserModel = require("../models/user");



const userRegister = async (req, res) => {
  try {

    const { username, email, clerkId } = req.body;

    const existingUser = await UserModel.findOne({ userEmail: email });
    if (existingUser) {
      return res.status(201).json({ error: "User already exists" });
    } else {
      const newUser = new UserModel({
        username: username,
        userEmail: email,
        clerk_Id: clerkId,
        createdAt: new Date(),
      });
      await newUser.save();
      res.status(200).json({ message: "User registered successfully" });
    }
  } catch (error) {
    
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = userRegister;
