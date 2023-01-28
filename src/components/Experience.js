import React from "react";
import MyServices from "./MyServices";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import reactImage from "../assests/react.png";
import nextjs from "../assests/nextjs.png";
import github from "../assests/github.png";
import tailwind from "../assests/tailwind.png";
import figma from "../assests/figma.png";
import firebase from "../assests/firebase.png";
import bootstrap from "../assests/bootstrap.png";
import mui from "../assests/MUI.png";
import stripe from "../assests/stripe.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
    },

    {
      id: 7,
      src: github,
      title: "GitHub",
    },
    {
      id: 8,
      src: figma,
      title: "Figma",
    },
    {
      id: 9,
      src: firebase,
      title: "Firebase",
    },
    {
      id: 10,
      src: bootstrap,
      title: "Bootstrap",
    },
    {
      id: 11,
      src: mui,
      title: "Material UI",
    },
    {
      id: 12,
      src: stripe,
      title: "Stripe",
    },
  ];

  return (
    <div id="experience" className="px-10 my-10 w-full  md:px-20 md:my-20">
      <div className=" flex flex-col justify-center w-full h-full text-white ">
        <section className="container items-center lg:flex">
          <div className="w-full md:w-1/2 ">
            <h1 className=" text-[24px] md:text-[32px] font-bold text-transparent leading-2 pr-[5px] bg-clip-text bg-gradient-to-r from-fuchsia-800 via-red-500 to-orange-400">
              A Frontend Developer
            </h1>
            <h1 className="text-[16px] md:text-[30px]">That's Me</h1>
          </div>

          <div className=" w-full md:w-1/2 pt-5">
            <p className="text-justify leading-relaxed ">
              My front-end journey started with <b> Stutern </b> in the year
              2022. Where I learned the fundamentals up to an advanced level of
              software engineering. In the process of learning, I was not only
              skilled with recent front-end technologies but also with human
              skills. During this period, aside from working on some personal
              projects, I worked with a team of developers and designers to
              develop a project (Handout).
            </p>
            <p className="py-3">
              In 2021, I participated in the SheCodeAfrica 3-months UI/UX mentee
              program, where I got experience in user research, wireframing,
              UI/UX design principles, and using design tools. These have been
              applicable in my front-end journey.
            </p>
            <p className="py-3">
              I have a national diploma in computer science and I am pursuing a
              degree in computer science which contributed to my background in
              computer fundamentals, programming, System design and some other
              computer science-related courses. As much as I am passionate about
              building user interfaces, I enjoy learning new things and
              networking with people of related interests.
            </p>
            <p className="py-5">
              I am working on improving my technical skills and social skills. I
              am open to internship programs, job opportunities, open-source
              projects, neworking and other software developer opportunities.
            </p>
          </div>
        </section>

        <div className="">
          <p className="text-4xl font-bold my-10"> Experience </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-2 text-center py-4 px-4 sm:px-0">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt="" className="w-fit h-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <MyServices />
    </div>
  );
};

export default Experience;
