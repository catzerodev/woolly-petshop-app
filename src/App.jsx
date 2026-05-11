import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./app/home/HomePage";
import ShopPage from "./app/shop/ShopPage";
import ServicesPage from "./app/services/ServicesPage";
import BlogPage from "./app/blog/BlogPage";
import AboutPage from "./app/about/AboutPage";
import ContactPage from "./app/contact/ContactPage";
import LoginPage from "./app/login/LoginPage";
import DashboardPage from "./app/dashboard/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;