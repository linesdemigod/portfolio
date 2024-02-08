import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Sidenav from "./Sidenav";

function Navbar() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  const toggleNav = () => {
    setshowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <nav className="relative mx-auto p-6 bg-primary">
        <div className="container flex flex-row gap-3 items-center justify-between z-10">
          <div className="flex flex-row gap-3 justify-between items-center">
            <a href="/" className="text-2xl">
              <img src="" alt="" />
              {/* <img src="#" alt="CodeGenTech" className="h-10"> */}
            </a>
          </div>
          <div className="hidden gap-5 justify-start items-start md:flex">
            <Link
              to="/"
              className="font-semibold text-textPrimary hover:text-secondary"
            >
              Home
            </Link>

            <HashLink
              smooth
              to="/#about"
              className="font-semibold text-textPrimary hover:text-secondary"
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/#experience"
              className="font-semibold text-textPrimary hover:text-secondary"
            >
              Experience
            </HashLink>
            <HashLink
              to="/#portfolio"
              className="font-semibold text-textPrimary hover:text-secondary"
            >
              Portfolio
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className="font-semibold text-textPrimary hover:text-secondary"
            >
              Contact
            </HashLink>
          </div>

          <button
            id="menu-toggle"
            onClick={() => toggleNav()}
            className="block md:hidden text-textPrimary hover:text-gray-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${showMobileMenu ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="open-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${showMobileMenu ? "block" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="close-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`${showMobileMenu ? "block" : "hidden"} md:hidden`}
        id="menu"
      >
        <Sidenav handleShowMenu={showMobileMenu ? "" : "-translate-x-full"} />
      </div>
    </>
  );
}

export default Navbar;
