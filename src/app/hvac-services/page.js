"use client";
import { useEffect, useState } from 'react';
import Navbars from '../components/Navbars';
import Footer from '../components/Footer';
import ContactUs from "../components/ContactUs";
import Services from "../components/Services";
const PlumbingServices = () => {
  const images = ['/p3.jpg', '/p4.jpg', '/p5.jpg']; // Array of images to cycle through
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the image every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    
<>
<Navbars/>
{/* <Carousel/> */}
<div
      className="relative bg-cover bg-center text-center py-20 px-6"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`, // Dynamically change background image
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">HVAC Services</h2>
        {/* Description */}
        <div className="text-lg text-white mb-6">
        Keep your cool and stay cozy year-round! Experience top-tier HVAC solutions customized to your comfort needs. Contact us today to keep your HVAC systems in peak condition!
        </div>
        {/* Call to Action Button */}
        <a
          href="/contact"
          className="inline-block bg-green-500 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Call Now
        </a>
      </div>
    </div>


 
  <ContactUs/>
  <Footer/>
</>
  );
};

export default PlumbingServices;
