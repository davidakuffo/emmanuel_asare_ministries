import { useState } from "react";
import Image from "next/image";
import { images } from "../Images";

const BookCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    {
      src: images.image4, // Replace with your actual image paths or import statements
      alt: "Satisfaction books",
    },
    {
      src: images.image5, // Add more images as needed
      alt: "Another book image",
    },
    // Add more image objects here
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-blue-400 p-8 text-white">
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="bg-black text-white px-4 py-2 mr-2"
        >
          Previous
        </button>
        <div>
          <Image
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            width={300}
            height={200}
          />
        </div>
        <button
          onClick={handleNext}
          className="bg-black text-white px-4 py-2 ml-2"
        >
          Next
        </button>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-4xl font-bold mb-4">Order Now!</h2>
        <p className="text-2xl">+233 55 252 9504</p>
        <div className="mt-4">
          <button className="bg-black text-white px-4 py-2 mr-2">
            Available at Amazon
          </button>
          <button className="bg-black text-white px-4 py-2">
            Available on Amazon Kindle
          </button>
        </div>
        <button className="bg-yellow-400 text-black px-8 py-2 mt-4">
          Click Here
        </button>
      </div>
    </section>
  );
};

export default BookCarousel;
