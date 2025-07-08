import React from "react";
import { FaLinkedin, FaGithub, FaReact, FaJava } from "react-icons/fa";
import { SiMysql, SiSpring } from "react-icons/si";
import pic from "../assets/ashish.jpg";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1 text-center md:text-left">
            <span className="text-xl text-gray-400 tracking-wider">
              Welcome To My World
            </span>

            <div className="flex justify-center md:justify-start items-center space-x-2 text-3xl md:text-5xl font-bold">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-cyan-400"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>

            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              I'm <span className="font-bold text-cyan-300">Ashish Rajput</span>, a passionate full-stack developer currently working with Java, Spring Boot,
              React.js, HTML, CSS, and JavaScript. I love solving real-world
              problems and building elegant backend systems.
            </p>

            {/* Social Media & Tech Stack */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Social Media */}
              <div className="space-y-4">
                <h1 className="font-semibold text-lg text-center md:text-left">
                  Connect With Me
                </h1>
                <div className="flex justify-center md:justify-start space-x-5">
                  <a
                    href="https://github.com/AshishRajput18"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-3xl hover:text-gray-300 transition duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rajput-ashish-880162369"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-3xl hover:text-blue-600 transition duration-300" />
                  </a>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h1 className="font-semibold text-lg text-center">
                  Working On
                </h1>
                <div className="flex gap-4 justify-center my-4">
                  <SiSpring className="text-4xl hover:scale-110 duration-300 cursor-pointer text-green-500" />
                  <FaJava className="text-4xl hover:scale-110 duration-300 cursor-pointer text-orange-600" />
                  <FaReact className="text-4xl hover:scale-110 duration-300 cursor-pointer text-blue-400" />
                  <SiMysql className="text-4xl hover:scale-110 duration-300 cursor-pointer text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Circular Image */}
          <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2 mt-10 md:mt-0">
            <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-300">
              <img
                src={pic}
                alt="Ashish Rajput"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
