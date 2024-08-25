const NavBar = () => (
  <nav className="bg-sky-400 text-white px-[50px]">
    <ul className="flex justify-between">
      <li>
        <a href="/" className="">
          Home
        </a>
      </li>
      <li>
        <a href="/" className="">
          About Us
        </a>
      </li>
      <li>
        <a href="/" className="">
          Sermons
        </a>
      </li>
      <li>
        <a href="/" className="">
          Events
        </a>
      </li>
      <li>
        <a href="/" className="">
          Contact Us
        </a>
      </li>
      <button className="bg-amber-300 text-black px-4 py-2 rounded-[1rem]">
        <a href="" className="">
          GIVE
        </a>
      </button>
    </ul>
  </nav>
);

export default NavBar;
