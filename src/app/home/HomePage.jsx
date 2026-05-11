import Navbar from "../../common/components/navbar/Navbar";
import Hero from "../../common/components/hero/Hero";
import Categories from "../../common/components/categories/Categories";
import Products from "../../common/components/products/Products";
import VideoBanner from "../../common/components/videoBanner/VideoBanner";
import Brands from "../../common/components/brands/Brands";
import Services from "../../common/components/services/Services";
import Blog from "../../common/components/blog/Blog";
import Footer from "../../common/components/footer/Footer";

export default function HomePage() {
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