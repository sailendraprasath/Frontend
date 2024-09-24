import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import SlideCard from "../components/SlideCards";
// import Carousel from "../components/Carousel";
// import Card from "../components/Card";
import Welcome from "../components/Welcome";
import FooterShop from "./FooterShop";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Welcome />
        <SlideCard />
        <Cards />
        <FooterShop />
        {/* <Carousel /> */}
        {/* <Card /> */}
      </div>
    </>
  );
};

export default Home;
