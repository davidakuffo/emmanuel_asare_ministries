import React from "react";
import Image from "next/image";
import { images } from "../Images";

const EmmanuelAsareMinistries = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/*Header*/}
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="flex item-center">
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
        </nav>
      </header>
      {/* Navigation */}
      {
        <nav className="bg-sky-400 text-white p-4">
          <ul className="flex justify-between">
            <li>Home</li>
            <li>About Us</li>
            <li>Sermons</li>
            <li>Events</li>
            <li>Contact Us</li>
            <li className="bg-amber-300 text-black px-4 py-2 rounded-[1rem]">
              GIVE
            </li>
          </ul>
        </nav>
      }
      <main></main>
    </div>
  );
};

export default EmmanuelAsareMinistries;
