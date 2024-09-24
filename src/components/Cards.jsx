import { useState } from "react";
import Vegetables from "../assets/vegitables.png";

const Cards = () => {
  const [selectData, setSelectData] = useState({}); // Track selected amount for each card

  const handleSelectData = (e, cardId) => {
    const { value } = e.target;
    setSelectData((prevData) => ({
      ...prevData,
      [cardId]: value, // Store the selected amount using card ID
    }));
  };

  const cards = [
    {
      id: 1,
      title: "Apple",
      img: Vegetables,
      h1: "Fresh and Crunchy Apples",
      para: "Enjoy the crisp taste of freshly picked apples, perfect for snacking.",
    },
    {
      id: 2,
      title: "Banana",
      img: Vegetables,
      h1: "Sweet and Soft Bananas",
      para: "A great source of energy, bananas are perfect for on-the-go snacking.",
    },
    {
      id: 3,
      title: "Orange",
      img: Vegetables,
      h1: "Juicy Oranges",
      para: "Citrusy and refreshing, oranges are rich in vitamin C.",
    },
    {
      id: 4,
      title: "Grapes",
      img: Vegetables,
      h1: "Sweet and Succulent Grapes",
      para: "Enjoy a handful of grapes for a burst of sweetness.",
    },
    {
      id: 5,
      title: "Strawberries",
      img: Vegetables,
      h1: "Delicious Strawberries",
      para: "Perfect for desserts or snacking, these berries are a favorite!",
    },
    {
      id: 6,
      title: "Watermelon",
      img: Vegetables,
      h1: "Refreshing Watermelon",
      para: "Stay hydrated with the juicy sweetness of fresh watermelon.",
    },
    {
      id: 7,
      title: "Pineapple",
      img: Vegetables,
      h1: "Tropical Pineapple",
      para: "Enjoy the sweet and tangy flavor of ripe pineapple.",
    },
    {
      id: 8,
      title: "Mango",
      img: Vegetables,
      h1: "Ripe and Sweet Mango",
      para: "Indulge in the tropical sweetness of fresh mangoes.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Fruits</h1>

      {/* Scrollable Cards */}
      <div className="flex overflow-x-scroll space-x-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[250px] max-w-[250px] bg-rose-50 border rounded-lg shadow-lg p-4"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="flex space-x-[60px] mt-4">
              {/* Amount Selection */}
              <select
                name="amount"
                id="amount"
                value={selectData[card.id] || ""} // Use card ID to get selected value
                onChange={(e) => handleSelectData(e, card.id)} // Pass card ID
                className="bg-gray-200 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="₹500">1 kg</option>
                <option value="₹250">500 g</option>
                <option value="₹125">250 g</option>
                <option value="₹50">5 kg</option>
              </select>
              <div>
                <p className="mt-2">{selectData[card.id] || "None"}</p>
              </div>
            </div>

            <h2 className="text-lg text-center font-semibold mt-4">
              {card.title}
            </h2>
            <p className="text-[12px] text-center font-semibold mt-2">
              {card.para}
            </p>
            <div className="mt-4 flex justify-between">
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                Add to Cart
              </button>
              <button className="bg-rose-400 text-white px-3 py-1 rounded hover:bg-rose-500">
                Wish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
