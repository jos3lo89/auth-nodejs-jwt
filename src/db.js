import mongoose from "mongoose";
import { DB_URL } from "./config.js";

const connectedDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(">>> db is connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectedDB;
