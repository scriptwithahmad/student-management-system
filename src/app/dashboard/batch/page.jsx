"use client";
import Input from "@/components/Input";
import axios from "axios";
import Ripple from "material-ripple-effects";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Page = () => {
  const ripple = new Ripple();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (e) => {
    setLoading(true);
    try {
      var res = await axios.post("/api/batch", e);

      console.log(res?.data?.success);

      if (res?.data?.success) {
        toast.success("Batch Created 👋");
        reset();
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const [batchData, setBatchData] = useState([]);

  const fetchBatchData = async () => {
    try {
      const { data } = await axios.get("/api/batch");
      setBatchData(data?.user);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchBatchData();
  }, []);

  // delete Batch by Slug ------------------------------------------------------/
  const delPost = async (id) => {
    try {
      if (window.confirm("Do you wnat to Delete this Batch") === true) {
        const res = await fetch(`/api/batch/${id}`, {
          method: "DELETE",
        });

        if (
          toast.success("Batch Deleted Successfully!", {
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

  return (
    <>
      <div className="bg-white max-w-7xl m-auto p-5 rounded-lg my-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mb-4 text-2xl font-semibold">
            Add New Batch{" "}
            <span className=" text-indigo-600 font-semibold">Category</span>
          </div>
          <div className=" flex items-center flex-wrap gap-4">
            <Input
              type="text"
              inputText="Enter Batch Name"
              register={register("batchName")}
            />
            <Input
              type="text"
              inputText="Enter Batch UserName"
              register={register("userName")}
            />
            <Input
              type="text"
              inputText="Enter Batch Password"
              register={register("password")}
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

        <div className="mt-6 px-2">
          {batchData?.map((v, i) => {
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-b py-2">
                <h3 className=" text-slate-600">{v?.batchName} </h3>
                <h3 className=" text-slate-600">{v?.userName} </h3>
                <div>
                  <i
                    title="Delete"
                    onClick={() => delPost(v?._id)}
                    className="fa-solid fa-trash-can text-sm text-red-400 hover:text-red-500 cursor-pointer transition"
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
