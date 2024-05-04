import bcrypt from "bcrypt";
import studentsModel from "@/models/students";
import dbConnect from "@/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "POST":
      try {
        const { fullName, email, phone } = req.body;

        if (!email || !fullName || !phone) {
          res.status(400).json({
            success: false,
            message: "Fill out all Fields!",
          });
          return;
        }

        const user = await studentsModel.create(req.body);
        res.status(201).json({
          success: true,
          message: user,
        });
      } catch (error) {
        // For duplicate Data Error Hnadle
        if (error.code === 11000) {
          return res.status(409).json({
            success: false,
            message: `${Object.keys(error.keyPattern)[0]} already in use!`,
          });
        }

        var errorMessage = error.message?.split(":")[2]?.trim();
        if (errorMessage) {
          return res.status(400).json({
            success: false,
            message: errorMessage,
          });
        }

        res.status(500).json({
          success: false,
          message: "Something Went Wrong!",
        });
      }

      break;
    case "GET":
      try {
        const user = await studentsModel.find();

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

      break;

    default:
      break;
  }
}
