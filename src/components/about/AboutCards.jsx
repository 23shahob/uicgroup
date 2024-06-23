import React from "react";
import { Link } from "react-router-dom";

const AboutCards = () => {
  return (
    <div className="mx-auto max-w-[900px] mb-10">
      <h4 className="pb-4 pt-6 text-white md:pb-8 lg:pb-10">
        Currently, our company offers its IT solutions in 9 main areas:{" "}
      </h4>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Link className="service-card aos-init aos-animate rounded-[12px] border-[2px] border-solid border-[transparent] bg-[#252527] p-2 transition-all duration-300 hover:border-[#00A795] md:p-5 md:px-6 lg:min-h-[180px]">
          <h3 className="mb-3 text-[13px] font-bold leading-[120%] text-white md:text-[16px] lg:text-[24px]">
            Web Development
          </h3>
          <p className="text-[12px] leading-[140%] text-[#E0E0E099] md:text-[14px] lg:text-[16px]">
            We develop websites with the high quality, from corporate websites
            to web applications
          </p>
        </Link>
        <Link className="service-card aos-init aos-animate rounded-[12px] border-[2px] border-solid border-[transparent] bg-[#252527] p-2 transition-all duration-300 hover:border-[#00A795] md:p-5 md:px-6 lg:min-h-[180px]">
          <h3 className="mb-3 text-[13px] font-bold leading-[120%] text-white md:text-[16px] lg:text-[24px]">
            UI&UX
          </h3>
          <p className="text-[12px] leading-[140%] text-[#E0E0E099] md:text-[14px] lg:text-[16px]">
            Developing a project MindMap and designing it with the optimal
            solution based on its architecture
          </p>
        </Link>
        <Link className="service-card aos-init aos-animate rounded-[12px] border-[2px] border-solid border-[transparent] bg-[#252527] p-2 transition-all duration-300 hover:border-[#00A795] md:p-5 md:px-6 lg:min-h-[180px]">
          <h3 className="mb-3 text-[13px] font-bold leading-[120%] text-white md:text-[16px] lg:text-[24px]">
            CRM Systems
          </h3>
          <p className="text-[12px] leading-[140%] text-[#E0E0E099] md:text-[14px] lg:text-[16px]">
            Automation of business and processes, development of electronic
            management systems that reduce paper-work by 100%
          </p>
        </Link>
        <Link className="service-card aos-init aos-animate rounded-[12px] border-[2px] border-solid border-[transparent] bg-[#252527] p-2 transition-all duration-300 hover:border-[#00A795] md:p-5 md:px-6 lg:min-h-[180px]">
          <h3 className="mb-3 text-[13px] font-bold leading-[120%] text-white md:text-[16px] lg:text-[24px]">
            Mobile apps
          </h3>
          <p className="text-[12px] leading-[140%] text-[#E0E0E099] md:text-[14px] lg:text-[16px]">
            Development and technical support of mobile applications of any
            complexity
          </p>
        </Link>
        <Link className="service-card aos-init aos-animate rounded-[12px] border-[2px] border-solid border-[transparent] bg-[#252527] p-2 transition-all duration-300 hover:border-[#00A795] md:p-5 md:px-6 lg:min-h-[180px]">
          <h3
            data-v-x502cb1da=""
            className="mb-3 text-[13px] font-bold leading-[120%] text-white md:text-[16px] lg:text-[24px]"
          >
            Media production
          </h3>
          <p className="text-[12px] leading-[140%] text-[#E0E0E099] md:text-[14px] lg:text-[16px]">
            Professional preparation of 2D / 3D animation, project presentation,
            advertising, video and other media resources.
          </p>
        </Link>
        <Link className="service-card aos-init aos-animate rounded-[12px] border-[2px] border-solid border-[transparent] bg-[#252527] p-2 transition-all duration-300 hover:border-[#00A795] md:p-5 md:px-6 lg:min-h-[180px]">
          <h3 className="mb-3 text-[13px] font-bold leading-[120%] text-white md:text-[16px] lg:text-[24px]">
            Branding
          </h3>
          <p className="text-[12px] leading-[140%] text-[#E0E0E099] md:text-[14px] lg:text-[16px]">
            Developing a creative and unique logo for your project and create
            its branding guidelines
          </p>
        </Link>
        <Link className="service-card aos-init aos-animate rounded-[12px] border-[2px] border-solid border-[transparent] bg-[#252527] p-2 transition-all duration-300 hover:border-[#00A795] md:p-5 md:px-6 lg:min-h-[180px]">
          <h3 className="mb-3 text-[13px] font-bold leading-[120%] text-white md:text-[16px] lg:text-[24px]">
            Cybersecurity
          </h3>
          <p className="text-[12px] leading-[140%] text-[#E0E0E099] md:text-[14px] lg:text-[16px]">
            Find and fix vulnerabilities in networks, devices, code, and data.
          </p>
        </Link>
        <Link className="service-card aos-init aos-animate rounded-[12px] border-[2px] border-solid border-[transparent] bg-[#252527] p-2 transition-all duration-300 hover:border-[#00A795] md:p-5 md:px-6 lg:min-h-[180px]">
          <h3 className="mb-3 text-[13px] font-bold leading-[120%] text-white md:text-[16px] lg:text-[24px]">
            Production of games
          </h3>
          <p className="text-[12px] leading-[140%] text-[#E0E0E099] md:text-[14px] lg:text-[16px]">
            Development of games of any subject and complexity, corresponding to
            the international level.
          </p>
        </Link>
        <Link className="service-card aos-init aos-animate rounded-[12px] border-[2px] border-solid border-[transparent] bg-[#252527] p-2 transition-all duration-300 hover:border-[#00A795] md:p-5 md:px-6 lg:min-h-[180px]">
          <h3 className="mb-3 text-[13px] font-bold leading-[120%] text-white md:text-[16px] lg:text-[24px]">
            Artificial intelligence
          </h3>
          <p className="text-[12px] leading-[140%] text-[#E0E0E099] md:text-[14px] lg:text-[16px]">
            Development of intelligent computer systems with the capabilities of
            human intelligence.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AboutCards;
