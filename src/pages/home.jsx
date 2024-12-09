import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../components/profileImage";
import About from "../components/about"

export default function Home() {
  return (
    <div className="container mx-auto py-4 px-4 bg-white shadow-md overflow-hidden ">
      <div className="flex flex-wrap  mt-4">
        <div className="w-full md:w-1/3 px-4  md:justify-items-center mb-16">
          <ProfileImage />
          <div className=" font-serif">
            <h1 className="text-[3rem]  ">Victor Yohanna</h1>
            <h4 className="text-[1.5rem]">Front-End Engineer</h4>
            <div className="mt-10">
              <ul>
                <li className="mb-4 text-lg">
                  <Link to="/">About Me</Link>
                </li>
                <li className="mb-4 text-lg">
                  <Link to="/">Expertise</Link>
                </li>
                <li className="mb-4 text-lg">
                  <Link to="/">Experience</Link>
                </li>
                <li className="mb-4 text-lg">
                  <Link to="/">Projects</Link>
                </li>
                <li className="mb-4 text-lg">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 px-4 mt-4 ">
          <About />
        </div>
      </div>
    </div>
  );
}
