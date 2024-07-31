import React from "react";
import { MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { images } from "../Images";

const EventPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
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
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="md:flex md:space-x-8">
          {/* Left Column */}
          <div className="md:w-2/3">
            <img
              src="/api/placeholder/800/400"
              alt="Open Bible"
              className="w-full h-64 object-cover mb-4"
            />
            <div className="text-orange-500 uppercase mb-2">Upcoming Event</div>
            <h1 className="text-4xl font-bold mb-4">
              HOW TO TRULY TRUST SOMEONE
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
              Pharetra sit amet aliquam id diam maecenas ultricies.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-4 italic mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
              Pharetra sit amet aliquam id diam maecenas ultricies.
            </p>
          </div>
        </div>

        {/* Upcoming Sermons Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            UPCOMING SERMONS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "100 RANDOM ACTS OF KINDNESS",
              "FAITH IS A PROCESS, NOT A DESTINATION",
              "THERE IS NOTHING IMPOSSIBLE",
              "CELEBRATING FREEDOM AND LIFE",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-2xl font-bold mb-2">20</div>
                  <div className="text-gray-600 mb-2">JULY</div>
                  <div className="text-orange-500 uppercase mb-2">
                    Upcoming Event
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center mb-2">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">
                      Friday 23:39 IST Saturday 11:20 ISD
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">
                      No 233 Main St. New York, United States
                    </span>
                  </div>
                </div>
                <div className="bg-amber-300 p-2"></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sky-400 text-white p-4 text-center">
        <div>
          <p>Emmanuel Asare Ministries © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default EventPage;
