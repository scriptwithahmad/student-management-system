"use client";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Page = () => {
  var { user } = useContext(AuthContext);

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    currentPassword: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const userId = user._id;

      const res = await axios.put(`/api/users/update-password`, {
        userId,
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/dashboard/profile");
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={submitForm}
        className="bg-[#fefefee1] shade rounded-lg px-6 py-8 max-w-3xl mx-auto my-6"
      >
        <span className="text-slate-700 font-semibold text-xl">
          Update Password
        </span>
        <div className="flex items-center mt-8 gap-6">
          <div className="grid gap-4 grid-cols-1 w-full">
            {/* Current Password */}
            <div className="flex flex-col">
              <label
                className="text-[#333441d8] text-sm mb-2"
                htmlFor="cur-pass"
              >
                Current Password
              </label>
              <input
                type="password"
                id="cur-pass"
                name="currentPassword"
                onChange={changeHandler}
                value={formData.currentPassword}
                placeholder="Current Password"
                className="rounded-lg text-sm py-3 px-2 border text-slate-400 border-gray-300 focus:ring-2 outline-none"
              />
            </div>
            {/* New Password */}
            <div className="flex flex-col">
              <label
                className="text-[#333441d8] text-sm mb-2"
                htmlFor="new-pass"
              >
                New Password
              </label>
              <input
                id="new-pass"
                type="password"
                name="newPassword"
                onChange={changeHandler}
                value={formData.newPassword}
                placeholder="New Password"
                className="rounded-lg text-sm py-3 px-2 border text-slate-400 border-gray-300 focus:ring-2 outline-none"
              />
            </div>
          </div>
        </div>
        {/* BUTTON HERE  */}
        <button
          type="submit"
          className="mt-6 bg-indigo-500 text-white font-light hover:bg-indigo-600 flex items-center gap-2 px-5 py-2 rounded-lg transition duration-300 cursor-pointer"
        >
          <i className="fa fa-save"></i>
          {loading ? "Loading..." : "Save Password"}
        </button>
      </form>
    </>
  );
};

export default Page;
