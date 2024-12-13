import React from "react";
import { Link } from "react-scroll";
import ProfileImage from "../components/profileImage";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";


export default function Home() {
  const { ref: myRef, inView: servicesSectionIsVisible } = useInView();
  return (
    <div className="container mx-auto py-4 px-4 bg-white shadow-md ">
      <div className="flex flex-wrap  mt-4 scroll-my-11">
        <div className="w-full md:w-1/3 px-4  md:justify-items-center mb-16 static">
          <ProfileImage />
          <div className=" font-serif">
            <h1 className="lg:text-[3rem] text-[2rem] ">Victor Yohanna</h1>
            <h4 className="lg:text-[1.5rem] text-[20px]">Software Engineer</h4>
            <div className="mt-5 font-sans">
              <p>
                <b>Email:</b> victoryohanna@gmail.com
              </p>
              <p>
                <b>Phone N0:</b> +2348131595178
              </p>
            </div>
            {/* <div className="mt-10 hidden lg:block text-lg">
              <ul>
                <li className="mb-2 hover:opacity-50">
                  <Link
                    to="about"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2 hover:opacity-50">
                  <Link
                    to="experience"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Experience
                  </Link>
                </li>
                <li className="mb-2 hover:opacity-50">
                  <Link
                    to="projects"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Projects
                  </Link>
                </li>
                <li className="mb-4 ">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div> */}
            <div className="flex  text-[1.5rem] mt-10">
              <div className="pr-6">
                <Link to="/">
                  <FaLinkedin />
                </Link>
              </div>
              <div className="pr-6">
                <Link to="/">
                  <FaTwitter />
                </Link>
              </div>
              <div className="pr-6">
                <Link to="/">
                  <FaFacebook />
                </Link>
              </div>
              <div className="pr-6">
                <Link to="/">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-2/3 px-4 mt-4 md:max-h-screen md:overflow-y-auto"
          id="about"
          ref={myRef}
        >
          <div className={`${servicesSectionIsVisible ? "about" : ""}`}>
            <About />
          </div>
          <div id="experience" ref={myRef}>
            <Experience />
          </div>
          <div id="projects" ref={myRef}>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
