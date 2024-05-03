/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_URI:
      "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/student-management-sys?retryWrites=true&w=majority&appName=edify",
    JWT_SECRET: "StudentMangementSystemClient@3#!8faUshwn33",
  },
};

export default nextConfig;
