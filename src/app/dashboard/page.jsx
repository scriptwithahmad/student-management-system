const tableHeader = [
  { lable: "Name", align: "left" },
  { lable: "Category", align: "left" },
  { lable: "Price", align: "left" },
];

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {/* Dashboard Card 01 -----------*/}
        <div className="bg-white rounded-lg py-5 px-7 flex globalShadow">
          <div className=" flex-1">
            <h2 className=" text-slate-600 text-base mb-2">Products</h2>
            <span className=" text-slate-800 font-semibold text-lg">22 +</span>
            <p className=" my-2 text-sm text-slate-400 font-light">
              <span className="text-[#22c55e]">24</span> Newly Added Products
            </p>
          </div>
          <div>
            <i className="fa-solid fa-chart-simple bg-cyan-200 text-cyan-700 p-2 rounded-md"></i>
          </div>
        </div>
        {/* Dashboard Card 02 -----------*/}
        <div className="bg-white rounded-lg py-5 px-7 flex globalShadow">
          <div className=" flex-1">
            <h2 className=" text-slate-600 text-base mb-2">Customers</h2>
            <span className=" text-slate-800 font-semibold text-lg">288</span>
            <p className=" my-2 text-sm text-slate-400 font-light">
              <span className="text-[#22c55e]">24</span> Newly Added Products
            </p>
          </div>
          <div>
            <i className="fa-solid fa-box bg-emerald-200 text-green-700 p-2 rounded-md"></i>
          </div>
        </div>
        {/* Dashboard Card 03 -----------*/}
        <div className="bg-white rounded-lg py-5 px-7 flex globalShadow">
          <div className=" flex-1">
            <h2 className=" text-slate-600 text-base mb-2">User</h2>
            <span className=" text-slate-800 font-semibold text-lg">55 +</span>
            <p className=" my-2 text-sm text-slate-400 font-light">
              <span className="text-[#22c55e]">24</span> Newly Added Products
            </p>
          </div>
          <div>
            <i className="fa-solid fa-user bg-fuchsia-200 text-fuchsia-700 p-2 rounded-md"></i>
          </div>
        </div>
        {/* Dashboard Card 04 -----------*/}
        <div className="bg-white rounded-lg py-5 px-7 flex globalShadow">
          <div className=" flex-1">
            <h2 className=" text-slate-600 text-base mb-2">Orders</h2>
            <span className=" text-slate-800 font-semibold text-lg">188 +</span>
            <p className=" my-2 text-sm text-slate-400 font-light">
              <span className="text-[#22c55e]">24</span> Newly Added Products
            </p>
          </div>
          <div>
            <i className="fa-solid fa-cart-shopping bg-rose-200 text-rose-700 p-2 rounded-md"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
