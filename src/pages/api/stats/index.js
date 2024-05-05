import Users from "@/models/users";
import Batchs from "@/models/batchs";
import Students from "@/models/students";
import dbConnect from "@/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  try {
    const users = await Users.find().count();
    const batchs = await Batchs.find().count();
    const students = await Students.find().count();

    res.status(200).json({
      success: true,
      users,
      batchs,
      students,
    });
  } catch (error) {
    console.log(error);
  }
}
