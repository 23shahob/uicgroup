import React from "react";
import Img1 from "../../assets/images/img1.jpg";
import Img3 from "../../assets/images/img3.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const AboutSection = () => {
  return (
    <div className="bg-[rgb(30,30,32)] pb-[91px] pt-[180px]">
      <div className="mx-auto flex max-w-[1200px] justify-between px-4">
        <div className="flex gap-4">
          <div className="mt-[-81px]">
            <div className="h-[450px] w-[283px]">
              <img
                className="h-full w-full rounded-xl object-cover"
                src={Img1}
                alt="Img"
              />
            </div>
            <div className="mt-8 flex items-center gap-3 border-t-2 border-neutral-700 pt-5">
              <h3 className="text-5xl font-bold leading-[58px] text-white">
                10
              </h3>
              <h3 className="w-[170px] uppercase leading-[19px] text-[#00A795]">
                Annual qualification team
              </h3>
            </div>
          </div>
          <div className="h-[500px] w-[283px]">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={Img3}
              alt="Img"
            />
          </div>
        </div>
        <div>
          <p className="anima1 xs:text-[13px] flex items-center gap-1 pb-2 font-bold uppercase text-[#00A795]">
            in the world
          </p>
          <h2 className="xs:text-[28px] xs:pb-3 font-bold leading-[58px] text-white md:!text-5xl lg:!pb-8">
            About us
          </h2>
          <h2 className="xs:text-[13px] font-normal text-[#E0E0E099] sm:w-full md:!text-base xl:!w-[458px]">
            Every big company needs to thank not only itself, but also those who
            have stood beside it and believed in it. After all, the most
            important principle in our work is trust.
          </h2>
          <h2 className="xs:text-[13px] pt-2 font-normal text-[#E0E0E099] sm:w-full md:!text-base xl:!w-[458px]">
            Trust not only ensures the loyalty of customers and partners, but
            also increases our demand for ourselves. We cooperate on the basis
            of relations built on thousand-year human traditions.
          </h2>
          <div
            data-v-77920e16=""
            data-aos="fade-left"
            data-aos-duration="1900"
            className="xs:items-start xs:justify-around xs:gap-[22px] aos-init aos-animate flex items-center gap-[12px] pt-3 sm:gap-0 xl:!justify-center xl:!gap-[84px]"
          >
            <span
              data-v-77920e16=""
              className="xs:gap-[19px] flex items-center justify-center md:!gap-7"
            >
              <i
                data-v-56c03d90=""
                data-v-77920e16=""
                className="icon mr-1 text-[#00A795] hover:text-red-500"
              >
                <svg
                  width="26"
                  height="46"
                  viewBox="0 0 26 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8913 20.1951L22.1404 21.0359L13.5412 38.2342L14.1979 27.0704C14.236 26.4237 13.7538 25.8636 13.1086 25.8049L3.85958 24.9641L12.4588 7.76573L11.8021 18.9295C11.764 19.5762 12.2462 20.1364 12.8913 20.1951ZM24.1086 18.8049L14.2662 17.9101L15.1979 2.07045C15.2745 0.767755 13.5103 0.296146 12.9267 1.46332L0.92668 25.4633C0.548736 26.2192 1.04971 27.1185 1.89135 27.1951L11.7338 28.0898L10.8021 43.9295C10.7254 45.2322 12.4897 45.7038 13.0733 44.5366L25.0733 20.5366C25.4513 19.7808 24.9503 18.8814 24.1086 18.8049Z"
                    fill="#00A795"
                    stroke="#00A795"
                    strokeWidth="0.4"
                  ></path>
                </svg>
              </i>
              <p
                data-v-77920e16=""
                className="xs:text-[13px] xs:leading-140 xs:w-[107px] font-medium text-[#E0E0E0] md:!w-[105px] md:!text-base"
              >
                Quick solutions
              </p>
            </span>
            <span
              data-v-77920e16=""
              className="xs:gap-3 flex items-center justify-center md:!gap-7"
            >
              <i
                data-v-56c03d90=""
                data-v-77920e16=""
                className="icon mr-1 text-[#00A795] hover:text-red-500"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 15.5C30 16.0523 30.4477 16.5 31 16.5H32C32.5523 16.5 33 16.0523 33 15.5V4C33 3.44772 33.4477 3 34 3H44C44.5523 3 45 3.44772 45 4V44C45 44.5523 44.5523 45 44 45H34C33.4477 45 33 44.5523 33 44V32.5C33 31.9477 32.5523 31.5 32 31.5H31C30.4477 31.5 30 31.9477 30 32.5V47C30 47.5523 30.4477 48 31 48H47C47.5523 48 48 47.5523 48 47V0.999999C48 0.447714 47.5523 0 47 0H31C30.4477 0 30 0.447715 30 1V15.5Z"
                    fill="#00A795"
                  ></path>
                  <path
                    d="M41 28.5C41.5523 28.5 42 28.0523 42 27.5V22.3142C42 22.049 41.8946 21.7947 41.7071 21.6071L39.8929 19.7929C39.7054 19.6054 39.451 19.5 39.1858 19.5H21.296C20.8534 19.5 20.4679 19.2066 20.3123 18.7924C18.3937 13.6861 12.8095 10.8715 7.5 12.45C3 13.8 0 17.85 0 22.5V25.5C0 31.35 4.65 36 10.5 36C14.9026 36 18.7674 33.3107 20.3119 29.2052C20.4674 28.7919 20.8524 28.5 21.294 28.5H41ZM37.9858 22.5C38.251 22.5 38.5054 22.6054 38.6929 22.7929L38.7071 22.8071C38.8946 22.9947 39 23.249 39 23.5142V24.5C39 25.0523 38.5523 25.5 38 25.5H22C21.4477 25.5 21 25.0523 21 24.5V23.5C21 22.9477 21.4477 22.5 22 22.5H37.9858ZM10.5 33C6.3 33 3 29.7 3 25.5V22.5C3 18.3 6.3 15 10.5 15C14.7 15 18 18.3 18 22.5V25.5C18 29.7 14.7 33 10.5 33Z"
                    fill="#00A795"
                  ></path>
                  <path
                    d="M8 21H7C6.44772 21 6 21.4477 6 22V26C6 26.5523 6.44772 27 7 27H8C8.55228 27 9 26.5523 9 26V22C9 21.4477 8.55228 21 8 21Z"
                    fill="#00A795"
                  ></path>
                </svg>
              </i>
              <p
                data-v-77920e16=""
                className="xs:text-[13px] xs:leading-140 w-[105px] font-medium text-[#E0E0E0] md:!text-base"
              >
                Unique projects
              </p>
            </span>
          </div>
          <div className="mt-14 flex items-center gap-4">
            <Link to="/portfolio">
              <button className="group flex items-center gap-3 rounded-xl border border-[#00A795] bg-[#1A8377] px-5 py-[10px] text-[13px] font-semibold text-white transition duration-300 ease-in-out hover:bg-[#00A795] sm:text-[16px]">
                <p>Portfolio</p>
                <span className="flex h-4 w-4 -rotate-45 items-center justify-center rounded-full bg-[#4CC1B5] transition duration-300 ease-in-out group-hover:rotate-0 md:h-6 md:w-6">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
            <a href="tel: +998 71 200 70 07">
              <button className="group flex items-center gap-3 rounded-xl border border-white px-5 py-[10px] text-[13px] font-semibold text-white transition duration-500 ease-in-out sm:text-[16px]">
                <p>Call</p>
                <span className="flex h-4 w-4 items-center justify-center rounded-full md:h-6 md:w-6">
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

export default AboutSection;
