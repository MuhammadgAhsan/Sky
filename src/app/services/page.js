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
<Services/>
 
  <ContactUs/>
  <Footer/>
</>
  );
};

export default PlumbingServices;
