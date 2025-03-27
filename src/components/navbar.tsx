import { Link } from "react-router-dom";
import newLogo from "../assets/images/logo.svg";
import { useState, useEffect } from "react";
import Icon from "../assets/icon";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [height, setHeight] = useState("80px");
  const mobileNavHandler = () => {
    setHeight((prev) => (prev === "80px" ? "100vh" : "80px"));
  };

  useEffect(() => {
    if (height === "100vh") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [height]);

  const routes = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
    },

    {
      name: "Solutions",
      href: "/solutions",
    },
    {
      name: "News & Insights",
      href: "/news",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <nav
      className="fixed top-0 w-full mt-3 border lg:border-none newNav px-8 lg:px-[8rem] new_ff z-50 transition-all duration-300 ease-linear overflow-hidden"
      style={{
        height: height,
        alignItems: height === "80px" ? "center" : "start",
        backgroundColor: height === "80px" ? "#F9FAFBCC" : "#ffffff",
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-10">
          <img
            src={newLogo}
            alt="app_logo"
            title="VendStash"
            className=""
          />
        </div>

        <div className="flex gap-5">
          <div className="hidden lg:flex items-center gap-10">
            {routes.map((route) => {
              return (
                <Link to={route.href} key={route.name}>
                  {route.name}
                </Link>
              );
            })}
          </div>
          <div className="lg:flex items-center gap-10 font-medium hidden">
            <Link
              to={"/signup"}
              className="bg-[#5BFB94] justify-center flex items-center gap-2 px-3 py-4 text-[#000] rounded-lg w-full whitespace-nowrap text-sm"
            >
               Get Started
               <Icon name="getStartedIcon"  />
            </Link>
          </div>
        </div>

        <div
          className='lg:hidden border border-[#E5E7EB] py-[0.25rem] px-[0.35rem] rounded bg-[#FFFFFF] mobileNavBtn'
          onClick={mobileNavHandler}>
         <Icon name="getStartedIcon"  />
        </div>
      </div>
      <div className="flex flex-col mt-8 gap-8">
        {routes.map((route) => {
          return (
            <Link
              to={route.href}
              key={route.name}
              className="flex items-center justify-between"
              onClick={() => setHeight("80px")}
            >
              <p className="text-[#1D2939] font-semibold text-lg">
                {route.name}
              </p>
             
            </Link>
          );
        })}
      </div>

      

      <div className="absolute w-full left-0 flex flex-col gap-4 p-8">
       
        <Link
          to={"/signup"}
          onClick={() => setHeight("80px")}
          className="bg-[#5BFB94] w-full h-[45px] justify-center flex items-center gap-2 px-2 py-1 text-[#F9FAFB] rounded-lg"
        >
          Get Started
          <Icon name="getStartedIcon"  />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
