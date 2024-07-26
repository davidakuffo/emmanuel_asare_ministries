import React from "react";
import Image from "next/image";
import { images } from "../Images";

const EastwoodAnabaMinistries = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={images.image2} alt="Emmanuel Asare Ministries" />
          <h1 className="ml-2 text-purple-700 text-xl font-bold">
            Emmanuel Asare Ministries
          </h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <button className="bg-gray-200 px-3 py-1 rounded">PARTNER</button>
          <button className="bg-gray-200 px-3 py-1 rounded">
            ONLINE RADIO
          </button>
        </nav>
      </header>
      {/* Navigation */}
      const NavBar = () = ; (
      <nav className="bg-purple-700 text-white p-4">
        <ul className="flex justify-between">
          <li>WHO WE ARE</li>
          <li>WHAT WE DO</li>
          <li>GET INVOLVED</li>
          <li>GROW YOUR FAITH</li>
          <li>MEDIA CENTRE</li>
          <li className="bg-yellow-200 text-black px-4 py-2">GIVE</li>
        </ul>
      </nav>
      );
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-96 bg-gray-800 text-white flex items-center justify-center">
          <Image
            src="/hero-image.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 text-center">
            <h2 className="text-4xl font-bold mb-2">How it all started</h2>
            <h3 className="text-3xl">Background of Ministry</h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src="/founder-image.jpg"
                alt="Founder"
                width={300}
                height={300}
                className="rounded"
              />
            </div>
            <div className="md:w-2/3">
              <p className="mb-4">
                The conception of EAM by the Founder, Rev. Joseph Eastwood Anaba
                was birthed out of his life experiences as a young and dynamic
                speaker, preaching REVIVAL to the body of Christ in churches and
                communities.
              </p>
              <p className="mb-4">
                In 1987, Northern Deliverance In Tears Ministry (NINTAM) was
                born in the Upper North Region of Ghana with the purpose of
                bringing revival to a region that was steeped in tradition.
              </p>
              <p>
                In 1988, following a clash between operations of the traditional
                churches and the dynamic fast pace culture of NINTAM, the
                ministry was changed to Broken Yoke Foundation.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-purple-700 text-white p-4 text-center">
        <p>Eastwood Anaba Ministries © {new Date().getFullYear()} | Webmail</p>
      </footer>
    </div>
  );
};

export default EastwoodAnabaMinistries;
