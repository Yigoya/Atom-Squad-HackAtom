import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
// import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 text-white">
      <section className="container">
        <div className=" flex justify-center items-center text-center py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              {/* <img src={} alt="Logo" className="max-w-[50px]" /> */}
              Atom Squad
            </h1>
            <p className="">
              Atom Squad is a team of developers creating innovative web and app
              solutions for businesses.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Ethiopia, Addis Ababa</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+251961304325</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links */}
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @Copyright 2024 All rights reserved || Made with <b>Atom Squad</b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
