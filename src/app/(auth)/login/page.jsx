"use client";
import Input from "@/components/Input";
import axios from "axios";
import Ripple from "material-ripple-effects";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const Page = () => {
  const ripple = new Ripple();
  const { register, handleSubmit, reset } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    setIsLoading(true);
    try {
      var res = await axios.post("/api/users/login", e);

      console.log(res?.data?.success);

      if (res?.data?.success) {
        toast.success("User Authorized 👋");
        reset();
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      {/* Form for contact */}
      <div className="max-w-[600px] m-auto px-4 py-6 border rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full"
        >
          <Input
            type="text"
            inputText="Enter UserName"
            register={register("userName")}
          />
          <Input
            type="text"
            inputText="Enter password"
            register={register("password")}
          />
          <button
            disabled={isLoading}
            onMouseUp={(e) => ripple.create(e, "light")}
            className="planeBtn flex items-center mb-4 gap-2 justify-center group bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-full transition-all px-5 py-2.5 duration-300 relative"
          >
            {isLoading ? "Proccessing...." : "Login"}
            <i
              className={`fa-regular hoverPlane overflow-hidden fa-paper-plane text-xs group-hover:translate-x-1 transition-all ${
                isLoading ? "plane text-gray-200" : "gray-200"
              }`}
            ></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
