import React, { useEffect, useState } from "react";

const Header = ({ menuShow, setMenuShow }) => {
  const [normalMenu, setNormalMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleClickShowMenu = () => {
    setMenuShow(!menuShow);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 640) {
      setNormalMenu(true);
      setMenuShow(false);
    } else {
      setNormalMenu(false);
      setMenuShow(false);
    }
  }, [windowWidth]);

  return (
    <nav
      className={`overflow-hidden ${
        menuShow ? "bg-white min-h-screen" : ""
      } relative  text-white duration-200 py-6 z-50 `}
    >
      <i
        onClick={handleClickShowMenu}
        className="bx bx-menu-alt-right sm:hidden absolute right-4 text-xl hover:text-blue-300 cursor-pointer"
      ></i>
      {menuShow && (
        <i
          onClick={handleClickShowMenu}
          className="bx bx-x sm:opacity-0 absolute text-black right-4 z-10 text-xl hover:text-blue-300 cursor-pointer"
        ></i>
      )}
      <ul
        className={`grid absolute ${
          menuShow
            ? "right-0 left-0 text-black gap-8 top-1/2 -translate-y-1/2 text-center font-semibold "
            : "-right-full"
        } 
        ${normalMenu ? "left-0 right-0" : "-right-full"}
        sm:flex  sm:gap-16 justify-center`}
      >
        <li
          className={`${
            menuShow
              ? "hover:bg-blue-800 hover:text-white duration-200 py-1 px-5"
              : ""
          }`}
        >
          <a href="#">Home</a>
        </li>
        <li
          className={`${
            menuShow
              ? "hover:bg-blue-800 hover:text-white duration-200 py-1 px-5"
              : ""
          }`}
        >
          <a href="#description">About me</a>
        </li>
        <li
          className={`${
            menuShow
              ? "hover:bg-blue-800 hover:text-white duration-200 py-1 px-5"
              : ""
          }`}
        >
          <a href="#work">Work</a>
        </li>
        <li
          className={`${
            menuShow
              ? "hover:bg-blue-800 hover:text-white duration-200 py-1 px-5"
              : ""
          }`}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
