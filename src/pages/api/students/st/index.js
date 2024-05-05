import studentsModel from "@/models/students";
import { JWTVerify } from "@/helpers/jwt";
import dbConnect from "@/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  try {
    var token = req.cookies.AccessToken || "";
    var id = (await JWTVerify(token)) || req.query.id;

    const user = await studentsModel
      .find({ userBatchDetails: id })
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
