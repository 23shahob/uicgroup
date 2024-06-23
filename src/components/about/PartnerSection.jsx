import React from "react";
import { Link } from "react-router-dom";

const PartnerSection = () => {
  return (
    <div className="mx-auto max-w-[900px] rounded-xl bg-[#252527] p-7">
      <div>
        <Link className="text-[14px] font-extralight leading-[144%] tracking-[0.2px] text-white md:text-[16px] md:font-normal">
          <span className="text-[18px] text-[#00A795] md:text-[16px] md:text-[#fff]">
            "UIC Group"
          </span>{" "}
          is the address of projects that have their own values and do not pass
          without quality control. Every opportunity and demand in our company
          serves to meet the needs of our customers with maximum efficiency. Our
          company is ready to serve customers not just as customers, but as
          partners for life with the best offers!
        </Link>
      </div>
      <div>
        <div className="flex flex-col items-center py-6 md:flex-row md:gap-5 md:py-0">
          <span className="flex-center min-w-[120px]">
            <img
              className="m-auto"
              src="https://uic.group/uic-images/about/portfolio/about-safenetpay.svg"
              alt="company logo"
            />
          </span>
          <p className="about_text border-b border-neutral-700 pb-3 pt-5 text-white md:pb-5">
            We have developed the safenetpay.com website of the international
            level using various types of animation that meet all cybersecurity
            requirements. Safenetpay is an international company engaged in the
            optimization of payment systems for companies.
          </p>
        </div>
        <div className="flex flex-col items-center py-6 md:flex-row md:gap-5 md:py-0">
          <span className="flex-center min-w-[120px]">
            <img
              className="m-auto"
              src="https://uic.group/uic-images/about/portfolio/about-prosm.svg"
              alt="company logo"
            />
          </span>
          <p className="about_text border-b border-neutral-700 pb-3 pt-5 text-white md:pb-5">
            The “Pro Service Management” project, for this project our team gave
            a comprehensive solution - a mobile application, a website, a KPI
            system for employees, an automated billing system. The Pro SM
            project belongs to the Akfa holding group and manages all new
            buildings in Tashkent City. While our application provides services
            for all residents of new buildings.
          </p>
        </div>
        <div className="flex flex-col items-center py-6 md:flex-row md:gap-5 md:py-0">
          <span className="flex-center min-w-[120px]">
            <img
              className="m-auto"
              src="https://uic.group/uic-images/about/portfolio/about-express24.svg"
              alt="company logo"
            />
          </span>
          <p className="about_text border-b border-neutral-700 pb-3 pt-5 text-white md:pb-5">
            A mobile application for the largest food delivery service
            Express24, as well as other solutions from our side. So Express 24
            Merchant is a tool for establishments to receive orders and update
            order statuses and an application for managing a restaurant.
          </p>
        </div>
        <div className="flex flex-col items-center py-6 md:flex-row md:gap-5 md:py-0">
          <span className="flex-center min-w-[120px]">
            <img
              className="m-auto"
              src="https://uic.group/uic-images/about/portfolio/about-ayoluchun.svg"
              alt="company logo"
            />
          </span>
          <p className="about_text border-b border-neutral-700 pb-3 pt-5 text-white md:pb-5">
            Ayoluchun.uz, a special platform for women, provides them with
            comprehensive support, regardless of age and profession, and
            provides them with video lessons in areas of interest to them.
            Purpose: to unite women's education, spiritual, cultural and
            educational development on a single platform.
          </p>
        </div>
        <div data-v-d13273ec="" className="mt-4 flex justify-center">
          <Link
            to="/portfolio"
            className="flex w-fit cursor-pointer items-center justify-center rounded-xl border-[1px] border-solid p-[10px] pl-[16px] transition duration-500 ease-in-out"
          >
            <p className="linear-wipe lg:!leading-130 link flex items-center justify-center gap-x-[10px] text-[13px] text-base font-bold leading-[16px] text-white transition duration-500 ease-in-out md:!text-base lg:!text-base">
              Portfolio{" "}
              <i className="icon flex -rotate-90 items-center text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="16"
                    height="16"
                    rx="8"
                    fill="white"
                    fillOpacity="0.3"
                  ></rect>
                  <path
                    d="M10.9997 6.50017L7.99986 9.49989L5 6.50012"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </i>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
