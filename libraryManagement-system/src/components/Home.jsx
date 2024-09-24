import Header from "../components/commonComponents/Header";
import HeroSeaction from "../components/miniComponents/heroSeaction/HeroSeaction";
import PopulorSales from "../components/miniComponents/populorSales/populorSales";
import Highlight from "../components/miniComponents/highlight/Highlight";
import Slides from "./miniComponents/slides/Slides";
import AllProduct from "./miniComponents/allProducts/AllProducts";
import MapForm from "./miniComponents/mapForm/MapForm";
import Footer from "../adminPanel/UI/commonComponents/Footer";
import Demo from "./miniComponents/Demo/Demo";
function Home() {
  return (
    <>
      <Header />
      <HeroSeaction />
      <Demo />
      <PopulorSales />
      <Highlight />
      <AllProduct />
      <Slides />
      <MapForm />
      <Footer />
    </>
  );
}

export default Home;
