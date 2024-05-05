const tableHeader = [
  { lable: "Name", align: "left" },
  { lable: "Category", align: "left" },
  { lable: "Price", align: "left" },
];

async function getData() {
  const res = await fetch("http://localhost:3000/api/stats");

  return res.json();
}

const Page = async () => {
  const data = await getData();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* Dashboard Card 01 -----------*/}
        <div className="bg-white rounded-lg py-5 px-7 flex globalShadow">
          <div className=" flex-1">
            <h2 className=" text-slate-600 text-base mb-2">Users</h2>
            <span className=" text-slate-800 font-semibold text-2xl">
              {data?.users} +
            </span>
          </div>
          <div>
            <i className="fa-solid fa-users bg-cyan-200 text-cyan-700 p-2 rounded-md"></i>
          </div>
        </div>
        {/* Dashboard Card 02 -----------*/}
        <div className="bg-white rounded-lg py-5 px-7 flex globalShadow">
          <div className=" flex-1">
            <h2 className=" text-slate-600 text-base mb-2">Batch</h2>
            <span className=" text-slate-800 font-semibold text-2xl">
              {data?.batchs} +
            </span>
          </div>
          <div>
            <i className="fa-solid fa-box bg-emerald-200 text-green-700 p-2 rounded-md"></i>
          </div>
        </div>
        {/* Dashboard Card 03 -----------*/}
        <div className="bg-white rounded-lg py-5 px-7 flex globalShadow">
          <div className=" flex-1">
            <h2 className=" text-slate-600 text-base mb-2">Students</h2>
            <span className=" text-slate-800 font-semibold text-2xl">
              {data?.students} +
            </span>
          </div>
          <div>
            <i className="fa-solid fa-user bg-fuchsia-200 text-fuchsia-700 p-2 rounded-md"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
