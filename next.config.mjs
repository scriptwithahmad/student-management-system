/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_URI:
      "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/student-management-sys?retryWrites=true&w=majority&appName=edify",
    NEXT_PUBLIC_SECRET_KEY: "1234555aaddad",
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dmyrswz0r",
    NEXT_PUBLIC_CLOUDINARY_API_KEY: "885761744226268",
    NEXT_PUBLIC_CLOUDINARY_API_SECRET: "0JlDP2yzQVQ-L3NwZDDmfzhk1Qs",
  },
};

export default nextConfig;
