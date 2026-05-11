import Navbar from "./common/components/navbar/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import VideoBanner from "./components/VideoBanner";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <VideoBanner />
      <Brands />
      <Services />
      <Blog />
      <Footer />
    </>
  );
}

export default App;