import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";

// ASIDE LINKS ADDED
var adminNavLinks = [
  { href: "/dashboard", lable: "Dashboard", icon: "fa-solid fa-chart-simple" },
  { href: "/dashboard/batch", lable: "Batch", icon: "fa-solid fa-list" },

  {
    href: "/dashboard/students",
    lable: "Students",
    icon: "fa-regular fa-calendar",
  },
];

var userNavLinks = [
  { href: "/dashboard", lable: "Dashboard", icon: "fa-solid fa-chart-simple" },

  {
    href: "/dashboard/students",
    lable: "Students",
    icon: "fa-regular fa-calendar",
  },
];

const Aside = () => {
  const pathname = usePathname();
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  // set the Toggle Value False if window width should be md, or sm -------
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    };

    // Set initial toggle state based on the window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      style={{
        transition: ".6s",
        width: toggle ? "200px" : "48px",
      }}
      className={`mt-4 overflow-hidden flex flex-col justify-between ${
        toggle ? "pr-4" : "pr-0"
      }`}
    >
      <div className="flex flex-col relative">
        <div className="flex flex-1 flex-col justify-between h-full my-4">
          {user ? (
            <ul className="text-sm">
              {adminNavLinks.map((v, i) => {
                return (
                  <ul key={i}>
                    <Link
                      href={v.href}
                      className={`relative py-1 px-4 flex items-center rounded-none lg:rounded-r-full hover:bg-[#3e1e9707] group cursor-pointer ${
                        pathname === v.href
                          ? "group cursor-pointer lg:bg-[#F6F5FD] md:bg-transparent"
                          : ""
                      }`}
                    >
                      <i
                        className={`${v.icon} text-base ${
                          pathname === v.href
                            ? "text-[#3E1E97]"
                            : "text-gray-500"
                        }`}
                      ></i>
                      <div
                        style={{
                          opacity: toggle ? "1" : "0",
                          transition: ".5s",
                        }}
                        className={`ml-3 ${
                          pathname === v.href
                            ? "text-[#3E1E97] font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {v.lable}
                      </div>
                    </Link>
                  </ul>
                );
              })}
            </ul>
          ) : (
            <ul className="text-sm">
              {userNavLinks.map((v, i) => {
                return (
                  <ul key={i}>
                    <Link
                      href={v.href}
                      className={`relative py-1 px-4 flex items-center rounded-none lg:rounded-r-full hover:bg-[#3e1e9707] group cursor-pointer ${
                        pathname === v.href
                          ? "group cursor-pointer lg:bg-[#F6F5FD] md:bg-transparent"
                          : ""
                      }`}
                    >
                      <i
                        className={`${v.icon} text-base ${
                          pathname === v.href
                            ? "text-[#3E1E97]"
                            : "text-gray-500"
                        }`}
                      ></i>
                      <div
                        style={{
                          opacity: toggle ? "1" : "0",
                          transition: ".5s",
                        }}
                        className={`ml-3 ${
                          pathname === v.href
                            ? "text-[#3E1E97] font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {v.lable}
                      </div>
                    </Link>
                  </ul>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="pl-2 mb-3">
        <span onClick={() => setToggle(!toggle)}>
          <i
            style={{
              transition: ".5s",
            }}
            className={`asideAnimate px-2 bg-gray-50 text-gray-600 active:bg-gray-300 cursor-pointer text-lg p-1 rounded-lg ${
              toggle ? "fa-solid fa-angle-left" : "fa-solid fa-angle-right"
            }`}
          ></i>
        </span>
      </div>
    </aside>
  );
};

export default Aside;
