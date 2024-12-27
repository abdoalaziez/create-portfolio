import Logo from "../assets/Logo.svg"
const Navbar = () => {
  return (
    <header className="bg-white z-10 fixed left-0 right-0 shadow-md ">
      <nav className="bg-gray-300 flex items-center justify-between h-[60px] px-4">
        <img src={Logo} alt="Logo.svg" />
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-blue-700">Home</a></li>
          <li><a href="#skills" className="hover:text-red-500">Skills</a></li>
          <li><a href="#about" className="hover:text-red-500">About Me</a></li>
          <li><a href="#contact-me" className="hover:text-red-500">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
