"use client";
import { useEffect, useState } from 'react';
import Navbars from '../components/Navbars';
import Footer from '../components/Footer';
import ContactUs from "../components/ContactUs";
import Services from "../components/Services";
import CounterSectionWithAccordion from '../components/CounterSectionWithAccordion';
const PlumbingServices = () => {


  return (
    
<>
<Navbars/>

<CounterSectionWithAccordion/>
 
  <ContactUs/>
  <Footer/>
</>
  );
};

export default PlumbingServices;
