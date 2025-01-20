import React from "react";
import {
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { images } from "../Images";
import Header from "../Homepage/Header";
import NavBar from "../Homepage/NavBar";
import firebase from "firebase/compat/app";
const SermonEventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      <NavBar />
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        // style={{ backgroundImage: "url('/api/placeholder/1200/400')" }}
      >
        <div className="  absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase mb-2">SERMON</p>
            <h1 className=" text-4xl sm:text-5xl font-bold mb-4">
              TAKE PART IN OUR SERMON
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-sm text-gray-500 uppercase mb-2">
            UPCOMING SERMONS
          </h2>
          <h3 className="text-3xl font-bold mb-4">
            JOIN US AND BECOME PART
            <br />
            OF SOMETHING GREAT
          </h3>
        </section>

        {/* Featured Sermon */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row bg-orange-50">
            <div className="md:w-1/3 p-8">
              <p className="text-orange-500 uppercase mb-2">UPCOMING EVENT</p>
              <h4 className="text-2xl font-bold mb-4">
                WATCH AND LISTEN TO OUR SERMONS
              </h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className="flex items-center mb-2">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">
                  Friday 23:39 IST Saturday 11:20 ISD
                </span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">
                  No 233 Main St. New York, United States
                </span>
              </div>
              <button className="bg-gray-900 text-white px-6 py-2 rounded">
                REGISTER
              </button>
            </div>
            <div className="md:w-2/3">
              <img
                src="/api/placeholder/800/400"
                alt="Sermon event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-right mt-4">
            <a
              href="#"
              className="text-orange-500 hover:underline flex items-center justify-end"
            >
              View all Sermons <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </section>

        {/* All Events */}
        <section>
          <h2 className="text-3xl font-bold mb-8">VIEW ALL EVENTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "100 RANDOM ACTS OF KINDNESS",
              "FAITH IS A PROCESS, NOT A DESTINATION",
              "THERE IS NOTHING IMPOSSIBLE",
              "WATCH AND LISTEN TO OUR SERMONS",
            ].map((title, index) => (
              <div key={index} className="bg-orange-50 p-6">
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
                <div className="h-1 bg-orange-300 mt-4"></div>
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

export default SermonEventsPage;
