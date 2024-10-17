const { z } = require("zod");
const UserModel = require("../models/user");

const userSchema = z.object({
  username: z.string().min(3, "Username is required"),
  email: z.string().email("Invalid email format"),
  clerk_Id: z.string().min(5, "Clerk ID is required"),
});

const userRegister = async (req, res) => {
  try {
    const parsedBody = userSchema.parse(req.body);
    const { username, email, clerk_Id } = parsedBody;

    const existingUser = await UserModel.findOne({ userEmail: email });
    if (existingUser) {
      return res.status(201).json({ error: "User already exists" });
    } else {
      const newUser = new UserModel({
        username: username,
        userEmail: email,
        clerk_Id: clerk_Id,
        createdAt: new Date(),
      });
      await newUser.save();
      res.status(200).json({ message: "User registered successfully" });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = userRegister;
