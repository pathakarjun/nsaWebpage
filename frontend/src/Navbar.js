import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showMobile = () => {
    if (window.innerWidth <= 870) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  window.addEventListener("resize", showMobile);

  const menuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 stroke-white stroke-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
  const timesIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 md:stroke-white stroke-2 md:text-[2rem]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
  return (
    <nav className="bg-primaryb h-20 flex items-center text-xl sticky top-0 z-[999]">
      <div className="flex h-20 w-screen items-center">
        <Link
          to="/"
          className="flex text-white ml-5 cursor-pointer text-[2rem] items-center justify-start"
          onClick={closeMobileMenu}
        >
          NSA
        </Link>
        <div
          onClick={handleClick}
          className="hidden md:block md:h-16 md:absolute md:top-0 md:right-0 md:-translate-x-full md:translate-y-1/4 md:text-[1.8rem] md:cursor-pointer"
        >
          <i>{click ? timesIcon : menuIcon}</i>
        </div>
        <div className="flex h-20 w-screen justify-end">
          <ul
            className={
              click
                ? "grid grid-cols-4 gap-0 justify-items-center list-none text-center w-max  mr-8 md:flex md:flex-col md:w-full md:h-screen md:absolute md:gap-7 md:top-20 md:opacity-100 md:transition-all md:duration-250 md:ease-in md:bg-secondary md:left-0 md:z-[1] md:justify-start"
                : "grid grid-cols-4 gap-0 justify-items-center list-none text-center w-max  mr-8 md:flex md:flex-col md:w-full md:h-screen md:absolute md:gap-7 md:top-20 md:-left-full md:opacity-100 md:transition-all md:duration-250 md:ease-in md:justify-start"
            }
          >
            <li className="h-20">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-white flex items-center px-1 py-4 h-full hover:border-b-4 hover:border-solid hover:border-white border-solid md:text-center md:p-8 md:w-full md:table md:hover:bg-white md:hover:text-secondary md:hover:rounded-none"
              >
                Home
              </Link>
            </li>
            <li className="h-20">
              <Link
                to="/resources"
                onClick={closeMobileMenu}
                className="text-white flex items-center px-1 py-4 h-full hover:border-b-4 border-white border-solid md:text-center md:p-8 md:w-full md:table md:hover:bg-white md:hover:text-secondary md:hover:rounded-none"
              >
                Resources
              </Link>
            </li>
            <li className="h-20">
              <Link
                to="/blog"
                onClick={closeMobileMenu}
                className="text-white flex items-center px-1 py-4 h-full hover:border-b-4 border-solid border-white md:text-center md:p-8 md:w-full md:table md:hover:bg-white md:hover:text-secondary md:hover:rounded-none"
              >
                Blogs
              </Link>
            </li>
            <li className="h-20">
              <Link
                to="/createBlog"
                onClick={closeMobileMenu}
                className="flex items-center px-1 pr-5 py-4 h-full md:block text-center md:mx-auto md:my-auto md:rounded md:w-7/12 md:bg-transparent text-white md:px-3.5 md:py-5 md:border md:border-solid md:border-white md:transition-all md:duration-250 md:ease-in md:hover:bg-white md:hover:text-primaryb md:hover:duration-200"
              >
                <button className=" lg:bg-transparent lg:border lg:border-solid lg:px-3 lg:py-3 lg:rounded-sm cursor-pointer lg:hover:bg-primary">
                  Create Blog
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
