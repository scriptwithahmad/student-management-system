import bcrypt from "bcrypt";
import { serialize } from "cookie";
import dbConnect from "@/config/dbConnect";
import { GenAccessToken } from "@/helpers/jwt";
import batchsModel from "@/models/batchs";

export default async function Handler(req, res) {
  dbConnect();

  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      res.status(400).json({
        success: false,
        message: "userName and Password are required",
      });
      return;
    }

    const foundUser = await batchsModel.findOne({ userName });

    if (!foundUser) {
      res.status(400).json({
        success: false,
        message: "Invalid userName or password",
      });
      return;
    }

    // Compare provided password with hashed password

    const IspasswordValid = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );

    if (!IspasswordValid) {
      res.status(401).json({
        success: false,
        message: "Invalid Credentials!",
      });
      return;
    }

    const AccessToken = await GenAccessToken({
      id: foundUser._id,
    });

    res.setHeader(
      "Set-Cookie",
      serialize("AccessToken", AccessToken, {
        path: "/",
        httpOnly: true,
      })
    );

    var user = {
      id: foundUser._id,
    };

    res.status(201).json({
      success: true,
      message: "Teacher Login Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
