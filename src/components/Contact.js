import React, { useState } from "react";
import Social from "./Social";
import "react-phone-number-input/style.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gzx636d",
        "template_e9ey0ff",
        form.current,
        "3qukWeboB6K74wyun"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent sucessfully");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
    // clear all input in the form
    setUserName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="md:px-20 md:mb-20" id="contact">
      <section className="container items-center lg:flex  ">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left w-full md:w-1/2  ">
          <h1 className="text-4xl md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 via-red-500 to-orange-400">
            Get in touch
          </h1>
          <p className="max-w-xl leading-relaxed md:text-[20px] text-gray-300 sm:mx-auto lg:ml-0">
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 24 hours.
          </p>
          <Social />
        </div>
        <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start w-full md:w-1/2 md:mt-5 ">
          <form className="w-full " ref={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap mx-3 mt-[42px]">
              <div className="w-full md:full px-3 mb-6 md:mb-0 dark:text-white  text:black">
                <label
                  className="block text-[14px]  font-[500] tracking-wid
                   mb-2"
                  htmlFor="grid-first-name"
                >
                  Your Name
                </label>
                <input
                  className="block w-full bg-[white]  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="user_name"
                  type="text"
                  placeholder="Name"
                  value={user_name}
                  required
                  onChange={handleUserName}
                />
              </div>
            </div>
            <div className="flex flex-wrap mx-3 mt-[42px]">
              <div className="w-full md:w-full px-3 mb-6 md:mb-0 dark:text-white  text:black">
                <label
                  className="block text-[14px] font-[500] tracking-wide 
                   mb-2"
                  htmlFor="grid-first-name"
                >
                  Email Address
                </label>
                <input
                  className="block w-full bg-[white] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="email"
                  type="email"
                  placeholder="Enter a valid email"
                  onChange={handleEmail}
                  value={email}
                  required
                />
              </div>

              <div className="w-full px-3 my-6 md:mb-0 mt-[42px] ">
                <label
                  className="block text-[14px] font-[500] tracking-wide dark:text-white
                   mb-2"
                  htmlFor="grid-first-name"
                >
                  Tell me a bit of what you are looking for ?
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  name="message"
                  className="block w-full bg-[white] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={message}
                  onChange={handleMessage}
                  required
                />
                <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                  <button
                    className="block w-fit px-6 py-2 mt-4 text-center text-white  bg-[#ac2874] rounded"
                    type="submit"
                    value="Send"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
