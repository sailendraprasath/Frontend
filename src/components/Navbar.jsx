import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import WhishCount from "../components/WhishCount";
import { FaHeart, FaSearch } from "react-icons/fa";
import CartCount from "../components/CartCount";
import { FaCartShopping } from "react-icons/fa6";
// import { RiShieldUserFill } from "react-icons/ri"; Contact
import Rose from "../assets/Rose.png";
import { AiOutlineClose } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [Msearch, SetMsearch] = useState(false);

  return (
    <>
      <div className="p-3 bg-Title"></div>
      <nav className="bg-bg1 p-4">
        <div className="container mx-auto flex items-center justify-between max-sm:pl-6 ">
          {/* Logo */}
          <img src={Rose} alt="" className="max-sm:w-[150px]" />
          {/* Input Field */}
          <div className="flex items-center gap-2 max-sm:hidden ">
            <input
              type="text"
              placeholder="search for products..."
              className="rounded-2xl w-[350px] px-2 py-2 outline-none border-none "
            />
            <div className="bg-white rounded-lg  cursor-pointer p-2 ">
              <FaSearch size={25} className=" " />
            </div>
          </div>

          {/* Menu Links (Large screens) */}
          <div className="flex items-center max-sm:grid max-sm:grid-cols-2 gap-[40px]">
            <div
              onClick={() => SetMsearch(!Msearch)}
              className="icon_wrapper hover:text-black  hover:bg-white max-sm:block hidden  "
            >
              <FaSearch className="cursor-pointer duration-700 ml-1.5 mt-1  transition   hover:duration-300" />
            </div>

            <div className="icon_wrapper relative hover:text-black  hover:bg-white ">
              <FaCartShopping className="cursor-pointer duration-700 rotate-0 scale-90 transition hover:scale-125 hover:-rotate-[360deg]  hover:duration-300" />
              <CartCount className="w-[25px] h-[25px]" />
            </div>
            <div className="icon_wrapper relative hover:text-black  hover:bg-white ">
              <FaHeart className="cursor-pointer duration-700 rotate-0 scale-90 transition hover:scale-125 hover:-rotate-[360deg]  hover:duration-300" />
              <WhishCount className="w-[25px] h-[25px]  " />
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="icon_wrapper hover:text-black  hover:bg-white  "
            >
              <GiHamburgerMenu className="cursor-pointer duration-700 rotate-180 scale-90 transition hover:scale-125 hover:-rotate-180  hover:duration-300" />
            </div>
          </div>
        </div>
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
        ) : (
          ""
        )}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-Title z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-Title z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-6 cursor-pointer duration-700 rotate-180 scale-90 transition hover:scale-110 hover:-rotate-180  hover:duration-300"
          />
          <h2 className="text-2xl p-4">
            The<span className="font-bold">Rose</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex ">
                <TbTruckDelivery size={28} className="mr-4" />
                Orders
              </li>
              <li className="text-xl py-4 flex ">
                <TbTruckDelivery size={28} className="mr-4" />
                Orders
              </li>
              <li className="text-xl py-4 flex ">
                <TbTruckDelivery size={28} className="mr-4" />
                Orders
              </li>
              <li className="text-xl py-4 flex ">
                <TbTruckDelivery size={28} className="mr-4" />
                Orders
              </li>
              <li className="text-xl py-4 flex ">
                <TbTruckDelivery size={28} className="mr-4" />
                Orders
              </li>
            </ul>
          </nav>
        </div>
        {/* Mobile Menu */}
      </nav>
      {Msearch ? (
        <div className="max-sm:block hidden">
          <input
            type="text"
            placeholder="search products"
            className=" p-2 border-4 border-Title w-full"
          />
          <IoIosArrowUp
            onClick={() => SetMsearch(!Msearch)}
            size={30}
            className="absolute right-4 top-60  cursor-pointer duration-700 border-2 rounded-full border-black scale-90 transition hover:scale-110 hover:-rotate-180  hover:duration-300"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
