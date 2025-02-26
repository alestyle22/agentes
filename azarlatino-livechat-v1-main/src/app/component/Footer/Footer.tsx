import React from "react";
import { Pacifico } from "next/font/google";
import { ImClubs } from "react-icons/im";
import Image from "next/image";
import logo from "../../../../public/azarlogo.svg";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

function Footer() {
  return (
    <footer className="bg-[#120d1c] ">
      <div className="container mx-auto w-full  px-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Image
                src={logo}
                alt="Azar Latino Logo"
                width={200}
                height={20}
              />
            </a>
          </div>
          {/* <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Resources
              </h2>
              <ul className="text-white  font-medium">
                <li>
                  <a href="" className="hover:underline">
                    Slot Games
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Follow us
              </h2>
              <ul className="text-white  font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/LontchiFrank"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center ">
            © 2024 . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
