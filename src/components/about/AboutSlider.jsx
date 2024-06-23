// ./src/AutoSlider.js
import React, { useState, useEffect, useRef } from "react";

const slides = [
  "https://uic.group/assets/senter1.ffdd962a.jpg",
  "https://uic.group/assets/senter7.5480cf52.jpg",
  "https://uic.group/assets/senter2.967d5c4f.jpg",
  "https://uic.group/assets/senter6.aee5389c.jpg",
  "https://uic.group/assets/senter4.10fb5d27.jpg",
  "https://uic.group/assets/senter5.66af7fc7.jpg",
  "https://uic.group/assets/senter3.da41edb3.jpg",
  "https://uic.group/assets/senter8.ad6b4d50.jpg",
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length / 3));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentIndex * 33}%)`;
  }, [currentIndex]);

  return (
    <div className="mx-auto mt-10 max-w-[900px]">
      {" "}
      <div className="relative w-full overflow-hidden rounded-xl">
        <div
          ref={slideRef}
          className="flex gap-4"
          style={{ width: `${(slides.length / 3) * 100}%10` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0"
              style={{
                backgroundImage: `url(${slide})`,
                width: "295px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Adjust height as needed
                borderRadius: "12px",
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
          {Array.from({ length: slides.length / 3 }).map((_, index) => (
            <div
              key={index}
              className={`mx-1 h-2 w-2 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
