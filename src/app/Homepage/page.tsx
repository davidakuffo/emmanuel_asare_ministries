"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BookSection from "./BookSection";
import Header from "./Header";

const Home = () => (
  <div>
    <Head>
      <title>Emmanuel Asare Ministries</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <NavBar />
    <main>
      <BookSection />
      {/* Add other sections here */}
    </main>
    <Footer />
  </div>
);

export default Home;
