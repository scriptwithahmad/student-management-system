"use client";
import { useState } from "react";

const tableHeader = [
  { lable: "Date", align: "left" },
  { lable: "Product Detail", align: "left" },
  { lable: "Costomer Name", align: "left" },
  { lable: "Actions", align: "center" },
];

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* TABLE STARTED ---------------------------------------------------------------------------  */}
      <div className="w-full p-3">
        <div className="overflow-x-auto w-full border rounded-2xl">
          <div className="bg-white p-4 flex justify-between items-center flex-col gap-3 lg:flex-row w-full">
            <h2 className="text-xl font-semibold">
              All <span className="text-indigo-600">Orders</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="">
                  <input
                    // name="name"
                    // value={filterByName.name}
                    // onChange={searchInputHanler}
                    placeholder="Search here..."
                    className="relative border border-gray-200 text-gray-400 text-sm pl-3 px-2 py-[6px] lg:w-[12vw] w-[25vw] rounded-full focus:ring-2 transition-colors focus:outline-none focus:text-gray-400"
                  />
                  <span>
                    {true ? (
                      <i className="fa-solid fa-spinner absolute top-[30%] right-3 text-xs text-gray-500 dashboardSearchSlide"></i>
                    ) : null}{" "}
                  </span>
                </div>
                <i
                  title="Add Product"
                  className="absolute top-1/2 -translate-y-1/2 right-3 border-l pl-2 cursor-pointer text-gray-400 hover:text-gray-500 bx bx-search-alt-2"
                ></i>
              </div>
              <div>
                <i className="fa-solid fa-plus rounded-full h-8 w-8 flex items-center justify-center bg-blue-500 text-white transition-all duration-150 cursor-pointer text-sm"></i>
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
              {[1, 2, 3, 4].map((v, i) => {
                return (
                  <tr
                    key={i}
                    className="hover:bg-slate-100 border-b border-gray-100 bg-white"
                  >
                    <td className="px-6 py-2 text-[10px]">18 sec ago</td>

                    <td className="px-6 py-2">Hey Content</td>
                    <td className="px-6 py-2"> 5923 </td>

                    <td className="px-6 py-2 text-lg text-center">
                      <button>
                        <i
                          title="View"
                          className="fa fa-solid fa-eye px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-gray-400 text-sm"
                        ></i>
                      </button>
                      <button>
                        <i className="fa-solid fa-pen-to-square px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-gray-400 text-sm"></i>
                      </button>
                      <i
                        title="Delete"
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
    </>
  );
};

export default Page;
