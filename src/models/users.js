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
  avatar: {
    type: String,
    required: [true, "Image Required!"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: [true, "Is Admin Field is Required!"],
  },
});

export default mongoose?.models?.users || mongoose.model("users", userModel);
