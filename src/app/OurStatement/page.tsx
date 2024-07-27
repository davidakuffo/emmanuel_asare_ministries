import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

const Home = () => (
  <div>
    <Head>
      <title>Emmanuel Asare Ministries</title>
      <link rel="icon:" href="/favicon.ico" />
    </Head>

    <Header />
    <NavBar />
    <main></main>
    <Footer />
  </div>
);

export default Home;
