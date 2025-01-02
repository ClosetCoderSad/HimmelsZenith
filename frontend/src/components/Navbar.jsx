import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { DarkModeContext } from "../context/DarkModeContext";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const { isDarkMode } = useContext(DarkModeContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="nav fixed top-0 left-0 right-0 z-50 shadow-sm bg-background flex items-center justify-between py-5 px-4 sm:px-24 font-medium">
      <Link to="/">
        <img
          src={isDarkMode ? assets.navLogoWhite : assets.navLogoBlack}
          className="w-32 sm:w-44 h-auto"
          alt=""
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-text_2">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-underline hidden"></hr>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-underline hidden"></hr>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-underline hidden"></hr>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-underline hidden"></hr>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4 sm:gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.4"
          className="w-7 cursor-pointer"
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          style={{
            stroke: "var(--color)", // Use the --text CSS variable for the stroke color
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM21 21l-4.35-4.35"
          />
        </svg>

        <div className="group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.2"
            className="w-[26px] cursor-pointer"
            style={{ stroke: "var(--color)" }} // This applies the color from the 'text' CSS variable
            onClick={() => (token ? null : navigate("/login"))} // onClick event
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14c3.314 0 6-2.686 6-6S15.314 2 12 2 6 4.686 6 8s2.686 6 6 6zM12 14c-2.237 0-4.16.896-5.657 2.343C5.448 17.69 5 19.207 5 20h14c0-.793-.448-2.31-1.343-3.657C16.16 14.896 14.237 14 12 14z"
            />
          </svg>

          {/*Dropdown Menu*/}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black ease-in-out duration-500">
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black ease-in-out duration-500"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-black ease-in-out duration-500"
                >
                  Log out
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.3"
            className="w-[26px] cursor-pointer"
            style={{ stroke: "var(--color)" }} // Apply color from 'text' CSS variable
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l3.6 7.2L8.5 14H18l1.4-3.8L21 3H5M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
            />
          </svg>

          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-color text-background aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <div className="hidden sm:block">
          <DarkModeToggle />
        </div>

        {/*-------Hamburger Nav for small screens-------*/}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-40 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex justify-between items-center gap-4 p-3 cursor-pointer hover:text-black ease-in-out duration-500"
          >
            <div className="flex items-center gap-2">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} />
              <p>Back</p>
            </div>
            <div className="block sm:hidden">
              <DarkModeToggle />
            </div>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 text-center hover:text-black ease-in-out duration-500"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-y text-center hover:text-black ease-in-out duration-500"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b text-center hover:text-black ease-in-out duration-500"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 text-center hover:text-black ease-in-out duration-500"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
