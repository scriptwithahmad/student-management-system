import mongoose from "mongoose";

const studentModel = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: [true, "Name Required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "User Name Required"],
  },
  phone: {
    type: String,
    trim: true,
    required: [true, "User Name Required"],
  },
  userBatchDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "batchs",
  },
});

export default mongoose?.models?.students ||
  mongoose.model("students", studentModel);
