"use client";
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'email' ? 'ah7an07@gmail.com' : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = [];
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        emptyFields.push(key);
      }
    });

    if (emptyFields.length) {
      alert(`Please fill out the following fields: ${emptyFields.join(', ')}`);
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <section className="bg-black  py-16 px-6" style={{ background: "var(--e-global-color-primary)" }}>
      <div className="container mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-lg p-10">
        {/* Left Side: Contact Information */}
        <div className="text-gray-800 space-y-6">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Have Questions? <br /> Get in touch!
          </h1>
          <p className="text-gray-600">
            We're here to help! Reach out for support or inquiries. Just a message or call away.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl text-blue-500">📍</span>
              <p>1012 MARQUEZ PL STE 106 B SANTA FE, NM 87505</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-3xl text-blue-500">📞</span>
              <p>(630) 506-6081</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-3xl text-blue-500">📧</span>
              <p>info@homeservices4usa.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-gray-100 rounded-lg p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
