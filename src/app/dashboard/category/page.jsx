"use client";
import { useState } from "react";

const index = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="bg-white max-w-7xl m-auto p-5 rounded-lg my-4">
        <form>
          <div className=" mb-4 text-2xl font-semibold">
            Add Product{" "}
            <span className=" text-indigo-600 font-semibold">Category</span>
          </div>
          <div className=" flex items-center flex-wrap gap-4 mt-10">
            <input
              required
              type="text"
              placeholder="Catgory Name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset hover:ring-indigo-400 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className=" mt-4 w-fit bg-indigo-500 text-white font-light hover:bg-indigo-600 flex items-center gap-2 px-5 py-2 rounded-lg transition duration-300 cursor-pointer"
            >
              <i className="fa fa-plus"></i>
              {loading ? "Loading..." : "Add"}
            </button>
          </div>
          <p className="errorPara">{error}</p>
        </form>

        <div className=" mt-6 px-2">
          {[1, 2, 3]?.map((v, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between gap-4 border-b py-2"
              >
                <h3 className=" text-slate-600">{v.name} </h3>
                <div>
                  <i className="fa-solid fa-trash-can text-sm text-red-400 hover:text-red-500 cursor-pointer transition"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
