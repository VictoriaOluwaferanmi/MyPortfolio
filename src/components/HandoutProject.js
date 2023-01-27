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
            based project developed by a group of UI/UX designers and developers
            (front end and back end) and also led by a teamlead. The project was
            built bottom-Up.
            <p>
              I participated in the project development processes including
              defining, designing/prototyping, development, Testing,
              Implementation, Integration, and deployment. I worked on building
              the designs (prototype), their responsiveness, functionalities,
              integration, deployment, and aswel documentation.
            </p>
            ClickUp was used for the breakdown of tasks and to assign task to
            developers. Github was used for collaboration, all developers deploy
            their code and all code were merged together.
          </p>
        </div>
      </div>
      <div className="Summary">
        <h1 className="Summary  text-[30px] font-bold">Summary of work done</h1>
        <p className="py-5  md:text-[24px]">
          Working together with team of frontend developers, task assigned to me
          as a frontend developer was to work on different web pages, the layout
          and its functionalities. For every task, I wrote an
          article/documentation on how I developed the webpages and its
          functionalities.
          <a
            className=" underline text-[16px]"
            href="https://victoriaoluwaferanmi.medium.com/stutern-housemanship-handout-documentation-by-abodunrin-victoria-8a838b1676a8 "
          >
            {" "}
            Link the article{" "}
          </a>
        </p>
        <h1 className="Summary  text-[24px] font-bold">Technologies used</h1>
        <p className="py-5  md:text-[24px]">
          All UserInterfaces and User Experience design was built using Figma
          Handout was built with <b>React</b> , majorly styled with
          <b>Tailwind css </b> and <b>Javascript</b> for its functionalities.
          Some other frontend technologies/libaries were used just to mention a
          few, Material Icon, (to handle Api's), JS cookie, Swagger, Ant Design,
          etc.{" "}
          <a
            className=" underline text-[16px]"
            href="https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1.git "
          >
            {" "}
            Link to project code
          </a>
          <p>
            After development it was sucessfully hosted i.e live.
            <a
              className=" underline text-[16px]"
              href="https://stutern-handout.web.app/"
            >
              {" "}
              Click to view
            </a>
          </p>
        </p>
      </div>
      <a href="/" className="text-center ">
        <button
          className="rounded-lg px-4 py-3 m-2
           bg-white text-gray-700 font-bold text-lg text-center text-[30px] "
        >
          Next Project
        </button>
      </a>
    </div>
  );
};

export default HandoutProject;
