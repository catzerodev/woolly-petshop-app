import { useState } from "react";

import Navbar from "../../common/components/navbar/Navbar";
import Hero from "../../common/components/hero/Hero";
import Categories from "../../common/components/categories/Categories";
import Products from "../../common/components/products/Products";
import VideoBanner from "../../common/components/videobanner/VideoBanner";
import Brands from "../../common/components/brands/Brands";
import Services from "../../common/components/services/Services";
import Blog from "../../common/components/blog/Blog";
import Footer from "../../common/components/footer/Footer";

export default function HomePage() {

  const [search, setSearch] = useState("");

  return (
    <>

      <Navbar
        search={search}
        setSearch={setSearch}
        showSearch={true}
      />

      <Hero />

      <Categories />

      <Products search={search} />

      <VideoBanner />

      <Brands />

      <Services />

      <Blog />

      <Footer />

    </>
  );
}