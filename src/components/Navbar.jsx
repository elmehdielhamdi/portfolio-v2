import React from "react";
import {
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineChat,
  HiX,
  HiMenu,
} from "react-icons/hi";
import logo from "../assets/img/logo-2.webp";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="z-10 fixed top-0 drop-shadow md:drop-shadow-none md:relative bg-white w-full h-20 flex items-center">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="#" aria-label="logo">
            <img src={logo} alt="" className="h-9" />
          </a>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              <HiMenu className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10 items-center">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900 capitalize"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base font-medium text-gray-500 hover:text-gray-900 capitalize"
            >
              About
            </a>
            <a
              href="#work"
              className="text-base font-medium text-gray-500 hover:text-gray-900 capitalize"
            >
              Work
            </a>
            <a
              href="#career"
              className="text-base font-medium text-gray-500 hover:text-gray-900 capitalize"
            >
              Career
            </a>
            <a href="#contact" className="btn px-4 py-2 text-base font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div
        className={`w-64 sm:w-72 ml-auto right-0 absolute p-2 top-0 transition origin-top-right md:hidden transform duration-200 ease-out ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="container pt-5 pb-6">
            <div className="flex items-start justify-between">
              <div className="pt-2">
                <nav className="grid gap-y-8">
                  <a
                    href="#"
                    className="-my-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <HiOutlineHome className="text-primary h-6 w-6" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </a>
                  <a
                    href="#about"
                    className="-my-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <HiOutlineIdentification className="text-primary h-6 w-6" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      About
                    </span>
                  </a>
                  <a
                    href="#work"
                    className="-my-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <HiOutlineBriefcase className="text-primary h-6 w-6" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Work
                    </span>
                  </a>
                  <a
                    href="#career"
                    className="-my-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <HiOutlineChartBar className="text-primary h-6 w-6" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Career
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className="btn -my-3 px-3 py-2 text-base font-medium text-white"
                  >
                    <HiOutlineChat className="text-white-600 h-6 w-6" />
                    <span className="ml-3">Contact</span>
                  </a>
                </nav>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                  onClick={() => setOpen(false)}
                  aria-label="Close Menu"
                >
                  <HiX className="h-6 w-6 " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
