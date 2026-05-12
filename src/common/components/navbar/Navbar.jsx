import { Link } from "react-router-dom";
import { useState } from "react";

import Cart from "../cart/Cart";

import { useCartStore } from "../../../store/useCartStore";

import {
  Search,
  Heart,
  ShoppingBag,
  User,
  PawPrint,
  Menu,
} from "lucide-react";

export default function Navbar({
  search,
  setSearch,
  showSearch,
  products = [],
}) {

  const [menuOpen, setMenuOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);

  const { cart } = useCartStore();

  const demoProducts = [
    {
      id: 1,
      name: "Collar Premium",
      price: 29,
      image: "/products/collar.png",
    },
    {
      id: 2,
      name: "Cama Suave",
      price: 19,
      image: "/products/bed.png",
    },
    {
      id: 3,
      name: "Hoodie Cozy Paw",
      price: 21,
      image: "/products/hoodie.png",
    },
    {
      id: 4,
      name: "Casa Cat Lounge",
      price: 15,
      image: "/products/cat-house.png",
    },
  ];

  const activeProducts =
    products.length > 0
      ? products
      : demoProducts;

  const filteredProducts = activeProducts.filter((product) =>
    product.name
      ?.toLowerCase()
      .includes(search?.toLowerCase())
  );

  const navLinks = [
    { label: "Tienda", href: "/shop" },
    { label: "Peluquería", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Nosotros", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ];

  return (

    <>

      <header className="w-full absolute top-0 left-0 z-50">

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 xl:px-10 pt-4 md:pt-5">

          {/* TOP BAR */}

          <div
            className="
              flex
              items-center
              justify-between

              gap-6

              px-4
              md:px-6
              lg:px-7

              py-2.5
              md:py-3

              rounded-[26px]
              md:rounded-[34px]

              bg-white/40
              backdrop-blur-xl

              border
              border-white/30

              shadow-[0_8px_25px_rgba(0,0,0,0.06)]
            "
          >

            {/* LOGO */}

            <Link
              to="/"
              className="flex items-center gap-3 md:gap-4"
            >

              <div
                className="
                  w-10
                  h-10
                  md:w-12
                  md:h-12

                  rounded-2xl

                  bg-white/80

                  flex
                  items-center
                  justify-center

                  shadow-md
                "
              >

                <PawPrint
                  className="text-[#5B4A4A]"
                  size={20}
                />

              </div>

              <div className="leading-[1.1] tracking-[-1px]">

                <h2
                  className="
                    text-[18px]
                    md:text-[22px]

                    font-semibold

                    tracking-tight

                    text-[#3B2A2A]
                  "
                >
                  Woolly
                </h2>

                <p
                  className="
                    text-[15px]
                    md:text-[20px]

                    text-[#7B6A6A]

                    font-medium

                    -mt-1
                  "
                >
                  PetShop
                </p>

              </div>

            </Link>

            {/* SEARCH */}

            {showSearch && (

              <div className="relative hidden md:block w-full max-w-[950px]">

                <div
                  className="
                    flex
                    items-center

                    bg-white/85

                    rounded-full

                    px-5
                    lg:px-6

                    py-2.5
                    lg:py-3

                    border
                    border-[#ECECEC]

                    backdrop-blur-xl
                  "
                >

                  <Search
                    size={20}
                    className="text-[#8A8A8A] mr-3"
                  />

                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={search || ""}
                    onChange={(e) => setSearch?.(e.target.value)}
                    className="
                      bg-transparent
                      outline-none
                      w-full

                      text-[15px]
                      lg:text-[17px]

                      text-[#5B5B5B]
                      placeholder:text-[#B0B0B0]
                    "
                  />

                </div>

                {/* DROPDOWN */}

                {search && (

                  <div
                    className="
                      absolute

                      top-[78px]
                      left-0

                      w-full

                      bg-white/95
                      backdrop-blur-2xl

                      rounded-[28px]

                      border
                      border-white/50

                      shadow-[0_15px_40px_rgba(0,0,0,0.08)]

                      overflow-hidden

                      z-[9999]
                    "
                  >

                    <div
                      className="
                        p-3

                        flex
                        flex-col

                        gap-2
                      "
                    >

                      {filteredProducts.length > 0 ? (

                        filteredProducts
                          .slice(0, 5)
                          .map((product) => (

                            <Link
                              key={product.id}
                              to="/shop"
                              className="
                                flex
                                items-center

                                gap-4

                                p-3

                                rounded-2xl

                                hover:bg-[#FFF3E8]

                                transition-all
                              "
                            >

                              <img
                                src={product.image}
                                alt={product.name}
                                className="
                                  w-16
                                  h-16

                                  rounded-2xl

                                  object-cover

                                  bg-[#f8f8f8]
                                "
                              />

                              <div>

                                <h3 className="font-semibold text-lg">
                                  {product.name}
                                </h3>

                                <p className="text-[#FF6B00] font-bold">
                                  ${product.price}
                                </p>

                              </div>

                            </Link>

                          ))

                      ) : (

                        <div
                          className="
                            p-6

                            text-center

                            text-[#777]
                          "
                        >
                          No se encontraron productos
                        </div>

                      )}

                    </div>

                  </div>

                )}

              </div>

            )}

            {/* RIGHT */}

            <div className="flex items-center gap-4 md:gap-5">

              <Search
                size={21}
                className="
                  md:hidden
                  text-[#4B3A3A]
                "
              />

              <div className="hidden md:flex items-center gap-5">

                <Heart
                  size={21}
                  className="
                    text-[#4B3A3A]
                    hover:text-[#ff8a00]
                    transition
                    cursor-pointer
                  "
                />

                <a href="/login">

                <User size={22} />

                </a>

                <div
                  className="relative cursor-pointer"
                  onClick={() => setCartOpen(true)}
                >

                  <ShoppingBag
                    size={21}
                    className="
                      text-[#4B3A3A]
                      hover:text-[#ff8a00]
                      transition
                    "
                  />

                  {cart.length > 0 && (

                    <div
                      className="
                        absolute
                        -top-2
                        -right-2

                        min-w-[20px]
                        h-[20px]

                        px-1

                        rounded-full

                        bg-[#FF8A00]

                        text-white

                        text-[11px]

                        flex
                        items-center
                        justify-center

                        font-bold
                      "
                    >
                      {cart.length}
                    </div>

                  )}

                </div>

              </div>

              <button
                onClick={() => setMenuOpen(true)}
                className="
                  md:hidden

                  w-10
                  h-10

                  rounded-full

                  bg-white/80

                  flex
                  items-center
                  justify-center

                  shadow-md
                "
              >

                <Menu
                  size={20}
                  className="text-[#4B3A3A]"
                />

              </button>

            </div>

          </div>

          {/* DESKTOP MENU */}

          {!search && (

            <div
              className="
                hidden
                md:flex

                justify-start

                mt-5
                lg:mt-6
              "
            >

              <div
                className="
                  flex
                  items-center

                  gap-8
                  lg:gap-12

                  bg-white/35
                  backdrop-blur-xl

                  border
                  border-white/40

                  rounded-full

                  px-10
                  lg:px-12

                  py-5

                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                "
              >

                {navLinks.map((item) => (

                  <Link
                    key={item.label}
                    to={item.href}
                    className="
                      relative

                      text-[17px]
                      lg:text-[18px]

                      font-semibold

                      text-[#3A2A2A]

                      transition-all
                      duration-300

                      hover:text-[#FF8A00]
                    "
                  >

                    {item.label}

                  </Link>

                ))}

              </div>

            </div>

          )}

        </div>

      </header>

      <Cart
        open={cartOpen}
        setOpen={setCartOpen}
      />

    </>

  );
}