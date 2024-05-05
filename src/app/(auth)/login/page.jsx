"use client";
import Input from "@/components/Input";
import axios from "axios";
import Ripple from "material-ripple-effects";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const ripple = new Ripple();
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    setIsLoading(true);
    try {
      var res = await axios.post("/api/users/login", e);

      if (res?.data?.success) {
        toast.success("User Authorized 👋");
        reset();
        window.location.replace("/dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      {/* Form for contact */}
      <div className="max-w-[600px] m-auto px-4 py-6 border rounded-lg mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full"
        >
          <h1 className="text-gray-700 text-2xl font-semibold">
            Login to Continue
          </h1>
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
