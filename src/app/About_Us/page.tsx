import React from "react";
import Image from "next/image";
import { images } from "../Images";
import NavBar from "../Homepage/NavBar";
import Header from "../Homepage/Header";
import "./style.css";
import OrgChart from "./OrgChart";
const EmmanuelAsareMinistries = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="  relative h-96 bg-gray-800 text-white flex items-center justify-center">
          {/* <Image
            src={images.image3}
            alt="Emmanuel Asare Ministries"
            width={1080}
            height={500}
          /> */}
          <div className=" img-edit absolute inset-0 bg-black opacity-50"></div>
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
                src={images.image1}
                alt="Emmanuel Asare Ministries"
                width={281}
                height={110}
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
          <div>
            <OrgChart />
          </div>
        </div>
        {/* Executive Council & Board of Trustees Organizational Chart */}
      </main>
      {/* Footer */}
      <footer className="bg-sky-400 text-white p-4 text-center">
        <p>Emmanuel Asare Ministries © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default EmmanuelAsareMinistries;
