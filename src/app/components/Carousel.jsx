"use client";
import { useState, useEffect } from 'react';

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
              <div className="absolute inset-0 bg-black bg-opacity-50 p-6">
                {/* Updated text container with left and right margins */}
                <div className="text-[73px] w-[60%] ml-20 text-white mx-5">{slide.title}</div> {/* Title font size set to 73px */}
                <div className="mt-1 text-[17px]  ml-20 text-white mx-5">{slide.description}</div> {/* Description font size set to 17px */}
                <button className="mt-4 bg-red-400  ml-20 hover:bg-red-500 text-white text-[17px] px-4 py-2 mx-5">View Services</button> {/* Button font size set to 17px */}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3"
          onClick={prevSlide}
        >
          <span className="text-3xl">&lt;</span>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3"
          onClick={nextSlide}
        >
          <span className="text-3xl">&gt;</span>
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
