"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { images } from "../Images";
import Header from "../Homepage/Header";
import NavBar from "../Homepage/NavBar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header/>
      <NavBar/>

      <div className="bg-blue-400 text-white py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What We Believe In</h2>
          <h3 className="text-2xl font-semibold">Our Statements</h3>
        </div>
        <Image
          src={images.image5} // Replace with your actual image path
          alt="Bible and Hands"
          layout="responsive"
          width={96}
          height={200}
          className="rounded-lg shadow-md"
        />
      </div>

      <main className="container mx-auto py-16">
        <section>
          <h3 className="text-2xl font-bold mb-4">Vision</h3>
          <p className="text-gray-700 mb-2">
            To be a repositioned and revived people of God ready for the return
            of our Lord Jesus Christ.
          </p>
          <p className="text-gray-700 mb-4">
            Scripture Reference: (Ephesians 5:27 and Luke 1:17)
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4">Mission</h3>
          <p className="text-gray-700 mb-2">
            Evangelising the unsaved, Empowering believers to operate in
            spiritual gifts, Engaging partners in global missions, Educating
            ministers and church workers in the work of ministry, and Endowing
            the deprived.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Statements of Faith</h2>

          <section>
            <h3 className="text-xl font-bold mb-2">About God</h3>
            <p className="text-gray-700 mb-4">
              God is the creator and ruler of the universe. He has eternally
              existed in three persons - the Father, the Son, and the Holy
              Spirit. These three are co-equal and are one God.
            </p>
            <p className="text-gray-700 mb-4">
              (Genesis 1:1, 26, 27; 3:22; Psalm 90:2; Matthew 28:19; 1 Peter
              1:2; 2; Corinthians 13:14).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-2">About Man</h3>
            <p className="text-gray-700 mb-4">
              Man is made in the spiritual image of God, to be like him in
              character. He is the supreme object of God's creation. Although
              man has tremendous potential for good, he is marred by an attitude
              of disobedience toward God called "sin." This attitude separates
              man from God.
            </p>
            <p className="text-gray-700 mb-4">
              (Genesis 1:27; Psalm 8:3-6; Isaiah 53:6a; Romans 3:23; Isaiah
              59:1, 2).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-2">About Eternity</h3>
            <p className="text-gray-700 mb-4">
              Man was created to exist forever. He will either exist eternally
              separated from God by sin or in union with God through forgiveness
              and salvation. To be eternally separated from God is hell. To be
              eternally in union with him is eternal life. Heaven and hell are
              places of eternal existence.
            </p>
            <p className="text-gray-700 mb-4">
              (John 3:16; John 2:25; John 5:11-13; Romans 6:23; Revelation
              20:15; 1 John 5:11-12; Matthew 25:31-46).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-2">About Jesus Christ</h3>
            <p className="text-gray-700 mb-4">
              Jesus Christ is the Son of God. He is co-equal with the Father.
              Jesus lived a sinless human life and offered himself as the
              perfect sacrifice for the sins of all men by dying on a cross. He
              arose from the dead after three days to demonstrate His power over
              sin and death. He ascended to heaven's glory and will return again
              to earth to reign as King of Kings and Lord of Lords.
            </p>
            <p className="text-gray-700 mb-4">
              (Matthew 1:22, 23; Isaiah 9:6; John 1:1-5, 14:10-30; Hebrews 4:14,
              15; 1 Corinthians 15:3, 4; Romans 1:3, 4; Acts 1:9-11; 1 Timothy
              6:14, 15; Titus 2:13).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-2">About Salvation</h3>
            <p className="text-gray-700 mb-4">
              Salvation is a gift from God to man. Man can never make up for his
              sin by self-improvement or good works - only by trusting in Jesus
              Christ as God's offer of forgiveness can man be saved from sin's
              penalty. Eternal life begins the moment one receives Jesus Christ
              into his life by faith.
            </p>
            <p className="text-gray-700 mb-4">
              (Romans 6:23; Ephesians 2:8, 9; John 14:6, 1:12; Titus 3:5;
              Galatians 3:26; Romans 5:1).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-2">About The Holy Spirit</h3>
            <p className="text-gray-700 mb-4">
              Man was created to exist forever. He will either exist eternally
              separated from God by sin or in union with God through forgiveness
              and salvation. To be eternally separated from God is hell. To be
              eternally in union with him is eternal life. Heaven and hell are
              places of eternal existence.
            </p>
            <p className="text-gray-700 mb-4">
              (John 3:16; John 2:25; John 5:11-13; Romans 6:23; Revelation
              20:15; 1 John 5:11-12; Matthew 25:31-46).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-2">About The Bible</h3>
            <p className="text-gray-700 mb-4">
              The Bible is God's word to all men. It was written by human
              authors, under the supernatural guidance of the Holy Spirit. It is
              the supreme source of truth for Christian beliefs and living.
              Because it is inspired by God, it is truth without any mixture of
              error.
            </p>
            <p className="text-gray-700 mb-4">
              (2 Timothy 3:16; 2 Peter 1:20, 21; 2 Timothy 1:13; Psalm
              119:105,160, 12:6; Proverbs 30:5).
            </p>
          </section>
        </section>
      </main>

      <footer className="bg-sky-400 text-white p-4 text-center">
        <div>
          <p>Emmanuel Asare Ministries © {new Date().getFullYear()}</p>
        </div>
      </footer>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="bg-purple-500 w-64 h-screen fixed top-0 right-0 z-20 shadow-lg transition-all duration-300 ease-in-out"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="p-4">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="space-y-4">
              <a href="#" className="text-white hover:text-gray-300">
                Who We Are
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                What We Do
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Get Involved
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Grow Your Faith
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Media Centre
              </a>
              <a
                href="#"
                className="bg-white text-purple-500 px-4 py-2 rounded-md"
              >
                Partner Today
              </a>
              <a
                href="#"
                className="bg-white text-purple-500 px-4 py-2 rounded-md"
              >
                Online Radio
              </a>
              <a
                href="#"
                className="bg-white text-purple-500 px-4 py-2 rounded-md"
              >
                COVID-19
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
