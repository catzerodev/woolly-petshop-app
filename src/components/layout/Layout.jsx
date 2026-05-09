import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="p-4 bg-[#f6f4f2] text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>

      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;