import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative mt-24">

      {/* PUG */}
      <img
        src="/footer/pug.png"
        alt="Pug"
        className="
          absolute
          right-0
          top-[-100px]
          z-20
          w-full
          pointer-events-none
          select-none
        "
      />

      {/* BACKGROUND */}
      <div className="pt-6">

        <div
          className="
            relative
            bg-gradient-to-r
            from-[#F7D8FF]
            via-[#FFE6D6]
            to-[#FFB347]
            w-full
          "
        >

          {/* PAWS */}
          <img
            src="/paws.svg"
            alt=""
            className="
              absolute
              left-0
              top-0
              opacity-10
              w-[300px]
            "
          />

          <img
            src="/paws.svg"
            alt=""
            className="
              absolute
              right-0
              bottom-0
              opacity-10
              w-[300px]
              rotate-180
            "
          />

          {/* CONTENT */}
          <div
            className="
              max-w-7xl
              mx-auto

              px-8

              pt-56
              pb-16

              grid
              grid-cols-1
              md:grid-cols-5

              gap-12

              items-start

              relative
              z-20
            "
          >

            {/* BRAND */}
            <div>

              <h3
                className="
                  text-[52px]
                  leading-[0.92]
                  font-black
                  tracking-tight
                "
              >
                Woolly
                <br />
                PetShop
              </h3>

              <p
                className="
                  mt-6
                  text-[14px]
                  leading-[1.9]
                  text-[#625B5B]
                  max-w-[200px]
                "
              >
                Lo mejor para consentir a tu mascota con productos premium y grooming profesional.
              </p>

              {/* SOCIALS */}
              <div className="flex gap-4 mt-10">

                <button
                  className="
                    w-12
                    h-12
                    rounded-full

                    bg-white/90
                    backdrop-blur-md

                    shadow-md

                    flex
                    items-center
                    justify-center

                    hover:-translate-y-1
                    hover:shadow-lg

                    transition-all
                    duration-300
                  "
                >
                  <FaFacebookF size={16} />
                </button>

                <button
                  className="
                    w-12
                    h-12
                    rounded-full

                    bg-white/90
                    backdrop-blur-md

                    shadow-md

                    flex
                    items-center
                    justify-center

                    hover:-translate-y-1
                    hover:shadow-lg

                    transition-all
                    duration-300
                  "
                >
                  <FaInstagram size={17} />
                </button>

                <button
                  className="
                    w-12
                    h-12
                    rounded-full

                    bg-white/90
                    backdrop-blur-md

                    shadow-md

                    flex
                    items-center
                    justify-center

                    hover:-translate-y-1
                    hover:shadow-lg

                    transition-all
                    duration-300
                  "
                >
                  <FaWhatsapp size={17} />
                </button>

              </div>
            </div>

            {/* TIENDA */}
            <div>

              <h4
                className="
                  text-[14px]
                  font-black
                  uppercase
                  tracking-[1px]
                  mb-8
                  ml-6
                "
              >
                Tienda
              </h4>

              <ul className="space-y-4 text-[17px] text-[#5F5F5F] ml-6">

                <li className="hover:text-black transition cursor-pointer">
                  Nosotros
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Blog
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Gift cards
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Adopta
                </li>

              </ul>
            </div>

            {/* CATEGORIAS */}
            <div>

              <h4
                className="
                  text-[14px]
                  font-black
                  uppercase
                  tracking-[1px]
                  mb-7
                "
              >
                Categorías
              </h4>

              <ul className="space-y-4 text-[17px] text-[#5F5F5F]">

                <li>Ropa y accesorios</li>
                <li>Alimento</li>
                <li>Camas</li>
                <li>Kennels</li>

              </ul>
            </div>

            {/* LINKS */}
            <div>

              <h4
                className="
                  text-[14px]
                  font-black
                  uppercase
                  tracking-[1px]
                  mb-7
                "
              >
                Enlaces útiles
              </h4>

              <ul className="space-y-4 text-[17px] text-[#5F5F5F]">

                <li>Contacto</li>
                <li>Envíos</li>
                <li>Reembolsos</li>
                <li>Preguntas frecuentes</li>

              </ul>
            </div>

            {/* CONTACTO */}
            <div>

              <h4
                className="
                  text-[14px]
                  font-black
                  uppercase
                  tracking-[1px]
                  mb-7
                "
              >
                Contacto
              </h4>

              <div className="space-y-6 text-[#5F5F5F] text-[17px]">

                <div className="flex gap-4 items-start">

                  <HiOutlineLocationMarker
                    size={20}
                    className="mt-1 text-black"
                  />

                  <p className="leading-relaxed">
                    Av. Real Audiencia 59-200, Quito
                  </p>

                </div>

                <div className="flex gap-4 items-center">

                  <HiOutlinePhone
                    size={20}
                    className="text-black"
                  />

                  <p>+593 96 800 2100</p>

                </div>

                <div className="flex gap-4 items-center">

                  <HiOutlineMail
                    size={20}
                    className="text-black"
                  />

                  <p>ventas@woollypetshop.com</p>

                </div>

              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div
            className="
              border-t
              border-black/10

              py-6

              text-center

              text-[15px]
              text-[#6B6B6B]

              relative
              z-10
            "
          >
            © 2025 Woolly PetShop. Todos los derechos reservados.
          </div>

        </div>
      </div>
    </footer>
  );
}