import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { images } from "../Images";
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={images.image2}
            alt="Emmanuel Asare Ministries"
            width={281}
            height={110}
          />
        </div>
        <nav className="hidden md:flex space-x-4">
          <button className="bg-gray-200 px-3 py-1 rounded-[1rem]">
            PARTNER
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-[1rem]">
            ONLINE RADIO
          </button>
        </nav>
      </header>

      {/* Header */}
      <nav className="bg-sky-400 text-white p-4">
        <ul className="flex justify-between">
          <li>Home</li>
          <li>About Us</li>
          <li>Sermons</li>
          <li>Events</li>
          <li>Contact Us</li>
          <button className="bg-amber-300 text-black px-4 py-2 rounded-[1rem]">
            GIVE
          </button>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative h-64 bg-gray-800 flex items-center justify-center">
        <Image
          src={images.image6}
          alt="Emmanuel Asare Ministries"
          width={281}
          height={110}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">GET IN TOUCH WITH</h1>
          <h2 className="text-5xl font-bold">OUR CHURCH</h2>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">CONTACT FORM:</h3>
            <input
              type="text"
              placeholder="Your full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Query Related"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 border rounded"
            ></textarea>
            <button className="w-full bg-amber-300 text-black py-2 rounded">
              SEND MESSAGE
            </button>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Address</h3>
            <p className="mb-2">NH 234 PUBLIC SQUARE</p>
            <p className="mb-4">SAN FRANCISCO 65368</p>
            <h3 className="text-2xl font-bold mb-2">Contact Details</h3>
            <p className="mb-2">(480) 555-0103</p>
            <p className="mb-4">FINSWEET@EXAMPLE.COM</p>
            <h3 className="text-xl font-bold mb-2">Find us here</h3>
            <div className="flex space-x-4">
              <Facebook size={24} />
              <Twitter size={24} />
              <Linkedin size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sky-400 text-white p-4 text-center">
        <div>
          <p>Emmanuel Asare Ministries © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
