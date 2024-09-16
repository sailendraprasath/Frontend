import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import WhishCount from "../components/WhishCount";
import { FaHeart, FaSearch } from "react-icons/fa";
import CartCount from "../components/CartCount";
import { FaCartShopping } from "react-icons/fa6";
import { RiShieldUserFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rose-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src="src/assets/Rose.png" alt="" />
        {/* Input Field */}
        <div className="flex items-center gap-2 max-sm:hidden">
          <input
            type="text"
            placeholder="search for products..."
            className="rounded-2xl  px-2 py-2 outline-none border-none "
          />
          <div className="bg-white rounded-lg  cursor-pointer p-2 ">
            <FaSearch size={25} className=" " />
          </div>
        </div>

        {/* Hamburger Icon (for small screens) */}

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Menu Links (Large screens) */}
        <div className="flex items-center gap-[40px]">
          <div className="icon_wrapper hover:text-black  hover:bg-white ">
            <RiShieldUserFill />
          </div>
          <div className="icon_wrapper relative hover:text-black  hover:bg-white ">
            <FaCartShopping />
            <CartCount className="w-[25px] h-[25px]" />
          </div>
          <div className="icon_wrapper relative hover:text-black  hover:bg-white ">
            <FaHeart />
            <WhishCount className="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#home" className="block text-white py-2">
            Home
          </a>
          <a href="#about" className="block text-white py-2">
            About
          </a>
          <a href="#services" className="block text-white py-2">
            Services
          </a>
          <a href="#contact" className="block text-white py-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
