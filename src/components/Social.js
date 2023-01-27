import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/victoria-oluwaferanmi-463352116/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/VictoriaOluwaferanmi",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:victoriaoluwaferanmi@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1f7ylDkG1AQay27S2pHQC4ClNAO4vHpoi/view?usp=sharing",
    },
  ];

  return (
    <div className=" flex lg:flex ">
      {links.map(({ id, child, href, download }) => (
        <div
          key={id}
          className={"flex justify-between w-30 h-14  bg-transparent "}
        >
          <a
            href={href}
            className="flex justify-between items-center w-fit text-white p-4"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Social;
