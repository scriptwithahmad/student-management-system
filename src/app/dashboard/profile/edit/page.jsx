"use client";
import { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <form className="max-w-5xl mx-auto mt-4">
        <div className="bg-[#fefefee1] shade rounded-lg px-5 py-6">
          <span className="text-[#333448] text-lg">Basic Informations</span>
          <div className="flex lg:items-center mt-4 gap-6 items-start">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 w-full">
              {/* Full Name */}
              <div className="flex flex-col">
                <label
                  className="text-[#333441d8] text-sm mb-1"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  // name="fullname"
                  placeholder="Full Name"
                  // onChange={routehandler}
                  // value={formData?.fullname}
                  className="rounded-lg py-2 border text-[#555] focus:text-[#1553A1] border-gray-300 focus:border-[#1554a177] px-2"
                />
              </div>

              {/* Username */}
              <div className="flex flex-col">
                <label
                  className="text-[#333441d8] text-sm mb-1"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  // name="username"
                  placeholder="Username"
                  // onChange={routehandler}
                  // value={formData?.username}
                  className="rounded-lg py-2 border text-gray-400 focus:text-[#1553A1] border-gray-200 focus:border-[#1554a177] cursor-not-allowed select-none px-2"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col">
                <label
                  className="text-[#333441d8] text-sm mb-1"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  // name="email"
                  placeholder="Email"
                  // onChange={routehandler}
                  // value={formData?.email}
                  className="rounded-lg py-2 border text-[#555] focus:text-[#1553A1] border-gray-300 focus:border-[#1554a177] px-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT INFORMATION  */}
        <div className="bg-[#fefefee1] shade rounded-lg px-5 py-6 mt-6">
          <span className="text-[#333448] text-lg">Contact Informations</span>
          <div className="flex items-center mt-4 gap-6">
            <div className="grid gap-4 grid-cols-2 w-full">
              {/* Phone */}
              <div className="flex flex-col">
                <label
                  className="text-[#333441d8] text-sm mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  // name="phone"
                  placeholder="Phone"
                  // onChange={routehandler}
                  // value={formData?.phone}
                  className="rounded-lg py-2 border text-[#555] focus:text-[#1553A1] border-gray-300 focus:border-[#1554a177] px-2"
                />
              </div>
              {/* Gender */}
              <div className="flex flex-col">
                <label
                  className="text-[hsla(236,12%,23%,1)] text-sm mb-1"
                  htmlFor="gender"
                >
                  Select Gender
                </label>
                <select
                  id="gender"
                  // name="gender"
                  // onChange={routehandler}
                  // value={formData?.gender}
                  className="rounded-lg py-2 border text-[#555] focus:text-[#1553A1] border-gray-300 focus:border-[#1554a177] px-2"
                >
                  <option selected value="" disabled>
                    Select
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTON HERE  */}
        <button
          type="submit"
          className=" mt-4 w-fit bg-indigo-500 text-white font-light hover:bg-indigo-600 flex items-center gap-2 px-5 py-2 rounded-full transition duration-300 cursor-pointer"
        >
          <i className="fa fa-plus"></i>
          {loading ? "Loading..." : "Save"}
        </button>
      </form>
    </>
  );
};

export default Page;
