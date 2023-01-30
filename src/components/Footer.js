import React from "react";
import Social from "./Social";

const Footer = () => {
  const nav = [
    {
      id: 1,
      name: "About",
      href: "#about",
    },

    {
      id: 2,
      name: "Services",
      href: "#services",
    },

    {
      id: 3,
      name: "Contact",
      href: "#contact",
    },
    {
      id: 4,
      name: "Articles",
      href: "#contact",
    },
    {
      id: 4,
      name: "Project",
      href: "#contact",
    },
    {
      id: 5,
      name: "Articles",
      href: "https://victoriaoluwaferanmi.medium.com/",
    },
  ];

  return (
    <div className="md:px-20 md:mt-60 " id="about ">
      <div className="dark:text-white text-black pt-8 text-[60px] w-full ">
        Ready to Connect?
      </div>
      <a
        href="#contact"
        className="text-4xl md:text-[60px] font-bold text-transparent leading-2 pr-[5px] bg-clip-text bg-gradient-to-r from-fuchsia-800 via-red-400 to-orange-700 py-2 hover:bg-light-100 hover:transition-all  duration-500 h-0.5 "
      >
        Start a conversation
      </a>

      <div className="flex w-full mt-5">
        <div className=" w-1/2 ">
          <h1 className="text-white  pt-8 ">Victoria Oluwaferanmi</h1>
          <div className="text-white ">
            <p>Nigeria, OyoState, Ibadan.</p>
          </div>
          <Social />
        </div>

        <div className=" w-1/2">
          <div className="grid md:grid-cols-3 sm:grid-cols-6 gap-1 text-center py-4  sm:px-0 text-[white]">
            {nav.map(({ id, href, name }) => (
              <div key={id} className=" hover:scale-105 duration-500 py-2">
                <a href={href}>
                  <div className="mt-4">{name}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="text-sm p-4 text-center text-white">
        Designed by me © Victoria Oluwaferanmi
      </div>
    </div>
  );
};

export default Footer;
