import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <div className="bg-[#1E1E20] px-4 py-24">
      <div className="mx-auto max-w-[1200px]">
        <p className="anima2 flex items-center gap-1 text-[#00A795]">OUR</p>
        <div className="mb-4 text-5xl font-bold text-white md:mb-[45px] lg:mb-[56px]">
          Services
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link className="rounded-lg bg-[#252527] sm:rounded-xl sm:p-4 lg:p-8">
            <div className="max-w-[380px]">
              <h3 class="mb-1 text-base font-bold text-white sm:mb-3 sm:text-[28px] lg:text-[38px]">
                Web Development
              </h3>
              <p class="leading-130 lg:leading-140 xs:leading-140 line-clamp-3 font-sans text-[14px] font-normal tracking-[0.2px] text-neutral-400 sm:text-sm lg:text-base">
                We develop websites with the high quality, from corporate
                websites to web applications
              </p>
            </div>
          </Link>
          <Link className="rounded-lg bg-[#252527] sm:rounded-xl sm:p-4 lg:p-8">
            <div className="max-w-[380px]">
              <h3 class="mb-1 text-base font-bold text-white sm:mb-3 sm:text-[28px] lg:text-[38px]">
                Mobile apps
              </h3>
              <p class="leading-130 lg:leading-140 xs:leading-140 line-clamp-3 font-sans text-[14px] font-normal tracking-[0.2px] text-neutral-400 sm:text-sm lg:text-base">
                Development and technical support of mobile applications of any
                comlpexity
              </p>
            </div>
          </Link>
          <Link className="rounded-lg bg-[#252527] sm:rounded-xl sm:p-4 lg:p-8">
            <div className="max-w-[380px]">
              <h3 class="mb-1 text-base font-bold text-white sm:mb-3 sm:text-[28px] lg:text-[38px]">
                UI&UX
              </h3>
              <p class="leading-130 lg:leading-140 xs:leading-140 line-clamp-3 font-sans text-[14px] font-normal tracking-[0.2px] text-neutral-400 sm:text-sm lg:text-base">
                Developing a project MindMap and designing it with the optimal
                solution based on its architecture
              </p>
            </div>
          </Link>
          <Link className="rounded-lg bg-[#252527] sm:rounded-xl sm:p-4 lg:p-8">
            <div className="max-w-[380px]">
              <h3 class="mb-1 text-base font-bold text-white sm:mb-3 sm:text-[28px] lg:text-[38px]">
                Media production
              </h3>
              <p class="leading-130 lg:leading-140 xs:leading-140 line-clamp-3 font-sans text-[14px] font-normal tracking-[0.2px] text-neutral-400 sm:text-sm lg:text-base">
                Professional preparation of 2D / 3D animation, project
                presentation, advertising, video and other media resources.
              </p>
            </div>
          </Link>
          <Link className="rounded-lg bg-[#252527] sm:rounded-xl sm:p-4 lg:p-8">
            <div className="max-w-[380px]">
              <h3 class="mb-1 text-base font-bold text-white sm:mb-3 sm:text-[28px] lg:text-[38px]">
                CRM Systems
              </h3>
              <p class="leading-130 lg:leading-140 xs:leading-140 line-clamp-3 font-sans text-[14px] font-normal tracking-[0.2px] text-neutral-400 sm:text-sm lg:text-base">
                Automation of business and processes, development of electronic
                management systems that reduce paper-work by 100%
              </p>
            </div>
          </Link>
          <Link className="rounded-lg bg-[#252527] sm:rounded-xl sm:p-4 lg:p-8">
            <div className="max-w-[380px]">
              <h3 class="mb-1 text-base font-bold text-white sm:mb-3 sm:text-[28px] lg:text-[38px]">
                Branding
              </h3>
              <p class="leading-130 lg:leading-140 xs:leading-140 line-clamp-3 font-sans text-[14px] font-normal tracking-[0.2px] text-neutral-400 sm:text-sm lg:text-base">
                Developing a creative and unique logo for your project and
                create its branding guidelines
              </p>
            </div>
          </Link>
          <Link className="rounded-lg bg-[#252527] sm:rounded-xl sm:p-4 lg:p-8">
            <div className="max-w-[380px]">
              <h3 class="mb-1 text-base font-bold text-white sm:mb-3 sm:text-[28px] lg:text-[38px]">
                Production of games
              </h3>
              <p class="leading-130 lg:leading-140 xs:leading-140 line-clamp-3 font-sans text-[14px] font-normal tracking-[0.2px] text-neutral-400 sm:text-sm lg:text-base">
                Development of games of any subject and complexity,
                corresponding to the international level.
              </p>
            </div>
          </Link>
          <Link className="rounded-lg bg-[#252527] sm:rounded-xl sm:p-4 lg:p-8">
            <div className="max-w-[380px]">
              <h3 class="mb-1 text-base font-bold text-white sm:mb-3 sm:text-[28px] lg:text-[38px]">
                Artificial intelligence
              </h3>
              <p class="leading-130 lg:leading-140 xs:leading-140 line-clamp-3 font-sans text-[14px] font-normal tracking-[0.2px] text-neutral-400 sm:text-sm lg:text-base">
                Development of intelligent computer systems with the
                capabilities of human intelligence.
              </p>
            </div>
          </Link>
          <Link className="rounded-lg bg-[#252527] sm:rounded-xl sm:p-4 lg:p-8">
            <div className="max-w-[380px]">
              <h3 class="mb-1 text-base font-bold text-white sm:mb-3 sm:text-[28px] lg:text-[38px]">
                Cybersecurity
              </h3>
              <p class="leading-130 lg:leading-140 xs:leading-140 line-clamp-3 font-sans text-[14px] font-normal tracking-[0.2px] text-neutral-400 sm:text-sm lg:text-base">
                Find and fix vulnerabilities in networks, devices, code, and
                data.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
