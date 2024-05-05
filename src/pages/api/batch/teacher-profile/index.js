import { JWTVerify } from "@/helpers/jwt";
import dbConnect from "@/config/dbConnect";
import batchsModel from "@/models/batchs";

export default async function handler(req, res) {
  dbConnect();

  try {
    var token = req.cookies.AccessToken || "";
    var id = (await JWTVerify(token)) || req.query.id;

    const batch = await batchsModel.findById(id);

    res.status(200).json({
      success: true,
      message: id,
      batch,
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
