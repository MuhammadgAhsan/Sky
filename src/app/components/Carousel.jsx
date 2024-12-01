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

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={slide.img} alt={slide.title} className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white font-bold text-xl">{slide.title}</div>
            <div className="absolute bottom-16 left-4 text-white text-sm">{slide.description}</div>
            <div className="absolute bottom-4 right-4 text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded-lg">{`View Services`}</div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
        onClick={prevSlide}
      >
        <span className="text-2xl">&lt;</span>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
        onClick={nextSlide}
      >
        <span className="text-2xl">&gt;</span>
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
  );
};

export default Carousel;
