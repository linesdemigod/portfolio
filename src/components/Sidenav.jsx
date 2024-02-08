function Sidenav({ handleShowMenu }) {
  return (
    <div
      className={`w-64 bg-backgroundPrimary text-white p-4 transform   transition-transform duration-200 ease-in-out fixed top-0 left-0 h-screen z-10 ${handleShowMenu}`}
      id="sidebar"
    >
      <ul className="py-10">
        <li className="mb-2">
          <a
            href="/"
            className="block text-white hover:bg-gray-700 p-2 rounded"
          >
            Home
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#about"
            className="block text-white hover:bg-gray-700 p-2 rounded"
          >
            About
          </a>
        </li>
        <li className="mb-2">
          <a href="" className="block text-white hover:bg-gray-700 p-2 rounded">
            Experience
          </a>
        </li>
        <li className="mb-2">
          <a href="" className="block text-white hover:bg-gray-700 p-2 rounded">
            Portfolio
          </a>
        </li>
        <li className="mb-2">
          <a href="" className="block text-white hover:bg-gray-700 p-2 rounded">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
