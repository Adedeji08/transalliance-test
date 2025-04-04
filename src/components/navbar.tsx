import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import newLogo from "../assets/images/logo.svg";
import Icon from "../assets/icon";

const Navbar = () => {
  const [height, setHeight] = useState("80px");
  const [hasShadow, setHasShadow] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const routes = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "News & Insights", href: "/news" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`lg:fixed top-0 w-full max-w-screen-2xl text-white  my-gradient newNav px-8 lg:px-[8rem] new_ff z-50 transition-all duration-300 ease-linear overflow-hidden bg-transparent ${
        hasShadow ? "shadow-md bg-white" : "text-white"
      }`}
      style={{
        height: height,
        alignItems: height === "80px" ? "center" : "start",
        backgroundColor: height === "80px" ? "transparent" : "#F9FAFBCC",
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-10">
          <img src={newLogo} alt="app_logo" title="VendStash" />
        </div>

        <div className="flex gap-5 text-white">
          <div className="hidden lg:flex items-center gap-10">
            {routes.map((route) => (
              <Link to={route.href} key={route.name}>
                {route.name}
              </Link>
            ))}
          </div>
          <div className="lg:flex items-center text-white gap-10 font-medium hidden">
            <Link
              to="/#signup"
              className="bg-[#5BFB94] justify-center flex items-center gap-2 px-3 py-4  rounded-lg w-full whitespace-nowrap text-sm"
            >
              Get Started
              <Icon name="getStartedIcon" />
            </Link>
          </div>
        </div>

        <div
          className="lg:hidden border border-[#E5E7EB] py-[0.25rem] px-[0.35rem] rounded bg-[#FFFFFF] mobileNavBtn"
          onClick={mobileNavHandler}
        >
          <Icon name="getStartedIcon" />
        </div>
      </div>

      <div className="flex flex-col mt-8 gap-8">
        {routes.map((route) => (
          <Link
            to={route.href}
            key={route.name}
            className="flex items-center justify-between"
            onClick={() => setHeight("80px")}
          >
            <p className="font-semibold text-lg">{route.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
