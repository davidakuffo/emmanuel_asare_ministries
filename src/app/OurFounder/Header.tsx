import Image from "next/image";
import { images } from "../Images";
const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center">
    <div className="flex items-center">
      <Image
        src={images.image2}
        alt="Emmanuel Asare Ministries"
        width={281}
        height={110}
      />
    </div>
    <nav className="hidden md:flex space-x-4">
      <button className="bg-gray-200 px-3 py-1 rounded">PARTNER</button>
      <button className="bg-gray-200 px-3 py-1 rounded">ONLINE RADIO</button>
    </nav>
  </header>
);

export default Header;
