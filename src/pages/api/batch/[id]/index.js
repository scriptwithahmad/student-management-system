import dbConnect from "@/config/dbConnect";
import batchsModel from "@/models/batchs";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    //-------------- UPDATE POST --------------//
    case "PUT":
      try {
        const studentID = req.body._id || req.query.id;

        const updateStudent = await batchsModel.findByIdAndUpdate(
          studentID,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );

        if (!updateStudent) {
          return res.status(400).json({
            success: false,
            message: "Batch Not Found!",
          });
        }

        return res.status(200).json({
          success: true,
          message: updateStudent,
        });
      } catch (error) {
        console.log(error);
      }

      break;
    //-------------- DELETE POST --------------//
    case "DELETE":
      try {
        const fetchUser = await batchsModel.findById(req.query.id);

        if (!fetchUser) {
          return res.status(404).json({
            success: false,
            message: "User Not Found!",
          });
        }

        const deleteUser = await batchsModel.findByIdAndDelete(req.query.id);

        if (!deleteUser) {
          return res.status(400).json({
            success: false,
            message: "Unable to delete the User!",
          });
        }

        res.status(200).json({
          success: true,
          message: "User Deleted Successfully!",
        });
      } catch (error) {
        res.status(error);
      }

      break;

    default:
      break;
  }

  try {
    const singleStudent = await batchsModel.findOne({ slug: req.query.slug });
    res.status(200).json({
      success: true,
      singleStudent,
    });
  } catch (error) {
    res.status(error);
  }
}
