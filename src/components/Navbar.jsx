import React, { useState } from "react";
import pic from "../assets/ashish.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Title */}
          <div className="flex space-x-3 items-center">
            <img src={pic} className="h-12 w-12 rounded-full border-2 border-green-400" alt="Profile" />
            <div>
              <h1 className="font-bold text-xl cursor-pointer">
                Ashish<span className="text-green-500 text-2xl">Rajput</span>
              </h1>
              <p className="text-sm text-gray-600 -mt-1">Java Developer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div>
            <ul className="hidden md:flex space-x-10 font-semibold text-gray-700">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="cursor-pointer relative group"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-green-600"
                  >
                    {text}
                  </Link>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* Hamburger Icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden text-gray-800 cursor-pointer">
              {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="bg-white md:hidden shadow-md">
            <ul className="flex flex-col h-screen items-center justify-center space-y-6 text-xl font-semibold text-gray-700">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setMenu(false)}
                    className="hover:text-green-500"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Extra space to avoid content hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
