import {
  Search,
  Heart,
  ShoppingBag,
  User,
  PawPrint,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 pt-5">

        {/* TOP BAR */}
        <div
          className="
            flex items-center justify-between

            px-7
            py-2.5

            rounded-[34px]

            bg-white/32
            backdrop-blur-2xl

            border border-white/35

            shadow-[0_10px_35px_rgba(255,255,255,0.12)]
          "
        >

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12

                rounded-2xl

                bg-white/75

                flex
                items-center
                justify-center

                shadow-md
              "
            >
              <PawPrint
                className="text-[#5B4A4A]"
                size={24}
              />
            </div>

            <div className="leading-none">
              <h2
                className="
                  text-[22px]
                  font-semibold
                  tracking-tight
                  text-[#3B2A2A]
                "
              >
                Woolly
              </h2>

              <p
                className="
                  text-[20px]
                  text-[#7B6A6A]
                  font-medium
                  -mt-1
                "
              >
                PetShop
              </p>
            </div>
          </div>

          {/* SEARCH */}
          <div
            className="
              flex
              items-center

              bg-white/80

              rounded-full

              px-6
              py-3

              w-[560px]

              border border-[#ECECEC]

              shadow-inner
            "
          >
            <Search
              size={22}
              className="text-[#8A8A8A] mr-3"
            />

            <input
              type="text"
              placeholder="Buscar productos..."
              className="
                bg-transparent
                outline-none
                w-full

                text-[17px]

                text-[#5B5B5B]
                placeholder:text-[#B0B0B0]
              "
            />
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-5 pr-1">

            <Heart
              size={22}
              strokeWidth={2}
              className="
                text-[#4B3A3A]
                hover:text-[#ff8a00]
                transition
                cursor-pointer
              "
            />

            <User
              size={22}
              strokeWidth={2}
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
                size={22}
                strokeWidth={2}
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

                  shadow-[0_0_10px_rgba(255,138,0,0.7)]
                "
              />
            </div>
          </div>
        </div>

        {/* FLOATING MENU */}
        <div className="flex justify-start pl-[20px] mt-6">
          <div
            className="
              flex items-center gap-12

              px-9
              py-4

              rounded-full

              bg-transparent
              backdrop-blur-md

              border border-white/10

              shadow-[0_8px_20px_rgba(255,255,255,0.08)]
            "
          >

            <a
              href="#"
              className="
                relative
                text-[20px]
                font-medium
                text-[#3B2A2A]
                hover:text-[#ff8a00]
                transition
              "
            >
              Tienda

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
            </a>

            <a
              href="#"
              className="
                text-[20px]
                font-medium
                text-[#3B2A2A]
                hover:text-[#ff8a00]
                transition
              "
            >
              Peluquería
            </a>

            <a
              href="#"
              className="
                text-[20px]
                font-medium
                text-[#3B2A2A]
                hover:text-[#ff8a00]
                transition
              "
            >
              Blog
            </a>

            <a
              href="#"
              className="
                text-[20px]
                font-medium
                text-[#3B2A2A]
                hover:text-[#ff8a00]
                transition
              "
            >
              Nosotros
            </a>

            <a
              href="#"
              className="
                text-[20px]
                font-medium
                text-[#3B2A2A]
                hover:text-[#ff8a00]
                transition
              "
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}