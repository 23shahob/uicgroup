import React from "react";
import MainBack from "../assets/images/main_back.webp";
import Mountain from "../assets/images/mountain.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Hero = () => {
  return (
    <div id="hero" className="relative">
      <img className="w-screen" src={MainBack} alt="Main Background Img" />
      <img className="absolute bottom-0" src={Mountain} alt="Mountain Img" />
      <div className="mx-auto max-w-[1200px]">
        <div className="absolute top-[25%] max-w-[506px]">
          <h1 className="mb-4 font-bold text-white lg:text-[48px] lg:leading-[58px]">
            We offer digital solutions
          </h1>
          <p className="font-medium text-[#FFFFFF99] sm:mb-[52px] lg:text-lg lg:leading-[22px]">
            IN ANY DIFFICULTY
          </p>
          <div className="flex items-center gap-4">
            <Link to="/portfolio">
              <button className="group flex items-center gap-3 rounded-xl border border-[#00A795] bg-[#1A8377] px-5 py-[10px] text-[13px] font-semibold text-white transition duration-300 ease-in-out hover:bg-[#00A795] sm:text-[16px]">
                <p>Portfolio</p>
                <span className="flex h-4 w-4 -rotate-45 items-center justify-center rounded-full bg-[#4CC1B5] transition duration-300 ease-in-out group-hover:rotate-0 md:h-6 md:w-6">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
            <a href="tel: +998 71 200 70 07">
              <button className="group flex items-center gap-3 rounded-xl border border-white px-5 py-[10px] text-[13px] font-semibold text-white transition duration-500 ease-in-out hover:border hover:border-[#00A795] hover:bg-[#00A795] sm:text-[16px]">
                <p>Call</p>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 transition duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-[#4CC1B5] md:h-6 md:w-6">
                  <FiPhoneCall />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
