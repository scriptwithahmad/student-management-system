"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";

const Page = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="bg-white relative mt-4 max-w-5xl m-auto rounded-lg">
        <Link
          href="#"
          className="absolute cursor-pointer top-6 right-6 border rounded-md text-gray-600 bg-gray-100  border-gray-200 hover:text-indigo-600 hover:bg-gray-50 gap-1 text-sm flex items-center px-3 py-1 transition-all duration-150"
        >
          <i className="fa-solid fa-pen-to-square"></i>
          Edit
        </Link>
        <Link
          href={"#"}
          className="absolute cursor-pointer top-6 right-24 border rounded-md text-gray-600 bg-gray-100  border-gray-200 hover:text-indigo-600 hover:bg-gray-50 gap-1 text-sm flex items-center px-3 py-1 transition-all duration-150"
        >
          <i className="fa-solid fa-floppy-disk"></i>
          Update
        </Link>

        <div className="shade rounded-lg py-10 flex items-center flex-col justify-center">
          {true ? (
            <div>
              <div className="max-w-full m-auto">
                <div className="h-fit w-fit border-[10px] border-[#eeeeee9c] rounded-full max-w-full m-auto">
                  <img
                    alt="image here"
                    src={user?.avatar}
                    className="h-60 w-60 border-[10px] object-cover border-[#c9c9c9cc] rounded-full"
                  />
                </div>
              </div>

              {/* Full Name ----------------------------------------------- */}
              <div className="flex items-center justify-center flex-col mt-6">
                <h1 className="capitalize text-3xl mb-3 text-slate-800 font-bold tracking-wider">
                  {user?.fullName || "M Ahmad"}
                </h1>
                <h2 className="text-[#6c757d] text-xs uppercase tracking-wide">
                  {user?.userName || "@Ahmad"}
                </h2>
              </div>
              {/* Inner Divs ----------------------------------------------- */}
              <div className="grid grid-cols-2 mt-6 gap-4">
                {/* Email ----------------------------------------------- */}
                <div className="px-4 py-2 flex items-center gap-4 shadow-md rounded-lg">
                  <i class="fa-solid fa-envelope text-xl text-gray-400"></i>
                  <div>
                    <p className="text-xs text-[#00000084] mb-1">Email</p>
                    <span className="text-[#444] text-sm">admin@ab.com</span>
                  </div>
                </div>
                {/* Phone ----------------------------------------------- */}
                <div className="px-4 py-2 flex items-center gap-2 shadow-md rounded-lg">
                  <i className="fa-solid fa-phone text-gray-400"></i>
                  <div>
                    <p className="text-xs text-[#00000084] mb-1">Phone</p>
                    <span className="text-[#444] text-sm">+92 3099968433</span>
                  </div>
                </div>
                {/* User Role ---------------------------------------------- */}
                <div className="px-4 py-2 flex items-center gap-3 shadow-md rounded-lg">
                  <i className="fa-solid fa-user-secret text-lg text-gray-400"></i>
                  <div>
                    <p className="text-xs text-[#00000084] mb-1">User Role</p>
                    <span className="text-[#444] text-sm">Admin</span>
                  </div>
                </div>
                {/* Gender ----------------------------------------------- */}
                <div className="px-4 py-2 flex items-center gap-3 shadow-md rounded-lg">
                  <i className="fa-solid fa-user text-gray-400 text-lg"></i>
                  <div>
                    <p className="text-xs text-[#00000084] mb-1">Gender</p>
                    <span className="text-[#444] text-sm">Male</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <span className="text-red-600 text-2xl">
              Opps! Profile Not Found...
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
