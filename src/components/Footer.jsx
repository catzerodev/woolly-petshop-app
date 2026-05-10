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
    <footer
      className="
        relative

        mt-16
        md:mt-20
        lg:mt-24
      "
    >

      <img
        src="/footer/pug.png"
        alt="Pug"
        className="
          absolute
          right-0

          top-[-30px]
          md:top-[-70px]
          lg:top-[-100px]

          z-20

          w-full

          pointer-events-none
          select-none
        "
      />

      <div
        className="
          pt-3
          md:pt-5
          lg:pt-6
        "
      >

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

          <img
            src="/paws.svg"
            alt=""
            className="
              absolute
              left-0
              top-0

              opacity-10

              w-[140px]
              md:w-[220px]
              lg:w-[300px]
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

              w-[140px]
              md:w-[220px]
              lg:w-[300px]

              rotate-180
            "
          />

          <div
            className="
              max-w-[1400px]
              mx-auto

              px-5
              md:px-8
              xl:px-10

              pt-28
              md:pt-44
              lg:pt-56

              pb-12
              md:pb-14
              lg:pb-16

              grid

              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5

              gap-10
              md:gap-12

              items-start

              relative
              z-20
            "
          >

            <div>

              <h3
                className="
                  text-[38px]
                  md:text-[46px]
                  lg:text-[52px]

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
                  mt-5
                  md:mt-6

                  text-[14px]
                  md:text-[15px]

                  leading-[1.9]

                  text-[#625B5B]

                  max-w-[220px]
                "
              >
                Lo mejor para consentir a tu mascota con productos premium y grooming profesional.
              </p>

              <div
                className="
                  flex

                  gap-3
                  md:gap-4

                  mt-8
                  md:mt-10
                "
              >

                <a
                  href="#"
                  className="
                    w-10
                    h-10
                    md:w-12
                    md:h-12

                    rounded-full

                    bg-white/90

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
                  <FaFacebookF size={15} />
                </a>

                <a
                  href="#"
                  className="
                    w-10
                    h-10
                    md:w-12
                    md:h-12

                    rounded-full

                    bg-white/90

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
                  <FaInstagram size={16} />
                </a>

                <a
                  href="#"
                  className="
                    w-10
                    h-10
                    md:w-12
                    md:h-12

                    rounded-full

                    bg-white/90

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
                  <FaWhatsapp size={16} />
                </a>

              </div>

            </div>

            <div>

              <h4
                className="
                  text-[13px]
                  md:text-[14px]

                  font-black

                  uppercase

                  tracking-[1px]

                  mb-6
                  md:mb-8

                  lg:ml-6
                "
              >
                Tienda
              </h4>

              <ul
                className="
                  space-y-3
                  md:space-y-4

                  text-[15px]
                  md:text-[17px]

                  text-[#5F5F5F]

                  lg:ml-6
                "
              >

                <li><a href="/" className="hover:text-black transition">Nosotros</a></li>
                <li><a href="/blog" className="hover:text-black transition">Blog</a></li>
                <li><a href="/" className="hover:text-black transition">Gift cards</a></li>
                <li><a href="/" className="hover:text-black transition">Adopta</a></li>

              </ul>

            </div>

            <div>

              <h4
                className="
                  text-[13px]
                  md:text-[14px]

                  font-black

                  uppercase

                  tracking-[1px]

                  mb-6
                  md:mb-7
                "
              >
                Categorías
              </h4>

              <ul
                className="
                  space-y-3
                  md:space-y-4

                  text-[15px]
                  md:text-[17px]

                  text-[#5F5F5F]
                "
              >

                <li><a href="/shop" className="hover:text-black transition">Ropa y accesorios</a></li>
                <li><a href="/shop" className="hover:text-black transition">Alimento</a></li>
                <li><a href="/shop" className="hover:text-black transition">Camas</a></li>
                <li><a href="/shop" className="hover:text-black transition">Kennels</a></li>

              </ul>

            </div>

            <div>

              <h4
                className="
                  text-[13px]
                  md:text-[14px]

                  font-black

                  uppercase

                  tracking-[1px]

                  mb-6
                  md:mb-7
                "
              >
                Enlaces útiles
              </h4>

              <ul
                className="
                  space-y-3
                  md:space-y-4

                  text-[15px]
                  md:text-[17px]

                  text-[#5F5F5F]
                "
              >

                <li><a href="/" className="hover:text-black transition">Contacto</a></li>
                <li><a href="/" className="hover:text-black transition">Envíos</a></li>
                <li><a href="/" className="hover:text-black transition">Reembolsos</a></li>
                <li><a href="/" className="hover:text-black transition">Preguntas frecuentes</a></li>

              </ul>

            </div>

            <div>

              <h4
                className="
                  text-[13px]
                  md:text-[14px]

                  font-black

                  uppercase

                  tracking-[1px]

                  mb-6
                  md:mb-7
                "
              >
                Contacto
              </h4>

              <div
                className="
                  space-y-5
                  md:space-y-6

                  text-[#5F5F5F]

                  text-[15px]
                  md:text-[17px]
                "
              >

                <div className="flex gap-3 md:gap-4 items-start">

                  <HiOutlineLocationMarker
                    size={18}
                    className="mt-1 text-black"
                  />

                  <p className="leading-relaxed">
                    Av. Real Audiencia 59-200, Quito
                  </p>

                </div>

                <div className="flex gap-3 md:gap-4 items-center">

                  <HiOutlinePhone
                    size={18}
                    className="text-black"
                  />

                  <p>+593 96 800 2100</p>

                </div>

                <div className="flex gap-3 md:gap-4 items-center">

                  <HiOutlineMail
                    size={18}
                    className="text-black"
                  />

                  <p>ventas@woollypetshop.com</p>

                </div>

              </div>

            </div>

          </div>

          <div
            className="
              border-t
              border-black/10

              py-5
              md:py-6

              text-center

              text-[13px]
              md:text-[15px]

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