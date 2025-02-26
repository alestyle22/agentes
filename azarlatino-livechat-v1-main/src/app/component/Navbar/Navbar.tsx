import React, { useEffect } from "react";
import logo from "../../../../public/azarlogo.svg";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-[#29074b] dark:border-gray-700">
      <div className="container px-10 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <Image src={logo} alt="Azar Latino Logo" width={200} height={20} />
        </a>
        <div className="w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="https://azarlatino1.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline py-1 px-3 rounded md:p-0  text-[#FFA64D] md:bg-transparent"
                aria-current="page"
              >
                ir a Azarlatino <FaChevronRight className="ml-1 " />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
