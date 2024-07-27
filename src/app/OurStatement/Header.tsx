import Image from "next/image";
const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center">
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Eastwood Anaba Ministries"
        width={50}
        height={50}
      />
      <h1 className="ml-2 text-purple-700 text-xl font-bold">
        Emmanuel Asare Ministries
      </h1>
    </div>
    <nav className="hidden md:flex space-x-4">
      <button className="bg-gray-200 px-3 py-1 rounded">PARTNER</button>
      <button className="bg-gray-200 px-3 py-1 rounded">ONLINE RADIO</button>
    </nav>
  </header>
);

export default Header;
