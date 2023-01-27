import React from "react";
import service_1 from "../assests/icon.svg";
import softSkill from "../assests/softSkills.png";

const MyServices = () => {
  const services = [
    {
      id: 1,
      name: "What you can expect",
      logo: service_1,

      l1: "Responsive and functional websites",
      l2: "Simple, Clean and Efficient ",
      l3: "UI/UX Design to live",
    },
    {
      id: 2,
      name: "Softskills",
      logo: softSkill,
      paragraph: "Human skills I can deliver",
      l1: "Teamwork and collaboration",
      l2: "Communication ",
      l3: "Poblem solving and critical thinking",
    },
  ];
  return (
    <div className="flex items-center justify-center max-w-screen-lg w-full h-full text-white md:mx-20 ">
      <div className="w-full mt-6 grid grid-cols-1 md:gap-x-4  xs:grid-cols-2 md:grid-cols-2 xl:gap-x-10  ">
        {services.map((service) => (
          <div key={service.id} className="group relative ">
            <div className="h-[50px] w-full bg-transparent  lg:aspect-none lg:h-20 block"></div>
            <div className="text-[30px] text-black dark:text-white ">
              {service.name}
            </div>

            <ul className="py-8 ">
              <li className="list-disc">{service.l1} </li>
              <li className="list-disc">{service.l2} </li>
              <li className="list-disc">{service.l3} </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
