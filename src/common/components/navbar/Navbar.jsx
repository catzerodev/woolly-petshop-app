import { Link } from "react-router-dom";
import { useState } from "react";

import {
  Search,
  Heart,
  ShoppingBag,
  User,
  PawPrint,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Tienda", href: "/shop" },
    { label: "Peluquería", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Nosotros", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 xl:px-10 pt-4 md:pt-5">
        {/* TOP BAR */}
        <div
          className="
            flex
            items-center
            justify-between

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
          <Link to="/" className="flex items-center gap-3 md:gap-4">
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
              <PawPrint className="text-[#5B4A4A]" size={20} />
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
          <div
            className="
              hidden
              md:flex

              items-center

              bg-white/85

              rounded-full

              px-5
              lg:px-6

              py-2.5
              lg:py-3

              w-[320px]
              lg:w-[560px]

              border
              border-[#ECECEC]
            "
          >
            <Search size={20} className="text-[#8A8A8A] mr-3" />

            <input
              type="text"
              placeholder="Buscar productos..."
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

          {/* RIGHT */}
          <div className="flex items-center gap-4 md:gap-5">
            {/* MOBILE SEARCH */}
            <Search
              size={21}
              className="
                md:hidden
                text-[#4B3A3A]
              "
            />

            {/* DESKTOP ICONS */}
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

              <User
                size={21}
                className="
                  text-[#4B3A3A]
                  hover:text-[#ff8a00]
                  transition
                  cursor-pointer
                "
              />

              {/* CART */}
              <div className="relative">
                <ShoppingBag
                  size={21}
                  className="
                    text-[#4B3A3A]
                    hover:text-[#ff8a00]
                    transition
                    cursor-pointer
                  "
                />

                <div
                  className="
                    absolute
                    -top-1.5
                    -right-1.5

                    w-3.5
                    h-3.5

                    rounded-full

                    bg-[#FF8A00]
                  "
                />
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
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
              <Menu size={20} className="text-[#4B3A3A]" />
            </button>
          </div>
        </div>

        {/* DESKTOP MENU */}
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

              gap-7
              lg:gap-12

              px-7
              lg:px-9

              py-3
              lg:py-4

              rounded-full

              bg-white/20
              backdrop-blur-md

              border
              border-white/20
            "
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="
                      relative

                      text-[16px]
                      lg:text-[20px]

                      font-medium

                      text-[#3B2A2A]

                      hover:text-[#ff8a00]

                      transition
                    "
              >
                {link.label}

                {index === 0 && (
                  <span
                    className="
                          absolute
                          left-0
                          -bottom-2

                          w-full
                          h-[3px]

                          rounded-full

                          bg-[#ff8a00]
                        "
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className="
              fixed
              inset-0

              bg-black/40

              z-50

              md:hidden
            "
          >
            <div
              className="
                absolute
                top-0
                right-0

                w-[85%]
                max-w-[340px]

                h-full

                bg-white

                p-6

                shadow-2xl
              "
            >
              {/* TOP */}
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-semibold text-[#2B1E1E]">Menú</h3>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="
                    w-10
                    h-10

                    rounded-full

                    bg-[#F5F5F5]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
      text-[20px]

      font-medium

      text-[#3B2A2A]

      hover:text-[#ff8a00]

      transition
    "
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
