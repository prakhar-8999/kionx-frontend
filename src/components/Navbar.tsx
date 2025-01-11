import {Menu} from "lucide-react";
import {useState} from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex items-center justify-between px-12 py-4 bg-white border-b">
        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium">
            Crypto Taxes
          </a>
          <a href="#" className="text-sm font-medium">
            Free Tools
          </a>
          <a href="#" className="text-sm font-medium">
            Resource Center
          </a>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="block md:hidden cursor-pointer">
          <Menu onClick={toggleNavbar} />
        </div>
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "scale-100" : "scale-0"
          }`}
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-80">
            <button
              onClick={toggleNavbar}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold focus:outline-none"
            >
              &times;
            </button>

            <nav className="space-y-4">
              <a href="#" className="text-sm font-medium">
                Crypto Taxes
              </a>
              <br />
              <br />
              <a href="#" className="text-sm font-medium">
                Free Tools
              </a>
              <br />
              <br />
              <a href="#" className="text-sm font-medium">
                Resource Center
              </a>
              <br />
              <br />
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
