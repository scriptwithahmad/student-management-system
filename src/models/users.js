import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: [true, "Name Required"],
  },
  userName: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "User Name Required"],
  },
  password: {
    type: String,
    required: [true, "Password Required!"],
  },
});

export default mongoose?.models?.users || mongoose.model("users", userModel);
