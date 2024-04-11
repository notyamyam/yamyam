import React from "react";

import { RiSkullLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192F] text-gray-300">
      <div>
        <RiSkullLine size={75} color="#fff" />
      </div>

      <div>
        <ul className="flex cursor-pointer space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>

      {/* Mobile Menu  */}
      <div className="hidden">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
