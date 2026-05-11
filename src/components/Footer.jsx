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
    <footer className="relative mt-16 md:mt-20 lg:mt-24 overflow-hidden">

      {/* PAWS */}
      <img
        src="/paws.svg"
        alt=""
        className="
          absolute

          left-[-90px]
          bottom-[120px]

          w-[220px]
          md:w-[320px]
          lg:w-[420px]

          opacity-[0.025]

          rotate-[8deg]

          pointer-events-none
          select-none

          z-[1]
        "
      />

      {/* PUG */}
      <img
        src="/footer/pug.png"
        alt="Pug"
        className="
          hidden
          lg:block

          absolute

          right-0

          top-[-10px]

          z-30

          w-full

          pointer-events-none
          select-none
        "
      />

      <div className="pt-3 md:pt-5 lg:pt-6">

        <div
          className="
            relative

            bg-gradient-to-r
            from-[#F7D8FF]
            via-[#FFE6D6]
            to-[#FFB347]

            w-full
            overflow-hidden
          "
        >

          <div
            className="
              max-w-[1400px]
              mx-auto

              px-5
              md:px-8
              xl:px-10

              pt-20
              md:pt-44
              lg:pt-72

              pb-10
              md:pb-14
              lg:pb-16

              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-5

              gap-10
              md:gap-12

              relative
              z-20
            "
          >

            {/* BRAND */}
            <div>

              <h3
                className="
                  text-[34px]
                  md:text-[46px]
                  lg:text-[52px]

                  leading-[1]

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
                  mt-4
                  md:mt-6

                  text-[14px]
                  md:text-[15px]

                  leading-[1.8]

                  text-[#625B5B]

                  max-w-[220px]
                "
              >
                Lo mejor para consentir a tu mascota con productos premium y grooming profesional.
              </p>

              {/* SOCIALS */}
              <div className="flex gap-3 mt-7 md:mt-10">

                <a
                  href="#"
                  className="
                    w-10
                    h-10

                    rounded-full

                    bg-white/90

                    shadow-md

                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="#"
                  className="
                    w-10
                    h-10

                    rounded-full

                    bg-white/90

                    shadow-md

                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaInstagram size={15} />
                </a>

                <a
                  href="#"
                  className="
                    w-10
                    h-10

                    rounded-full

                    bg-white/90

                    shadow-md

                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaWhatsapp size={15} />
                </a>

              </div>

              {/* MOBILE CONTACT */}
              <div
                className="
                  mt-8

                  space-y-3

                  text-[#5F5F5F]

                  text-[14px]
                  md:text-[15px]

                  leading-relaxed

                  lg:hidden
                "
              >

                <p>Quito, Ecuador</p>

                <p>+593 96 800 2100</p>

                <p>ventas@woollypetshop.com</p>

              </div>

            </div>

            {/* STORE */}
            <div className="hidden md:block">

              <h4
                className="
                  text-[13px]

                  font-black

                  uppercase

                  tracking-[1px]

                  mb-6
                "
              >
                Tienda
              </h4>

              <ul
                className="
                  space-y-3

                  text-[15px]

                  text-[#5F5F5F]
                "
              >
                <li><a href="/">Nosotros</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/">Gift cards</a></li>
                <li><a href="/">Adopta</a></li>
              </ul>

            </div>

            {/* CATEGORIES */}
            <div className="hidden md:block">

              <h4
                className="
                  text-[13px]

                  font-black

                  uppercase

                  tracking-[1px]

                  mb-6
                "
              >
                Categorías
              </h4>

              <ul
                className="
                  space-y-3

                  text-[15px]

                  text-[#5F5F5F]
                "
              >
                <li><a href="/shop">Ropa y accesorios</a></li>
                <li><a href="/shop">Alimento</a></li>
                <li><a href="/shop">Camas</a></li>
                <li><a href="/shop">Kennels</a></li>
              </ul>

            </div>

            {/* LINKS */}
            <div className="hidden md:block">

              <h4
                className="
                  text-[13px]

                  font-black

                  uppercase

                  tracking-[1px]

                  mb-6
                "
              >
                Enlaces útiles
              </h4>

              <ul
                className="
                  space-y-3

                  text-[15px]

                  text-[#5F5F5F]
                "
              >
                <li><a href="/">Contacto</a></li>
                <li><a href="/">Envíos</a></li>
                <li><a href="/">Reembolsos</a></li>
                <li><a href="/">Preguntas frecuentes</a></li>
              </ul>

            </div>

            {/* CONTACT */}
            <div className="hidden lg:block">

              <h4
                className="
                  text-[13px]

                  font-black

                  uppercase

                  tracking-[1px]

                  mb-6
                "
              >
                Contacto
              </h4>

              <div
                className="
                  space-y-5

                  text-[#5F5F5F]

                  text-[14px]
                  md:text-[16px]
                "
              >

                <div className="flex gap-3 items-start">
                  <HiOutlineLocationMarker
                    size={17}
                    className="mt-1 text-black"
                  />
                  <p>Av. Real Audiencia 59-200, Quito</p>
                </div>

                <div className="flex gap-3 items-center">
                  <HiOutlinePhone
                    size={17}
                    className="text-black"
                  />
                  <p>+593 96 800 2100</p>
                </div>

                <div className="flex gap-3 items-center">
                  <HiOutlineMail
                    size={17}
                    className="text-black"
                  />
                  <p>ventas@woollypetshop.com</p>
                </div>

              </div>

            </div>

          </div>

          {/* COPYRIGHT */}
          <div
            className="
              border-t
              border-black/10

              py-4
              md:py-6

              text-center

              text-[12px]
              md:text-[14px]

              text-[#6B6B6B]

              relative
              z-20
            "
          >
            © 2025 Woolly PetShop. Todos los derechos reservados.
          </div>

        </div>
      </div>
    </footer>
  );
}