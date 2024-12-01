"use client";
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "I recently had Home 4 Flag Services complete some much-needed repairs on my roof, and I couldn't be happier with the results. Not only did they provide a competitive quote, but their team was also incredibly efficient and respectful of my property. The final outcome was nothing short of exceptional, and I'm grateful for their professionalism and attention to detail. Highly recommend!",
    name: "John Woods"
  },
  {
    quote: "Choosing Home 4 Flag Services for our home improvement project was one of the best decisions we made. From the initial consultation to the final touches, their team was dedicated to ensuring our complete satisfaction. They transformed our living space with their expertise in plumbing, electrical work, and HVAC systems, and the results speak for themselves. I wouldn't hesitate to recommend them to friends and family!",
    name: "Jane Doe"
  },
  {
    quote: "I couldn't be happier with the incredible work done by Home 4 Flag Services. From start to finish, their team was professional, efficient, and truly invested in bringing my vision to life. They transformed my outdated kitchen into a modern masterpiece, and the attention to detail was impeccable. I highly recommend their services to anyone looking to elevate their home!",
    name: "Alice Smith"
  },
  {
    quote: "Working with Home 4 Flag Services was a fantastic experience from beginning to end. Their expertise and craftsmanship turned my bathroom renovation project into a stress-free and enjoyable process. The end result exceeded my expectations, and I'm thrilled with the quality of workmanship. I'll definitely be turning to them for any future home improvement needs!",
    name: "John Woods"
  }
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide feature: Change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

    // Clear interval on component unmount to prevent memory leaks
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left Side: Testimonials */}
      <div className="w-1/2 p-8 bg-[#1c204e] flex flex-col justify-center items-center space-y-6 text-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold mb-4">Special Offer</h2>
        <h3 className="text-3xl font-bold">What They Say</h3>
        <div className="text-center max-w-md">
          <p className="text-lg italic">{testimonials[index].quote}</p>
          <p className="font-semibold mt-4">- {testimonials[index].name}</p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-between w-full mt-6">
          <button
            className="p-4 bg-gray-600 text-white rounded-full"
            onClick={() => {
              prevTestimonial();
              // Reset the interval on user interaction
              clearInterval(window.autoSlideInterval);
              window.autoSlideInterval = setInterval(nextTestimonial, 5000);
            }}
          >
            &#8592;
          </button>
          <button
            className="p-4 bg-gray-600 text-white rounded-full"
            onClick={() => {
              nextTestimonial();
              // Reset the interval on user interaction
              clearInterval(window.autoSlideInterval);
              window.autoSlideInterval = setInterval(nextTestimonial, 5000);
            }}
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Right Side: Background Color & Image */}
      <div
        className="w-1/2 relative bg-cover bg-center overflow-hidden rounded-lg"
        style={{
          backgroundImage: "url('/bg-4.jpg')",
          backgroundColor: "var(--e-global-color-primary)", // Custom CSS variable for background color
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          {/* Heading for Special Offer */}
          {/* Optional: Play Icon (can remove or change if needed) */}
          <div className="text-6xl animate-pulse">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
