import mongoose from "mongoose";

function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(process.env.MONGO_URI);
}

export default dbConnect;
