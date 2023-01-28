/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /* trying the dark mode toggle
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

*/

  return (
    <div className="w-full top-0 fixed md:px-20 md:pb-10 ">
      <nav className=" ">
        <div
          className="container flex items-center justify-between text-white 
"
        >
          <div className="font-bold text-xl font-barlow  ">
            Victoria Oluwaferanmi
          </div>
          <div className="hidden lg:flex items-center font-barlow   ">
            <a
              href="#experience"
              className="inlinepx-3 py-2  hover:text-[#676767]  "
            >
              About
            </a>
            <a
              href="https://victoriaoluwaferanmi.medium.com/"
              className="px-3 py-2 rounded-full hover:text-[#676767] "
            >
              Articles
            </a>
            <a href="#" className="px-3 py-2 rounded-full hover:text-[#676767]">
              Projects
            </a>
            <a href="#contact" className="block px-3 py-2 hover:text-[#676767]">
              Contact
            </a>
            {/*
            <button
              className="bg-green-300 rounded-lg text-light-50"
              onClick={handleThemeSwitch}
            >
              Darkmode
            </button>
  */}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden rounded-full px-3 py-2 text-white hover:bg-transparent"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="bg-black py-4 md:hidden">
            <div className="container mx-auto px-4">
              <a
                href="#experience"
                className="block px-3 py-2 rounded-full text-white hover:text-[#676767]"
              >
                About
              </a>
              <a
                href="https://victoriaoluwaferanmi.medium.com/"
                className="block px-3 py-2 rounded-full text-white hover:text-[#676767]"
              >
                Articles
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-full text-white hover:text-[#676767]"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-full text-white hover:text-[#676767]"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
