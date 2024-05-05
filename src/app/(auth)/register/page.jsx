"use client";
import Input from "@/components/Input";
import axios from "axios";
import Ripple from "material-ripple-effects";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";

const Page = () => {
  const ripple = new Ripple();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      formData.avatar = selectedImage;

      const res = await axios.post("/api/users", formData);
      if (res.data.success) {
        toast.success("User Registered 👋");
        reset();
        setSelectedImage(null);
        router.push("/login")
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
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
          {/* Name */}
          <Input
            type="text"
            inputText="Enter Full Name"
            register={register("fullName")}
          />
          {/* UserName */}
          <Input
            type="text"
            inputText="Enter UserName"
            register={register("userName")}
          />
          {/* Password */}
          <Input
            type="text"
            inputText="Enter password"
            register={register("password")}
          />

          {/* Avatar Upload */}
          <CldUploadWidget
            uploadPreset="blog-image"
            onSuccess={(results) => {
              if (results.info?.secure_url && results.event === "success") {
                setSelectedImage(results.info.secure_url);
              }
            }}
          >
            {({ open }) => (
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md bg-gray-400 px-3 py-1 text-white max-md:text-sm"
                onClick={open}
              >
                <i className="bx bx-image-add"></i>
                <span>Upload Image</span>
              </button>
            )}
          </CldUploadWidget>

          {/* Show selected image */}
          {selectedImage && (
            <div className="flex items-center flex-col gap-4 bg-gray-200 rounded-lg p-5">
              <img
                src={selectedImage}
                alt="Selected Avatar"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button
                type="button"
                onClick={handleImageRemove}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Remove
              </button>
            </div>
          )}

          {/* Image Widget */}
          <button
            disabled={isLoading}
            onMouseUp={(e) => ripple.create(e, "light")}
            className="planeBtn flex items-center mb-4 gap-2 justify-center group bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-full transition-all px-5 py-2.5 duration-300 relative"
          >
            {isLoading ? "Proccessing...." : "Register"}
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
