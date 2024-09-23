import { FaSearch } from "react-icons/fa";
import Logo from "../assets/Logo.webp";
import Menu from "../components/Menu";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [Msearch, SetMsearch] = useState(false);
  return (
    <>
      <div className="container mx-auto px-3">
        <div>
          <div className="flex p-4 justify-between items-center">
            <div>
              <img src={Logo} alt="" className="w-[60px]" />
            </div>

            {/* Search menu */}
            <div className="max-sm:hidden">
              <div className="items-center flex gap-2">
                <input
                  type="text"
                  className="border-2 border-black outline-none  rounded-lg w-[250px] px-2"
                  placeholder="Search..."
                />
                <div className="bg-black text-white rounded-lg cursor-pointer p-2">
                  <FaSearch size={25} />
                </div>
              </div>
            </div>
            <div className="max-sm:block hidden">
              <div
                onClick={() => SetMsearch(!Msearch)}
                className="icon_wrapper hover:text-black hover:bg-white "
              >
                <FaSearch className="cursor-pointer duration-700 ml-1.5 mt-1 transition hover:duration-300" />
              </div>
            </div>
            {/* Menu */}
            <div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile search icon */}

      {/* Mobile search menu */}
      {Msearch ? (
        <div className="max-sm:block hidden">
          <div className="flex items-center -mt-[100px]">
            <input
              type="text"
              placeholder="Search products"
              className="p-2 border-4 border-Title mt-[100px] w-full"
            />
            <IoIosArrowUp
              onClick={() => SetMsearch(!Msearch)}
              size={30}
              className="absolute right-2 mt-[100px] cursor-pointer duration-700 border-2 rounded-full border-black scale-90 transition hover:scale-110 hover:-rotate-180 hover:duration-300"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
