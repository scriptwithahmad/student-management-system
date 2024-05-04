import studentsModel from "@/models/students";
import { JWTVerify } from "@/helpers/jwt";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";

export default async function handler(req, res) {
  dbConnect();

  try {
    var token = req.cookies.AccessToken || "";
    var id = (await JWTVerify(token)) || req.query.id;

    console.log(id);

    const { ObjectId } = mongoose.Types; // Destructure ObjectId from mongoose.Types

    const user = await studentsModel
      .find({ userBatchDetails: ObjectId("6634cee84baed0b678622bba") }) // Correct usage: passing string to ObjectId() to convert it to ObjectId
      .populate("userBatchDetails", "batchName userName");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}
