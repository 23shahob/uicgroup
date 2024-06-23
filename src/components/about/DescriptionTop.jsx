import React from "react";

const DescriptionTop = () => {
  return (
    <div className="mx-auto max-w-[900px]">
      <div className="mx-auto max-w-[567px]">
        <img
          src="https://uic.group/uic-images/about/about-uic-logo.png"
          alt="UIC logo"
          className="aos-init aos-animate mx-auto"
        />
      </div>
      <div>
        <h4 className="text-2xl text-white md:mb-4">About UIC</h4>
        <div>
          <h2 className="mb-3 text-white">
            “United IT Company” was founded on October 8, 2020. According to the
            director of the company Murodkhuja Muratov, the philosophy of the
            company is to create a team that meets international standards in
            the IT field of Uzbekistan, to open up the opportunity for young
            programmers to work on themselves and at the same time be officially
            employed, to bring the company to a prominent place in the world
            arena IT.
          </h2>
          <p className="text-white">
            At the time the company was founded, the team consisted of only 10
            people, and now the team has +100 specialists. These people believed
            in the philosophy of the company and sought to contribute to the
            development of the project. To this day, these people remain loyal
            to the company and develop their teams within the company in
            different directions (Backend, Frontend, QA, Mobile, Analytics,
            Marketing Team, etc.).
          </p>
        </div>
      </div>
      <div className="mt-10 flex cursor-pointer flex-col items-center justify-center gap-y-8 rounded-[12px] border-[1px] border-dashed border-[#00A795] bg-[#252527] p-6 md:flex-row">
        <div className="relative flex h-[94px] w-[94px] justify-center text-[#fff] opacity-90 md:mr-7">
          <i className="icon rotate-anim absolute z-10 flex items-center justify-center hover:text-red-500">
            <svg
              width="94"
              height="94"
              viewBox="0 0 94 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_539_50)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40.9214 8.54L39.7114 0L38.2314 0.21L39.6314 10.1L45.0914 9.33L44.9014 7.98L40.9214 8.54ZM54.2415 7.15L52.8015 6.81C52.4315 8.4 53.4915 10.1 55.5715 10.59C57.5315 11.05 59.1615 10.04 59.5415 8.42C59.8815 6.99 59.0715 5.86 57.5115 5.07L56.3515 4.47C55.1915 3.89 55.2515 3.19 55.3215 2.89C55.5415 1.99 56.4915 1.59 57.4115 1.8C58.4315 2.03 58.9815 2.83 58.7715 3.75L60.2115 4.09C60.6215 2.31 59.5115 0.889998 57.7615 0.479998C56.0215 0.0799984 54.2615 0.869998 53.8615 2.58C53.6815 3.39 53.7315 4.69 55.6815 5.7L56.8515 6.3C57.5915 6.71 58.2715 7.29 58.0715 8.15C57.8915 8.95 57.0415 9.53 55.8815 9.26C54.6615 8.97 54.0915 7.99 54.2415 7.15ZM65.7415 14.41L67.0715 15.08L71.5815 6.16L70.2514 5.49L68.2915 9.37L64.1714 7.29L66.1315 3.41L64.8015 2.74L60.3015 11.66L61.6315 12.33L63.5615 8.5L67.6714 10.58L65.7415 14.41ZM71.7014 12.08C73.6214 9.99 76.8314 9.75 78.9214 11.68C81.0214 13.61 81.0614 16.84 79.1414 18.93C77.2314 21.01 74.0214 21.22 71.9214 19.28C69.8414 17.36 69.7914 14.16 71.7014 12.08ZM78.0514 17.92C79.4314 16.42 79.4814 14.08 77.9914 12.7C76.5014 11.33 74.1914 11.59 72.8114 13.09C71.4314 14.59 71.3914 16.88 72.8814 18.26C74.3714 19.64 76.6714 19.42 78.0514 17.92ZM79.9714 29.5L80.6014 30.59L90.9314 28.56L90.1414 27.18L82.3914 28.83L86.8914 24.23L86.3214 23.24L80.0814 24.79L85.4414 18.95L84.6514 17.57L77.6614 25.46L78.2914 26.55L84.3814 25L79.9714 29.5ZM86.1915 35.13L82.5715 36L82.2215 34.55L91.9315 32.2L92.8315 35.91C93.3515 38.04 92.0215 39.27 90.4815 39.64C89.0815 39.98 87.5515 39.6 86.8915 37.87L83.8615 41.34L83.4415 39.61L86.4615 36.25L86.1915 35.13ZM87.9215 36.72C88.2515 38.07 89.1015 38.43 90.1315 38.19C91.1415 37.94 91.7315 37.17 91.5015 36.22L90.9615 33.98L87.4615 34.83L87.9215 36.72ZM83.9415 42.85L84.0615 48.97L85.4215 48.95L85.3315 44.31L88.1915 44.25L88.2715 48.18L89.6515 48.15L89.5715 44.22L92.6015 44.16L92.6915 48.67L94.0515 48.64L93.9315 42.65L83.9415 42.85ZM82.7215 56.6L83.8615 50.59L93.6815 52.45L92.5615 58.34L91.2215 58.09L92.0615 53.66L89.0815 53.1L88.3515 56.96L87.0015 56.69L87.7315 52.83L84.9215 52.3L84.0615 56.86L82.7215 56.6ZM82.8515 60.04L90.8515 63.28L91.4115 61.89L82.1515 58.14L80.0815 63.25L81.3415 63.76L82.8515 60.04ZM78.4715 71.05L77.4614 72.13C76.8114 71.58 75.6714 71.58 74.8114 72.49C74.0014 73.36 74.0714 74.38 74.6814 74.95C75.3315 75.55 76.1714 75.25 76.8914 74.82L78.0014 74.11C79.8514 72.92 81.0115 73.53 81.6115 74.09C82.8914 75.29 82.7015 77.22 81.4815 78.52C80.2515 79.83 78.4614 80.09 77.1314 78.84L78.1414 77.76C78.8315 78.41 79.8014 78.32 80.5214 77.56C81.1614 76.87 81.3015 75.84 80.6215 75.21C80.4015 75 79.8215 74.6 78.7315 75.31L77.6314 76.01C76.1614 76.96 74.7814 77.1 73.7114 76.1C72.4914 74.96 72.4415 73.04 73.8214 71.57C75.2715 70.01 77.2815 69.94 78.4715 71.05ZM65.4415 78.48L64.1915 79.3L69.6915 87.64L70.9415 86.82L68.5515 83.19L72.4015 80.65L74.7915 84.28L76.0415 83.46L70.5415 75.12L69.2915 75.94L71.6515 79.52L67.8015 82.06L65.4415 78.48ZM64.5115 84.8C65.3715 87.51 63.9715 90.41 61.2615 91.27C58.5415 92.13 55.7115 90.56 54.8615 87.85C54.0115 85.15 55.4315 82.27 58.1515 81.41C60.8615 80.56 63.6615 82.11 64.5115 84.8ZM56.2815 87.4C56.9015 89.35 58.9015 90.56 60.8415 89.94C62.7815 89.33 63.7015 87.2 63.0815 85.25C62.4615 83.3 60.5015 82.13 58.5615 82.74C56.6315 83.35 55.6715 85.45 56.2815 87.4ZM45.2415 83.26L43.9815 83.24L40.4415 93.16L42.0315 93.19L44.5715 85.68L46.2315 91.9L47.3815 91.92L49.2315 85.76L51.5215 93.35L53.1115 93.38L49.8915 83.34L48.6315 83.32L46.8515 89.35L45.2415 83.26ZM37.3015 85.87L38.3415 82.29L39.7715 82.71L36.9815 92.3L33.3215 91.24C31.2215 90.63 30.8115 88.87 31.2515 87.35C31.6515 85.97 32.7415 84.82 34.5715 85.12L33.0715 80.78L34.7815 81.28L36.1915 85.57L37.3015 85.87ZM35.0615 86.57C33.7215 86.18 32.9915 86.74 32.6915 87.75C32.4015 88.75 32.7715 89.65 33.7215 89.92L35.9315 90.56L36.9315 87.11L35.0615 86.57ZM31.6814 80.06L26.3214 77.1L25.6714 78.31L29.7314 80.55L28.3514 83.05L24.9114 81.15L24.2414 82.36L27.6814 84.26L26.2214 86.91L22.2715 84.73L21.6115 85.92L26.8514 88.81L31.6814 80.06ZM20.4114 72.14L25.0514 76.14L18.5214 83.71L13.9814 79.8L14.8714 78.77L18.2914 81.72L20.2714 79.42L17.2914 76.85L18.1914 75.81L21.1714 78.38L23.0414 76.22L19.5214 73.19L20.4114 72.14ZM17.3615 70.54L10.5715 75.86L11.4915 77.04L19.3515 70.88L15.9515 66.54L14.8815 67.38L17.3615 70.54ZM9.99144 61.26L9.56144 59.84C10.3714 59.55 10.9314 58.56 10.5614 57.37C10.2114 56.23 9.29144 55.79 8.50144 56.03C7.65144 56.29 7.50144 57.17 7.51144 58.01L7.58144 59.32C7.69144 61.52 6.58144 62.22 5.79144 62.46C4.11144 62.97 2.54144 61.84 2.02144 60.14C1.50144 58.42 2.17144 56.74 3.92144 56.21L4.35144 57.62C3.45144 57.89 3.04144 58.78 3.34144 59.78C3.61144 60.68 4.44144 61.31 5.33144 61.04C5.62144 60.95 6.26144 60.65 6.18144 59.36L6.12144 58.06C6.03144 56.32 6.60144 55.05 8.00144 54.63C9.60144 54.14 11.2814 55.05 11.8714 56.98C12.4914 59.02 11.5414 60.79 9.99144 61.26ZM10.0715 46.27L9.98146 44.78L0.00146484 45.36L0.0914648 46.86L4.43146 46.6L4.70146 51.2L0.361465 51.46L0.451465 52.95L10.4315 52.36L10.3415 50.87L6.05147 51.12L5.78147 46.52L10.0715 46.27ZM5.05147 42.28C2.27147 41.67 0.451474 39.01 1.06147 36.24C1.67147 33.45 4.44147 31.79 7.22147 32.4C9.98147 33.01 11.7715 35.67 11.1615 38.46C10.5515 41.23 7.81147 42.89 5.05147 42.28ZM6.90147 33.86C4.90147 33.42 2.86147 34.56 2.42147 36.54C1.98147 38.52 3.37147 40.39 5.37147 40.82C7.37147 41.25 9.36147 40.14 9.80147 38.16C10.2415 36.18 8.90147 34.29 6.90147 33.86ZM15.9615 26.38L16.5915 25.29L9.64149 17.34L8.84149 18.72L14.1615 24.61L7.92149 23.02L7.34149 24.01L11.8215 28.64L4.08149 26.93L3.28149 28.31L13.6315 30.41L14.2615 29.32L9.86149 24.82L15.9615 26.38ZM17.7015 18.19L20.2815 20.88L19.2015 21.91L12.2815 14.71L15.0315 12.07C16.6115 10.55 18.3415 11.08 19.4315 12.22C20.4215 13.25 20.8815 14.77 19.7115 16.21L24.2215 17.08L22.9315 18.31L18.5115 17.39L17.7015 18.19ZM18.2115 15.89C19.2115 14.93 19.1015 14.01 18.3715 13.25C17.6515 12.5 16.6915 12.38 15.9815 13.06L14.3215 14.66L16.8115 17.25L18.2115 15.89ZM25.5414 16.22L30.7714 13.04L30.0714 11.88L26.1114 14.29L24.6314 11.85L27.9914 9.81L27.2714 8.63L23.9114 10.67L22.3314 8.08L26.1814 5.74L25.4714 4.57L20.3514 7.68L25.5414 16.22ZM38.0215 10.38L32.2415 12.4L28.9415 2.97L34.5915 0.990002L35.0415 2.28L30.7815 3.77L31.7815 6.63L35.4915 5.33L35.9515 6.63L32.2415 7.93L33.1815 10.63L37.5615 9.1L38.0215 10.38Z"
                  fill="url(#paint0_linear_539_50)"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_539_50"
                  x1="91.4999"
                  y1="36"
                  x2="-2.00006"
                  y2="47"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop
                    offset="0.182292"
                    stopColor="white"
                    stopOpacity="0.6"
                  ></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                </linearGradient>
                <clipPath id="clip0_539_50">
                  <rect width="94" height="94" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </i>
          <i className="icon left-[50%] flex items-center justify-center hover:text-red-500">
            <svg
              width="25"
              height="27"
              viewBox="0 0 25 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6 8.86999C24.98 10.86 24.98 15.74 21.6 17.73L7.75 25.88C4.32 27.9 0 25.42 0 21.45L0 5.14999C0 1.16999 4.32 -1.30001 7.75 0.719988L21.6 8.86999Z"
                fill="white"
              ></path>
            </svg>
          </i>
        </div>
        <div className="flex items-center">
          <p className="mr-2 text-center text-[14px] font-medium leading-[144%] text-white md:text-left">
            You can find out more about our work in the showreel
          </p>
          <i className="hover:text-red-500">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6148_4360)">
                <rect width="16" height="16" rx="8" fill="#00A795"></rect>
                <path
                  d="M10.7886 9.70232L10.9195 4.85733L4.63413 11.1427M6.07453 4.98827L10.9195 4.85733L6.07453 4.98827Z"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6148_4360">
                  <rect width="16" height="16" rx="8" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </i>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTop;
