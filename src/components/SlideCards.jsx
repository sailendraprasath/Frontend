import Slidebar from "../components/Slidebar";
import Cards from "../components/Cards";

const SlideCard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Sidebar */}
        <Slidebar />

        {/* Scrollable Cards */}
        <div className="lg:w-3/4 w-full p-4">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default SlideCard;
