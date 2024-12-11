import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../components/profileImage";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div className="container mx-auto py-4 px-4 bg-white shadow-md overflow-hidden ">
      <div className="flex flex-wrap  mt-4">
        <div className="w-full md:w-1/3 px-4  md:justify-items-center mb-16">
          <ProfileImage />
          <div className=" font-serif">
            <h1 className="lg:text-[3rem] text-[2rem] ">Victor Yohanna</h1>
            <h4 className="lg:text-[1.5rem] text-[20px]">
              Frontend & Mobile App Developer
            </h4>
            <div className="mt-5 font-sans">
              <p>
                <b>Email:</b> victoryohanna@gmail.com
              </p>
              <p>
                <b>Phone N0:</b> +2348131595178
              </p>
            </div>
            <div className="mt-10 hidden lg:block text-lg">
              <ul>
                <li className="mb-2 ">
                  <Link to="/">About</Link>
                </li>
                <li className="mb-2 ">
                  <Link to="/">Experience</Link>
                </li>
                <li className="mb-2 ">
                  <Link to="/">Projects</Link>
                </li>
                <li className="mb-4 ">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex  text-[1.5rem] mt-10">
              <Link to="/" className="pr-6">
                <FaLinkedin />
              </Link>
              <Link to="/" className="pr-6">
                <FaTwitter />
              </Link>
              <Link to="/" className="pr-6">
                <FaFacebook />
              </Link>
              <Link to="/" className="pr-6">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 px-4 mt-4 ">
          <div>
            <About />
          </div>
          <div>
            <Experience />
          </div>
          <div>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
