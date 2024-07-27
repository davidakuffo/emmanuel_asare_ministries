import React from "react";
import NavBar from "./Navabar";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Emmanuel Asare Ministries</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <NavBar />
    <main></main>
    <Footer />
  </div>
);

export default Home;
