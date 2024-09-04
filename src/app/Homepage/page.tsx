"use client";
import React from "react";
import Head from "next/head";
// import Image from "next/image";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BookSection from "./BookSection";
import Header from "./Header";

const Home = () => (
  <div className="">
    <Head>
      <title>Emmanuel Asare Ministries</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

  <div className="mx-[0.8rem] mt-[0.8rem]">
  <Header />
  <NavBar />


  
    <main className="mt-[10px]">
      <BookSection />
      {/* Add other sections here */}
    </main>
    <Footer />
    </div>
  </div>
);

export default Home;
