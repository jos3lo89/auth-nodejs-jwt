import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userFound = await userModel.findOne({ email });
    if (userFound) return res.json({ message: "usuario existe" });

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  res.json({ message: "login" });
};
