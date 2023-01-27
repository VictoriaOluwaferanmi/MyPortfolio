import React from "react";
import { projectData } from "./projectData.js";

const Project = () => {
  // projects file
  const project = projectData;
  //setProject(data);

  return (
    <div
      name="work"
      className="w-full md:h-screen text-white bg-black  md:px-20"
    >
      <div className="max-w-[1000px] p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white">
            Projects
          </p>
          <h1 className="text-4xl md:text-[32px] font-bold text-transparent leading-2 pt-[5px] bg-clip-text bg-gradient-to-r from-fuchsia-800 via-red-500 to-orange-400">
            Check out some of my recent works
          </h1>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-gray-700 tracking-wider ">
                  {item.name}
                </span>
                <p className="font-bold text-gray-700">{item.about}</p>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      View Details
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
