import React from "react";
import proImg from "../assests/top-nav.png";

const HandoutProject = () => {
  return (
    <div className="md:mx-20 mt-6">
      <div className=" flex w-full ">
        <div className="w-1/2 py-5">
          <h3 className="text-[24px] font-bold text-transparent leading-2 pr-[5px] bg-clip-text bg-gradient-to-r from-fuchsia-800 via-red-400 to-orange-700 py-2 ">
            Team Based Project
          </h3>
          <h1 className="font-bold text-[30px]"> Handout </h1>
        </div>

        <div className=" w-1/2 py-5">
          <div className="flex justify-between ">
            <div>
              <p className="font-bold text-[30px] py-2">My Role</p>
              <p className="text-[20px]">Frontend developer </p>
            </div>
            <div>
              <p className="font-bold text-[30px] py-2">Timeline</p>
              <p className="text-[20px]">Oct-Dec 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={proImg} alt="proImg" className=" h-100 " />
      </div>

      <div className="flex justify-between items-center">
        <div className="overview">
          <h1 className="Project Overview  text-[30px] font-bold">Overview</h1>
          <p className="py-5  md:text-[24px]">
            <b>Handout</b> is a platform that allows people to give out useful
            but unwanted personal items for free or a give away price to others
            who may need them.
          </p>
          <p className="py-5  md:text-[24px]">
            This project was a housemanship program undergone at Stutern, a team
            based project developed by a group of designers and developers
            (front end and back end) and also led by a teamlead. The project was
            built bottom-Up. ClickUp was used for the breakdown of tasks and to
            assign task to developers. Github was used for collaboration, all
            developers deploy their code and all code were merged together.
          </p>
        </div>
      </div>
      <a href="/">
        <button
          className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
        >
          Next Project
        </button>
      </a>
    </div>
  );
};

export default HandoutProject;
