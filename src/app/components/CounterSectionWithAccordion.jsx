"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function CounterSectionWithAccordion() {
  const [peopleCount, setPeopleCount] = useState(0);
  const [officesCount, setOfficesCount] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let peopleCurrent = 0;
      let officesCurrent = 0;

      const interval = setInterval(() => {
        if (peopleCurrent < 100) setPeopleCount(++peopleCurrent);
        if (officesCurrent < 70) setOfficesCount(++officesCurrent);
        if (peopleCurrent >= 100 && officesCurrent >= 70) clearInterval(interval);
      }, 30); // Speed control for counting
    }
  }, [inView]);

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="container mx-auto flex flex-wrap-reverse mt-20 lg:flex-nowrap items-center gap-8">
      {/* Left Section: Accordion */}
      <div
        className="px-6 py-8 w-full lg:w-1/2 bg-white rounded-lg shadow-lg"
        style={{ borderRadius: "10px" }}
      >
        <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--e-global-color-primary)" }}>
          Maintaining Homes in Pristine Condition
        </h2>

        <div className="mb-4">
          <button
            onClick={() => toggleAccordion("why-us")}
            className="flex items-center justify-between w-full text-left font-semibold text-xl"
            style={{ color: "var(--e-global-color-primary)" }}
          >
            <span>— Why us?</span>
            <span className="text-2xl">
              {activeAccordion === "why-us" ? "−" : "+"}
            </span>
          </button>
          {activeAccordion === "why-us" && (
            <div className="pl-4 mt-2 transition-all duration-500 opacity-100" style={{ color: "var(--e-global-color-primary)", maxHeight: "500px" }}>
              <p>
                We’re your one-stop destination for all your home improvement needs. From plumbing and electrical work to heating, ventilation, and cooling systems, as well as roof repairs and locksmith services, we’ve got you covered. Our skilled professionals deliver top-notch craftsmanship and reliable service to ensure your home is safe, comfortable, and functional. Trust us to handle every aspect of your home improvement projects with expertise and efficiency. Contact us today to experience the difference our comprehensive services can make for your home.
              </p>
              <img
                src="/image-example.jpg"
                alt="Home Services"
                className="mt-4 w-full rounded-lg opacity-0 transition-opacity duration-1000"
                style={{
                  opacity: activeAccordion === "why-us" ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                }}
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={() => toggleAccordion("how-we-work")}
            className="flex items-center justify-between w-full text-left font-semibold text-xl"
            style={{ color: "var(--e-global-color-primary)" }}
          >
            <span>+ How do we work?</span>
            <span className="text-2xl">
              {activeAccordion === "how-we-work" ? "−" : "+"}
            </span>
          </button>
          {activeAccordion === "how-we-work" && (
            <div className="pl-4 mt-2 transition-all duration-500 opacity-100" style={{ color: "var(--e-global-color-primary)", maxHeight: "500px" }}>
              <p>
                Welcome to Home 4 Flag Services, where we turn your dream home vision into reality through a seamless process designed with you in mind. Beginning with a thorough consultation, we listen attentively to your needs, preferences, and aspirations, shaping a personalized plan that fits your budget and timeline. Our skilled craftsmen execute each project with precision and expertise, utilizing quality materials and meticulous attention to detail to ensure superior results. Throughout the process, transparent communication keeps you informed and engaged, while our commitment to your satisfaction remains paramount.
              </p>
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={() => toggleAccordion("rates")}
            className="flex items-center justify-between w-full text-left font-semibold text-xl"
            style={{ color: "var(--e-global-color-primary)" }}
          >
            <span>+ What are your rates?</span>
            <span className="text-2xl">
              {activeAccordion === "rates" ? "−" : "+"}
            </span>
          </button>
          {activeAccordion === "rates" && (
            <div className="pl-4 mt-2 transition-all duration-500 opacity-100" style={{ color: "var(--e-global-color-primary)", maxHeight: "500px" }}>
              <p>
                At Home 4 Flag Services, we offer competitive rates that reflect the quality of our workmanship and the value we bring to every project. Our pricing is tailored to fit your specific needs and budget, ensuring that you receive exceptional service without breaking the bank. We believe in transparency and will provide you with a detailed estimate that outlines all costs upfront, so you can make an informed decision. Rest assured, with our commitment to efficiency and excellence, you’ll receive the best possible value for your investment. Contact us today to discuss your project and receive a personalized quote.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Section: Counters */}
      <div
        ref={ref}
        className="w-full lg:w-1/2 bg-cover bg-center py-16 text-gray-800 rounded-lg"
        style={{
          backgroundImage: "url('/counter-bg-img.jpg')",
        }}
      >
        <div className="w-full flex flex-wrap gap-6 justify-center items-center py-8">
          {/* People Counter */}
          <div className="p-6 bg-blue-600 text-white rounded-lg shadow-lg w-40 h-32 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold" style={{ color: "var(--e-global-color-primary)" }}>
              {peopleCount}+
            </span>
            <span className="text-xl" style={{ color: "var(--e-global-color-primary)" }}>People</span>
          </div>

          {/* Local Offices Counter */}
          <div className="p-6 bg-red-600 text-white rounded-lg shadow-lg w-40 h-32 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold" style={{ color: "var(--e-global-color-primary)" }}>
              {officesCount}+
            </span>
            <span className="text-xl" style={{ color: "var(--e-global-color-primary)" }}>Local Offices</span>
          </div>
        </div>
      </div>
    </div>
  );
}
