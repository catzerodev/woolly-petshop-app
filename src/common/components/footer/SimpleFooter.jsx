import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function SimpleFooter() {

  return (
    <footer className="relative mt-24 overflow-hidden">

      <div
        className="
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

            py-20
            md:py-24

            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-5

            gap-12

            relative
            z-20
          "
        >

          {/* BRAND */}
          <div>

            <h3
              className="
                text-[42px]
                md:text-[52px]

                leading-[0.95]

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

                text-[15px]

                leading-[1.9]

                text-[#625B5B]

                max-w-[320px]
              "
            >
              Lo mejor para consentir a tu mascota con productos premium y grooming profesional.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3 mt-8">

              <a
                href="#"
                className="
                  w-11
                  h-11

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
                  w-11
                  h-11

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
                  w-11
                  h-11

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

          </div>

          {/* STORE */}
          <div className="hidden md:block">

            <h4
              className="
                text-[13px]

                font-black

                uppercase

                tracking-[1px]

                mb-5
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

                mb-5
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

                mb-5
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
          <div>

            <h4
              className="
                text-[13px]

                font-black

                uppercase

                tracking-[1px]

                mb-5
              "
            >
              Contacto
            </h4>

            <div
              className="
                space-y-4

                text-[#5F5F5F]

                text-[15px]

                leading-relaxed
              "
            >

              <p>Quito, Ecuador</p>

              <p>+593 96 800 2100</p>

              <p>ventas@woollypetshop.com</p>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div
          className="
            border-t
            border-black/10

            py-5

            text-center

            text-[13px]

            text-[#6B6B6B]

            relative
            z-20
          "
        >
          © 2025 Woolly PetShop. Todos los derechos reservados.
        </div>

      </div>

    </footer>
  );
}