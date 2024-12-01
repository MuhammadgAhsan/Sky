import Navbars from "./components/Navbars";
  import Carousel from "./components/Carousel";
  //<Carousel/>  import Carousel from "./components/Carousel"
  import HeroSection from "./components/HeroSection";
  import Footer from "./components/Footer";


import CounterSectionWithAccordion from "./components/CounterSectionWithAccordion";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
export default function Home() {
  return (<>
  <Navbars/>
  <Carousel/>
  <Services/>
  {/* <div className="min-h-screen bg-gray-100 flex justify-center items-center">
     
    </div> */}
    < CounterSectionWithAccordion/>
    <HeroSection />
    <ContactUs/>
    <Footer/>
  </>
   
  );
}
