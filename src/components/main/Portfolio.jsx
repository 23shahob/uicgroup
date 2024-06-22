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
        <div className="mb-6 grid grid-cols-2 gap-6">
          <div className="relative cursor-pointer">
            <div className="absolute p-6">
              <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl lg:mb-2 lg:text-[38px] lg:leading-[45px]">
                Uzbekistan's Club
              </div>
              <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                Website
              </p>
            </div>
            <img
              className="h-full w-full rounded-xl object-cover"
              src="https://uic.group/media/cache/0c/39/0c392b9a99ead3fb208087f2a1e1e145.jpg"
              alt="Uzbekistan's Club"
            />
          </div>
          <div className="grid cursor-pointer grid-cols-2 gap-6">
            <div className="relative rounded-2xl">
              <div className="absolute p-6">
                <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl md:text-lg lg:mb-[6px] lg:text-2xl lg:leading-[49px]">
                  Anatomica
                </div>
                <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                  Website
                </p>
              </div>
              <img
                className="h-full w-full rounded-xl object-contain"
                src="https://uic.group/media/cache/29/88/29883e26588ac429b3ca86b3ac39efa6.jpg"
                alt="Uzbekistan's Club"
              />
            </div>
            <div className="relative cursor-pointer">
              <div className="absolute p-6">
                <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl md:text-lg lg:mb-[6px] lg:text-2xl lg:leading-[49px]">
                  Anatomica App
                </div>
                <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                  MOBILE APP
                </p>
              </div>
              <img
                className="h-full w-full rounded-xl object-contain"
                src="https://uic.group/media/cache/cc/39/cc392cc7e6083d974df22bdf3f7baae3.jpg"
                alt="Uzbekistan's Club"
              />
            </div>
            <div className="relative cursor-pointer">
              <div className="absolute p-6">
                <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl md:text-lg lg:mb-[6px] lg:text-2xl lg:leading-[49px]">
                  EXPRESS24
                </div>
                <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                  MOBILE APP
                </p>
              </div>
              <img
                className="h-full w-full rounded-xl object-contain"
                src="https://uic.group/media/cache/59/f1/59f1ca58bab7263f9c5eaff3033d5951.jpg"
                alt="Express 24"
              />
            </div>
            <div className="relative cursor-pointer">
              <div className="absolute p-6">
                <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl md:text-lg lg:mb-[6px] lg:text-2xl lg:leading-[49px]">
                  Toshkent Parfum
                </div>
                <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                  MOBILE APP
                </p>
              </div>
              <img
                className="h-full w-full rounded-xl object-contain"
                src="https://uic.group/media/cache/b6/27/b6273a3cbd3fe1e5ad0e9b9acdccdfc4.jpg"
                alt="Toshkent Parfum"
              />
            </div>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-4 gap-6">
          <div className="grid gap-6">
            <div className="relative cursor-pointer">
              <div className="absolute p-6">
                <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl md:text-lg lg:mb-[6px] lg:text-2xl lg:leading-[49px]">
                  Toshkent Parfum
                </div>
                <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                  WEBSITE
                </p>
              </div>
              <img
                className="h-full w-full rounded-xl object-contain"
                src="https://uic.group/media/cache/b6/27/b6273a3cbd3fe1e5ad0e9b9acdccdfc4.jpg"
                alt="Toshkent Parfum"
              />
            </div>
            <div className="relative cursor-pointer">
              <div className="absolute p-6">
                <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl md:text-lg lg:mb-[6px] lg:text-2xl lg:leading-[49px]">
                  Toshkent Parfum
                </div>
                <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                  MOBILE APP
                </p>
              </div>
              <img
                className="h-full w-full rounded-xl object-contain"
                src="https://uic.group/media/cache/bf/05/bf057b6e96af88ea2c68d1da6a1ee07e.jpg"
                alt="Uzbekistan's Club"
              />
            </div>
          </div>
          <div className="relative col-span-2 grid cursor-pointer">
            <div className="absolute p-6">
              <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl lg:mb-2 lg:text-[38px] lg:leading-[45px]">
                WAYU
              </div>
              <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                Website
              </p>
            </div>
            <img
              className="h-full w-full rounded-xl object-cover"
              src="https://uic.group/media/cache/77/4d/774ddc33fda844b44bb597539531dec6.jpg"
              alt="Uzbekistan's Club"
            />
          </div>
          <div className="grid gap-6">
            <div className="relative cursor-pointer">
              <div className="absolute p-6">
                <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl md:text-lg lg:mb-[6px] lg:text-2xl lg:leading-[49px]">
                  Ricomel
                </div>
                <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                  WEBSITE
                </p>
              </div>
              <img
                className="h-full w-full rounded-xl object-contain"
                src="https://uic.group/media/cache/30/da/30da918dacc113dd034fb5dbb8063282.jpg"
                alt="Toshkent Parfum"
              />
            </div>
            <div className="relative cursor-pointer">
              <div className="absolute p-6">
                <div class="!mb-1 line-clamp-3 text-sm font-bold !leading-[120%] text-white sm:text-base sm:leading-[22px] md:text-2xl md:text-lg lg:mb-[6px] lg:text-2xl lg:leading-[49px]">
                  Infomax freight
                </div>
                <p class="text-xs font-semibold uppercase leading-3 text-white/60 sm:leading-5 lg:text-sm">
                  WEBSITE
                </p>
              </div>
              <img
                className="h-full w-full rounded-xl object-contain"
                src="https://uic.group/media/cache/d4/e7/d4e7073d362f8d5a16efbb3e656fc4ee.jpg"
                alt="Uzbekistan's Club"
              />
            </div>
          </div>
        </div>
        <a
          href="/portfolio"
          class="md:rounded-12 w-[180px] rounded-8 sm:pr-auto !xs:pl-4 group flex cursor-pointer items-center justify-center !whitespace-nowrap rounded-lg bg-[#00A795] transition duration-500 ease-in-out hover:bg-[#06bfab]"
        >
          <p class="lg:!leading-130 flex items-center justify-center gap-x-[10px] whitespace-nowrap py-[10px] text-[13px] font-bold leading-[16px] text-white sm:py-[10px] sm:text-base md:!text-[16px] lg:!gap-x-[24px] lg:!pb-[14px] lg:!pt-[13px] lg:!text-[16px]">
            All projects
            <i class="flex h-[16px] w-[16px] items-center transition duration-500 ease-in-out hover:text-red-500 group-hover:rotate-45 lg:h-[24px] lg:w-[24px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="white"
                  fill-opacity="0.3"
                ></rect>
                <path
                  d="M16.1843 14.5534L16.3807 7.28596L6.95266 16.7141M9.11326 7.48238L16.3807 7.28596L9.11326 7.48238Z"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </i>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
