"use client";
import Head from "next/head";
import Link from "next/link";
import Aside from "./Aside";
import Dnav from "./Dnav";
import { usePathname } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function Layout({ children }) {
  const pathname = usePathname();
  var privateRoutes = pathname.startsWith("/dashboard");

  var isDashboard = pathname == "/dashboard";

  return (
    <>
      <Toaster />
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dmyrswz0r/image/upload/v1706707781/ulogo_hclp4i.png"
        />
      </Head>
      <div>
        {privateRoutes ? (
          <div className="max-h-screen flex flex-col h-screen bg-[#ffffff] overflow-hidden">
            <div className="w-full ">
              <Dnav />
            </div>
            <div className="flex flex-1">
              <Aside />
              <div className="overflow-y-auto max-h-[90vh] max-w-[100vw] overflow-x-auto flex-1 bg-[#eee] rounded-2xl shadow-[inset_0px_0px_10px_rgba(56,56,56,0.2)]">
                {/* // portal breadcrumb code ------------------ */}
                <div className="boxShadowCostom my-1 mx-16 whitespace-nowrap mb-4 py-4 px-8 flex items-center gap-3 text-sm bg-[#ffffffa2] rounded-full fixed bottom-6 left-1/2 -translate-x-1/2">
                  {isDashboard ? (
                    <Link
                      href={"/"}
                      className=" text-gray-500 hover:text-indigo-500 flex items-center gap-2"
                    >
                      <i className="fa-regular fa-pen-to-square text-indigo-500"></i>
                      <span> Exit Portal {"  > "}</span>
                    </Link>
                  ) : (
                    <Link
                      href={"/dashboard"}
                      className=" text-gray-500 hover:text-indigo-500 flex items-center gap-2"
                    >
                      <i className="fa-solid fa-house text-indigo-500"></i>
                      <span className=" text-gray-500 hover:text-indigo-500">
                        {" "}
                        Home {" > "}{" "}
                      </span>
                    </Link>
                  )}

                  <span
                    className=" text-gray-500 hover:text-indigo-500 cursor-pointer"
                    onClick={() => back()}
                  >
                    {" "}
                    Go Back{" "}
                  </span>
                </div>

                {children}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Navbar Here</h1>
            {children}
          </div>
        )}
      </div>
    </>
  );
}
