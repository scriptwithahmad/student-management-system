import Image from "next/image";
import Link from "next/link";

const JsonData = [
  {
    title: "Admin",
    url: "/demo.png",
    link: "/login",
  },
  {
    title: "Instructor",
    url: "/demo.png",
    link: "/teacher-portal",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-200">
      <div className="min-h-screen max-w-[900px] md:m-auto grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center mx-4">
        {JsonData.map((v, i) => {
          return (
            <div
              key={i}
              className="relative h-52 bg-gradient-to-br from-[#8C94DC] to-[#BBDEFF] flex items-center justify-between rounded-lg px-5 py-3"
            >
              <div>
                <p className="text-gray-200 px-1 text-sm uppercase">Login as</p>
                <h1 className="text-6xl font-bold text-white mb-4 z-40 relative">
                  {v.title}
                </h1>
                <Link
                  href={v.link}
                  className="flex items-center gap-2 bg-[#eee] px-5 w-fit py-2.5 rounded-full text-gray-600 text-xs hover:bg-white transition-colors"
                >
                  Get Started
                  <i className="fa-solid fa-arrow-right text-gray-500"></i>
                </Link>
              </div>
              <div className="w-36 absolute top-4 right-2">
                <Image
                  src={v.url}
                  width={900}
                  height={900}
                  priority="true"
                  alt="Image Here"
                  className=" w-full h-full select-none"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
