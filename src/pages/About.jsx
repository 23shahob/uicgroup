import React from "react";
import DescriptionTop from "../components/about/DescriptionTop";
import AboutCards from "../components/about/AboutCards";
import PartnerSection from "../components/about/PartnerSection";
import SolutionsSection from "../components/about/SolutionsSection";
import AboutSlider from "../components/about/AboutSlider";

const About = () => {
  return (
    <div className="bg-[#1E1E20] pt-48">
      <DescriptionTop />
      <AboutCards />
      <PartnerSection />
      <SolutionsSection />
      <div className="mx-auto mt-10 max-w-[900px] rounded-3xl bg-[#252527] md:p-8">
        <div className="text-white">
          <h6 className="text-[20px] font-bold leading-[120%]">
            Training Center under the UIC
          </h6>
          <p className="mb-5 mt-3 sm:mb-7">
            From the very foundation of the company, the team created a unique
            internship system, which later grew into the UIC Training Center.
            Today, more than 25 junior specialists are studying in this center.
            A feature of the UIC Training Center is the training of interns on
            real projects and in working conditions
          </p>
        </div>
        <AboutSlider />
      </div>
      <div className="mx-auto max-w-[900px]">
        <p className="my-5 leading-[130%] text-white md:my-10">
          Since the beginning of its activity, the company has been a partner of
          the Co-Learning Center , which in turn provides free IT education. The
          center is focused on teaching students in the following areas:
          Advanced Front-end, Basic Front-end, Python Back-end, Back-end, UX /
          UI, Game Dev, Digital Marketing and Mobile Development, as well as the
          basics of Project Management.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-[900px] rounded-3xl bg-[#252527] md:p-8">
        <h6 className="mb-2 text-[20px] font-bold leading-[130%] text-white sm:mb-4 lg:mb-8">
          The Co-learning Center is a friend of UIC
        </h6>
        <AboutSlider />
      </div>
      <div className="mx-auto my-10 flex max-w-[900px] rounded-3xl border-solid border-[#37373A] bg-[#252527]">
        <img
          src="	https://uic.group/uic-images/image/brend_year.png"
          alt="brand of the year"
          className="w-[100%] rounded-l-[24px] rounded-r-[24px] sm:w-[80%] sm:rounded-r-[0px] md:w-[283px]"
        ></img>
        <div className="brand-year-gradient flex w-full flex-col justify-between rounded-l-[24px] rounded-r-[24px] p-4 sm:rounded-l-[0px] sm:p-6 md:p-8">
          <p className="mb-5 max-w-[494px] font-['Roboto'] text-[16px] font-bold leading-[140%] tracking-[0.2px] text-white md:text-[18px] lg:text-[20px]">
            At the end of 2021, the company took 3rd place in the annual{" "}
            <span className="text-[#00A795]">“Year brand”</span> competition in
            the IT direction.
          </p>
          <div className="flex flex-col items-start gap-y-2 rounded-[12px] border-solid border-[#FFFFFF33] p-[6px] pl-2 md:w-fit md:flex-row md:items-center md:border-[1px]">
            <div className="flex items-center gap-2">
              <i>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1153 13.2131C10.2704 14.0142 10.348 15.3825 11.278 16.083L14.1722 18.2632C15.2583 19.0813 16.827 18.5135 17.1378 17.1897L19.5898 6.74707C19.7633 6.00821 19.0359 5.37834 18.3295 5.6556L4.42637 11.1119C3.60609 11.4338 3.63821 12.6055 4.4749 12.882L7.04049 13.7298C7.31606 13.8209 7.61823 13.7797 7.85942 13.6183L17.4732 7.18447L11.1153 13.2131Z"
                    fill="white"
                    fill-opacity="0.6"
                  ></path>
                </svg>
              </i>
              <p className="text-[14px] leading-[19px] tracking-[0.03em] text-white md:text-[16px]">
                https://t.me/uicgroup/247
              </p>
            </div>
            <a
              href="https://t.me/uicgroup/247"
              target="_blank"
              class="rounded-[6px] bg-[#00A795] px-8 py-1 text-[16px] text-white duration-300 hover:bg-[#049282] md:ml-8 md:px-2"
            >
              O'tish
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[900px]">
        <h4 className="mb-4 text-2xl font-bold text-white"> Mangu Sarkarda </h4>
        <p className="leading-[130%] text-white">
          Mangu Sarkarda - is a historical simulation game and now it shows the
          future with the latest technology. You have the opportunity to immerse
          yourself in the era of a great empire that unites 3 continents! Go to
          the glorious XIV century to the Kingdom of the Great Timurids and take
          part in the campaigns of Amir Temur. A game dedicated to the life of a
          great commander and statesman who played an important role in the life
          of peoples and is associated with intense struggle, will be a turning
          point in your daily life. The opportunity to calm down is over. Get
          ready for huge changes. Seal your heroism forever by building history
          together!
        </p>
      </div>
    </div>
  );
};

export default About;
