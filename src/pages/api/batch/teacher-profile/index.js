import { JWTVerify } from "@/helpers/jwt";
import studentsModel from "@/models/students";
import dbConnect from "@/config/dbConnect";


export default async function handler(req, res) {
  dbConnect();

  try {
    var token = req.cookies.AccessToken || "";
    var id = (await JWTVerify(token)) || req.query.id;
    console.log(id);


    res.status(200).json({
      success: true,
      message: id,
    });
  } catch (error) {
    if (error.kind == "ObjectId") {
      res.status(400).json({
        success: false,
        message: null,
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
