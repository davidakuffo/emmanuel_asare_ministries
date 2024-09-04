const NavBar = () => (
  <nav className="bg-sky-400 text-white px-[20px]">
    <ul className="flex justify-between h-[50px] pt-[0.8rem]">
      <div className="flex gap-[1rem]">
      <li>
        <a href="/" className="px-[1rem] transition duration-600 hover:bg-white hover:text-black py-[20px] transition">
          Home
        </a>
      </li>
      <li>
        <a href="/" className="px-[1rem] transition duration-700 hover:bg-white hover:text-black py-[20px] transition">
          About Us
        </a>
      </li>
      <li>
        <a href="/" className="px-[1rem] transition duration-700 hover:bg-white hover:text-black py-[20px] transition">
          Sermons
        </a>
      </li>
      <li>
        <a href="/" className="px-[1rem] transition duration-700 hover:bg-white hover:text-black py-[20px] transition">
          Events
        </a>
      </li>
      <li>
        <a href="/" className="px-[1rem] transition duration-1000 hover:bg-white hover:text-black py-[20px] transition">
          Contact Us
        </a>
      </li>
      </div> 

      <div className="">
        <a href="" className="bg-amber-300 hover:font-semibold text-[#3C3D37] mr-[0.5rem] px-[1.4rem] py-[0.5rem] my-[0.3rem] rounded-[10px] hover:bg-[rgba(252,222,112,0.5)]">
          Give
        </a>
      </div>
 
    </ul>
  </nav>
);

export default NavBar;
