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
    <div className="container mx-auto flex flex-wrap-reverse lg:flex-nowrap items-center gap-8">
      {/* Left Section: Accordion */}
      <div className="px-6">
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
            <div className="pl-4 mt-2" style={{ color: "var(--e-global-color-primary)" }}>
              <p>
                We’re your one-stop destination for all your home improvement
                needs. Our skilled professionals ensure top-notch service.
              </p>
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
            <div className="pl-4 mt-2" style={{ color: "var(--e-global-color-primary)" }}>
              <p>
                Our process involves thorough planning, execution, and follow-up
                to ensure customer satisfaction.
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
            <div className="pl-4 mt-2" style={{ color: "var(--e-global-color-primary)" }}>
              <p>
                Our rates are competitive and transparent. Contact us for a
                personalized quote.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Section: Counters */}
      <div
        ref={ref}
        className="w-full lg:w-1/2 bg-cover bg-center py-16 text-gray-800"
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
