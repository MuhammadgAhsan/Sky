
"use client";
import Image from 'next/image';
import Link from 'next/link';



export default function Footer() {
  return (
    <footer className=" text-white py-8" style={{ background: "var(--e-global-color-primary)" }}>
      <div className="container mx-auto px-6 text-center space-y-8">

        {/* Logo and Title */}
        <div className="flex justify-center items-center">
        <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <h1 className="text-2xl font-bold">HOME SERVICES</h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/" className="text-red-500 hover:underline">
            Home
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/testimonials" className="hover:underline">
            Testimonials
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="hover:scale-110 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.603 0 0 .605 0 1.35v21.299c0 .746.603 1.351 1.325 1.351h11.495v-9.266h-3.11v-3.622h3.11V8.414c0-3.1 1.894-4.79 4.661-4.79 1.325 0 2.462.099 2.794.144v3.239l-1.918.001c-1.505 0-1.796.716-1.796 1.766v2.313h3.587l-.467 3.622h-3.12V24h6.102c.721 0 1.325-.605 1.325-1.351V1.35C24 .605 23.396 0 22.675 0z"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" aria-label="Twitter" className="hover:scale-110 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.917 4.917 0 0 0 16.615 2c-2.726 0-4.943 2.216-4.943 4.947 0 .388.045.765.13 1.124C7.728 7.818 4.1 5.884 1.671 3.148a4.935 4.935 0 0 0-.67 2.479c0 1.71.871 3.215 2.188 4.098A4.902 4.902 0 0 1 .96 8.69v.06a4.947 4.947 0 0 0 3.966 4.841 4.935 4.935 0 0 1-2.224.084 4.947 4.947 0 0 0 4.623 3.434A9.868 9.868 0 0 1 0 19.545 13.936 13.936 0 0 0 7.548 21c9.142 0 14.307-7.724 14.307-14.426 0-.22-.005-.437-.015-.653A10.14 10.14 0 0 0 24 4.557z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="hover:scale-110 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 576 512">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
            </svg>
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-sm border-t border-gray-600 pt-4">
        Fix Experts Pro Services © 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
