"use client"; // Mark as a client component for hooks

import { useState } from "react";
import Link from "next/link"; // Import the Link component from Next.js

const Navbars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-black fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`block w-6 h-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Close Icon (appears when menu is open) */}
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:ml-6">
            <div className="flex space-x-4">
              <Link href="/" className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/services" className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/testimonials" className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </Link>
              <Link href="/faq" className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </Link>
            </div>
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center">
              <a
                href="tel:(630)%20506-6081"
                className="flex items-center space-x-2 text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span>(630) 506-6081</span>
              </a>
            </div>
          </div>

          {/* User Profile or Notifications (right side) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {/* Add icons or profile here if needed */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"} fixed inset-0 z-50 bg-black bg-opacity-50`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`w-3/4 bg-white h-full fixed right-0 transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-end pt-16 space-y-4 px-4">
            <Link
              href="/"
              className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </Link>
            <Link
              href="/faq"
              className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbars;
