"use client";
import { useState } from 'react';
import Link from "next/link";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { img: '/bg.jpg', title: 'Where Quality & Care Meet Every Repair', description: 'Our skilled professionals deliver top-notch craftsmanship and reliable service to ensure your home is safe, comfortable, and functional.' },
    { img: '/bg.jpg', title: 'Detailed Home Care, Beyond Expectation', description: 'Ensuring every aspect of your residence is meticulously attended to for an unparalleled living experience.' },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {/* Carousel Section */}
      <div className="relative w-full overflow-hidden mt-16">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full relative">
              <img src={slide.img} alt={slide.title} className="w-full h-[80vh] object-cover" /> {/* Full cover image */}
              
              {/* Full overlay covering the image */}
              <div className="absolute inset-0  pl-20 bg-black bg-opacity-50 p-6 flex flex-col justify-center items-start">
                {/* Left-aligned text container */}
                <div className="text-white text-left w-[75%] sm:w-[80%] lg:w-[75%] xl:w-[75%] text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[73px] mx-5">
                  {slide.title}
                </div>
                <div className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-white text-left w-[75%] sm:w-[80%] lg:w-[75%] xl:w-[75%]  mx-5">
                  {slide.description}
                </div>
                <button className="mt-4 ml-5 bg-red-400 hover:bg-red-500 text-white text-sm sm:text-base md:text-lg px-4 py-2">
                   <Link href="/services">View Services</Link> 
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 z-10"
          onClick={prevSlide}
        >
          <span className="text-3xl">&lt;</span> {/* Previous button on the left side */}
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 z-10"
          onClick={nextSlide}
        >
          <span className="text-3xl">&gt;</span> {/* Next button on the right side */}
        </button>

        {/* Dots for navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
