const NavBar = () => (
  <nav className="bg-sky-400 text-white p-4">
    <ul className="flex justify-between">
      <li>Home</li>
      <li>About Us</li>
      <li>Sermons</li>
      <li>Events</li>
      <li>Contact Us</li>
      <button className="bg-amber-300 text-black px-4 py-2 rounded-[1rem]">
        GIVE
      </button>
    </ul>
  </nav>
);

export default NavBar;
