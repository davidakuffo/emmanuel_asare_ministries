import Image from "next/image";
import { images } from "../Images";
const BookSection = () => (
  <section className="bg-blue-400 p-8 text-white">
    <div className="flex justify-between items-center">
      <div>
        <Image
          src={images.image4}
          alt="Satisfaction books"
          width={300}
          height={200}
        />
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-4">Order Now!</h2>
        <p className="text-2xl">+233 55 252 9504</p>
        <div className="mt-4">
          <button className="bg-black text-white px-4 py-2 mr-2">
            Available at amazon
          </button>
          <button className="bg-black text-white px-4 py-2">
            Available on amazon kindle
          </button>
        </div>
        <button className="bg-yellow-400 text-black px-8 py-2 mt-4">
          Click Here
        </button>
      </div>
    </div>
  </section>
);

export default BookSection;
