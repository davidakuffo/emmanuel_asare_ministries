import Image from "next/image";
const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white">
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Eastwood Anaba Ministries"
        width={50}
        height={50}
      />
      <h1 className="ml-2 text-purple-700 font-bold">
        Emmanuel Asare
        <br />
        Minitries
      </h1>
    </div>
    <nav>
      <button className="bg-gray-300 px-4 py-2 mr-2">PARTNER TODAY</button>
      <button className="bg-gray-300 px-4 py-2 mr-2">ONLINE RADIO</button>
      <button className="bg-gray-300 px-4 py-2">COVID-19</button>
    </nav>
  </header>
);

export default Header;
