import mongoose from "mongoose";

const batchModel = new mongoose.Schema({
  batchName: {
    type: String,
    trim: true,
    required: [true, "Name Required"],
  },
  userName: {
    type: String,
    trim: true,
    required: [true, "User Name Required"],
  },
  password: {
    type: String,
    required: [true, "Password Required!"],
  },
});

export default mongoose?.models?.batchs || mongoose.model("batchs", batchModel);
