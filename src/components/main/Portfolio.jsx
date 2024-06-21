import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-[#141415]">
      <div className="mx-auto max-w-[1200px] pb-24 pt-[118px]">
        <div
          class="aos-init aos-animate mb-8 flex items-start justify-between text-white max-lg:flex-col md:mb-12"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <div data-v-393aadc3="" class="container-video max-lg:mb-5">
            <p
              data-v-393aadc3=""
              class="bg-[#141415] text-[32px] font-bold uppercase leading-[130%] text-white md:text-[64px]"
            >
              portfolio
            </p>
          </div>
          <div class="scroll-mini flex gap-3 overflow-y-auto max-md:w-full md:gap-4">
            <a
              href="/portfolio/?category=2"
              class="font-roboto cursor-pointer whitespace-nowrap rounded-[8px] border border-solid border-white/20 px-4 py-2 text-white/60 duration-300 hover:border-[#00A795] hover:text-[#00A795] sm:rounded-[12px] md:px-6 md:py-3"
              aria-label="link"
            >
              Branding
            </a>
            <a
              href="/portfolio/?category=4"
              class="font-roboto cursor-pointer whitespace-nowrap rounded-[8px] border border-solid border-white/20 px-4 py-2 text-white/60 duration-300 hover:border-[#00A795] hover:text-[#00A795] sm:rounded-[12px] md:px-6 md:py-3"
              aria-label="link"
            >
              Mobile app
            </a>
            <a
              href="/portfolio/?category=3"
              class="font-roboto cursor-pointer whitespace-nowrap rounded-[8px] border border-solid border-white/20 px-4 py-2 text-white/60 duration-300 hover:border-[#00A795] hover:text-[#00A795] sm:rounded-[12px] md:px-6 md:py-3"
              aria-label="link"
            >
              CRM
            </a>
            <a
              href="/portfolio/?category=5"
              class="font-roboto cursor-pointer whitespace-nowrap rounded-[8px] border border-solid border-white/20 px-4 py-2 text-white/60 duration-300 hover:border-[#00A795] hover:text-[#00A795] sm:rounded-[12px] md:px-6 md:py-3"
              aria-label="link"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
