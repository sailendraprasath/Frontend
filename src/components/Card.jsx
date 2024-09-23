// import { useState } from "react";
// import { useState } from "react";
import vegitable from "../assets/vegitables.png";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Card = () => {
  const Products = [
    {
      img: vegitable,
      name: "Tomato",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: vegitable,
      name: "Tomato",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: vegitable,
      name: "Tomato",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: vegitable,
      name: "Tomato",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  //   const [increase, SetIncrease] = useState();

  return (
    <>
      <div className="max-sm:flex  max-sm:justify-center  p-3">
        <div className=" justify-evenly md:ml-20  grid grid-cols-2 lg:flex lg:gap-6 lg:-ml-5 lg:grid-cols-4 gap-6 pt-4 max-sm:grid max-sm:grid-cols-1 ">
          {Products.map((product, index) => (
            <div
              key={index}
              className="border-2 w-[250px]  rounded-xl relative bg-white p-2"
            >
              {/* Heart Icon */}
              <CiHeart className="absolute -right-1 top-[-5px] " size={25} />

              {/* Product Image */}
              <div className="bg-slate-100 rounded-t-xl overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-2">
                <h1 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h1>
                <p className="text-sm text-gray-500 mt-2">{product.para}</p>
              </div>

              {/* Price and Quantity Section */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h1 className="text-xl font-bold text-green-600">
                    {/* {increase} */}
                  </h1>
                </div>
                <select className="border border-gray-300 rounded-md p-1 text-sm">
                  <option value="100">100gm</option>
                  <option value="500">500gm</option>
                  <option value="1">1kg</option>
                </select>
              </div>
              {/* inga namma add to cart button tag iruku */}
              <div className="pt-3">
                <div className="bg-green-500  rounded-full flex justify-center">
                  <button className="">Add to Cart</button>
                </div>
              </div>
              {/* inga rating */}
              <div className="flex justify-center items-center mt-4">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <CiStar key={i} className="text-yellow-500" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
