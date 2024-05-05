"use client";
import axios from "axios";
import Input from "@/components/Input";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { format, render, cancel, register } from "timeago.js";
import { AuthContext } from "@/context/AuthContext";

const tableHeader = [
  { lable: "Name", align: "left" },
  { lable: "Details", align: "left" },
  { lable: "Batch", align: "left" },
  { lable: "Actions", align: "center" },
];

const Page = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const { user } = useContext(AuthContext);

  // DELETE STUDENT -------------------------
  // delete Student by Slug ------------------------------------------------------/
  const delPost = async (id) => {
    try {
      if (window.confirm("Do you wnat to Delete this Student") === true) {
        const res = await fetch(`/api/students/${id}`, {
          method: "DELETE",
        });

        if (
          toast.success("Student Deleted Successfully!", {
            duration: 1000,
          })
        ) {
          window.location.reload();
        } else {
          toast.error("Something went Wrong");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get("/api/students");
      setStudentData(res?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };

  const [batchStudent, setBatchStudent] = useState([]);
  const getBatchData = async () => {
    try {
      const res = await axios.get("/api/students/st");
      setBatchStudent(res?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };

  const [batchId, setBatchId] = useState("");
  const getbatchID = async () => {
    try {
      const res = await axios.get("/api/batch/teacher-profile");
      setBatchId(res?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getbatchID();
    getBatchData();
    getData();
  }, []);

  const onSubmit = async (e) => {
    setLoading(true);
    try {
      e.userBatchDetails = batchId;
      var res = await axios.post("/api/students", e);

      if (res?.data?.success) {
        toast.success("Student Created 👋");
        reset();
        setShowModal(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* TABLE STARTED ---------------------------------------------------------------------------  */}
      <div className="w-full p-3">
        <div className="overflow-x-auto w-full border rounded-2xl">
          <div className="bg-white p-4 flex justify-between items-center flex-col gap-3 lg:flex-row w-full">
            <h2 className="text-xl font-semibold">
              All <span className="text-indigo-600">Students</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="">
                  <input
                    placeholder="Search here..."
                    className="relative border border-gray-200 text-gray-400 text-sm pl-3 px-2 py-[6px] lg:w-[12vw] w-[25vw] rounded-full focus:ring-2 transition-colors focus:outline-none focus:text-gray-400"
                  />
                  <span>
                    {true ? (
                      <i className="fa-solid fa-spinner absolute top-[30%] right-3 text-xs text-gray-500 dashboardSearchSlide"></i>
                    ) : null}{" "}
                  </span>
                </div>
                <i className="absolute top-1/2 -translate-y-1/2 right-3 border-l pl-2 cursor-pointer text-gray-400 hover:text-gray-500 bx bx-search-alt-2"></i>
              </div>
              <div className="flex items-center justify-center h-8 w-8 bg-blue-500 rounded-full">
                <i
                  title="Add Student"
                  onClick={() => setShowModal(true)}
                  className="fa-solid fa-plus rounded-full text-white transition-all duration-150 cursor-pointer text-sm"
                ></i>
              </div>
            </div>
          </div>
          <table className="text-sm min-w-[1100px] w-full text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                {tableHeader.map((value, index) => {
                  return (
                    <th
                      scope="col"
                      key={index}
                      className={`px-6 py-3 text-${value.align}`}
                    >
                      {value.lable}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {user
                ? studentData?.map((v, i) => {
                    return (
                      <tr
                        key={i}
                        className="hover:bg-slate-100 border-b border-gray-100 bg-white"
                      >
                        <td className="px-6 py-2">
                          <div className="flex flex-col">
                            <h2 className="font-semibold">{v?.fullName}</h2>
                            <p className="text-[10px]">
                              {format(new Date(v.createdAt), "en_US")}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-2 flex flex-col">
                          <h2>{v?.email}</h2>
                          <h2>{v?.phone}</h2>
                        </td>
                        <td className="px-6 py-2">
                          <h1>{v?.userBatchDetails?.batchName}</h1>
                          <h1>{v?.userBatchDetails?.userName}</h1>
                        </td>

                        <td className="px-6 py-2 text-lg text-center">
                          <button>
                            <i
                              title="View"
                              className="fa fa-solid fa-eye px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-gray-400 text-sm"
                            ></i>
                          </button>
                          <Link
                            href={`/dashboard/students/edit-students/${v?._id}`}
                          >
                            <i
                              title="Edit Student"
                              className="fa-solid fa-pen-to-square px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-gray-400 text-sm"
                            ></i>
                          </Link>
                          <i
                            title="Delete"
                            onClick={() => delPost(v?._id)}
                            className="fa fa-solid fa-trash px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-red-400 text-sm"
                          ></i>
                        </td>
                      </tr>
                    );
                  })
                : batchStudent?.map((v, i) => {
                    return (
                      <tr
                        key={i}
                        className="hover:bg-slate-100 border-b border-gray-100 bg-white"
                      >
                        <td className="px-6 py-2">
                          <div className="flex flex-col">
                            <h2 className="font-semibold">{v?.fullName}</h2>
                            <p className="text-[10px]">
                              {format(new Date(v.createdAt), "en_US")}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-2 flex flex-col">
                          <h2>{v?.email}</h2>
                          <h2>{v?.phone}</h2>
                        </td>
                        <td className="px-6 py-2">
                          <h1>{v?.userBatchDetails?.batchName}</h1>
                          <h1>{v?.userBatchDetails?.userName}</h1>
                        </td>

                        <td className="px-6 py-2 text-lg text-center">
                          <button>
                            <i
                              title="View"
                              className="fa fa-solid fa-eye px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-gray-400 text-sm"
                            ></i>
                          </button>
                          <Link
                            href={`/dashboard/students/edit-students/${v?._id}`}
                          >
                            <i
                              title="Edit Student"
                              className="fa-solid fa-pen-to-square px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-gray-400 text-sm"
                            ></i>
                          </Link>
                          <i
                            title="Delete"
                            onClick={() => delPost(v?._id)}
                            className="fa fa-solid fa-trash px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-red-400 text-sm"
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
          {/* Pagination start  ----------- */}
          <div className=" flex items-center justify-end pr-10 gap-5 w-full py-5 border-b border-gray-100 bg-gray-50">
            <span className=" whitespace-nowrap flex items-center justify-center text-sm text-slate-500">
              50 to 15 of 124
            </span>
            <div className="flex border gap-4 px-4 py-1 rounded-full">
              <i
                className={`fa-solid fa-angle-left p-1 text-orange-600 text-xs border-r pr-4`}
              ></i>

              <i
                className={`fa-solid fa-angle-right text-orange-600 text-xs p-1`}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal Here ----------------------------------------------------  */}
      <div
        style={{
          visibility: showModal ? "visible" : "hidden",
          opacity: showModal ? "1" : "0",
          transition: ".4s",
        }}
        className="fixed z-10 top-0 left-0 w-full h-screen backdrop-blur-[2px] bg-[#00000094] overflow-auto"
      >
        <div
          className={`${
            showModal ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } bg-white duration-500 sm:mx-auto mx-3 my-8 relative max-w-xl lg:max-w-3xl rounded-lg overflow-hidden`}
        >
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <h2 className=" text-slate-500 font-semibold text-xl">
              Add New Student
            </h2>
            <i
              onClick={() => setShowModal(false)}
              class="fa-solid fa-xmark  bg-gray-100 cursor-pointer text-gray-400 p-1 text-lg rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-200"
            ></i>
          </div>
          {/* -------------------------- UPLOAD NEW Students HERE -------------------------------------- */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <div className="flex flex-col flex-wrap gap-4">
              <Input
                type="text"
                inputText="Enter Student Name"
                register={register("fullName")}
              />
              <Input
                type="text"
                inputText="Enter Student Email"
                register={register("email")}
              />
              <Input
                type="text"
                inputText="Enter Student Phone"
                register={register("phone")}
              />

              <button
                type="submit"
                className="w-fit bg-indigo-500 text-white font-light hover:bg-indigo-600 flex items-center gap-2 px-5 py-2 rounded-lg transition duration-300 cursor-pointer"
              >
                <i className="fa fa-plus"></i>
                {loading ? "Loading..." : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
