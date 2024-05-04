"use client";
import axios from "axios";
import Input from "@/components/Input";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchSingleStudent = async () => {
      const res = await axios.get(`/api/students/${params.slug}`);
      setFormData(res?.data?.singleStudent);
    };

    fetchSingleStudent();
  }, []);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      var submitionData = {
        ...formData,
      };
      var res = await axios.put(`/api/students/${params.slug}`, submitionData);

      console.log(res.data.success);

      if (res.data.success) {
        toast.success("Student Updated 😎");
      }
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
        });
      }, 1500);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setIsError("");
      if (error?.response?.data?.message) {
        setIsError(error?.response?.data?.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={HandleSubmit}
        className="bg-white px-5 py-8 rounded-lg max-w-[800px] m-auto mt-8"
      >
        <div className=" grid grid-cols-1">
          {/* Student Name -------------------------- */}
          <div className="sign_In_Input_Outer">
            <label htmlFor="fullName">Full Name</label>
            <div className="sign_In_Input">
              <input
                id="fullName"
                name="fullName"
                autoComplete="off"
                value={formData.fullName}
                onChange={changeHandler}
                placeholder="Enter Full Name"
                className={`w-full mb-4 py-4 border-none text-[14px] text-gray-500 bg-[#F5F6F8] placeholder:text-sm  rounded-md px-4 border-gray-300 focus:outline-none focus:border-indigo-500`}
              ></input>
            </div>
          </div>

          {/* Student email -------------------------- */}
          <div className="sign_In_Input_Outer">
            <label htmlFor="email">Email</label>
            <div className="sign_In_Input">
              <input
                id="email"
                name="email"
                autoComplete="off"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter Full Name"
                className={`w-full mb-4 py-4 border-none text-[14px] text-gray-500 bg-[#F5F6F8] placeholder:text-sm  rounded-md px-4 border-gray-300 focus:outline-none focus:border-indigo-500`}
              ></input>
            </div>
          </div>
          {/* Student phone -------------------------- */}
          <div className="sign_In_Input_Outer">
            <label htmlFor="phone">Phone</label>
            <div className="sign_In_Input">
              <input
                id="phone"
                name="phone"
                autoComplete="off"
                value={formData.phone}
                onChange={changeHandler}
                placeholder="Enter Full Name"
                className={`w-full mb-4 py-4 border-none text-[14px] text-gray-500 bg-[#F5F6F8] placeholder:text-sm  rounded-md px-4 border-gray-300 focus:outline-none focus:border-indigo-500`}
              ></input>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-5 bg-indigo-500 text-white px-4 py-1 rounded-md hover:bg-indigo-600"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </>
  );
};

export default Page;
