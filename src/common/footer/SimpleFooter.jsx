import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {

  return (
    <footer
      className="
        border-t
        border-black/5

        bg-white/70
        backdrop-blur-xl

        mt-24
      "
    >

      <div
        className="
          max-w-[1400px]
          mx-auto

          px-6
          md:px-10

          py-14

          flex
          flex-col
          md:flex-row

          items-start
          justify-between

          gap-10
        "
      >

        <div>

          <h2
            className="
              text-4xl
              md:text-5xl

              font-black

              leading-none
            "
          >
            Woolly
            <br />
            PetShop
          </h2>

          <p
            className="
              mt-5

              text-[#6B6B6B]

              leading-relaxed

              max-w-[280px]
            "
          >
            Lo mejor para consentir a tu mascota con productos premium y grooming profesional.
          </p>

          <div className="flex gap-3 mt-6">

            <button
              className="
                w-11
                h-11

                rounded-full

                bg-[#F5F5F7]

                flex
                items-center
                justify-center
              "
            >
              <FaFacebookF />
            </button>

            <button
              className="
                w-11
                h-11

                rounded-full

                bg-[#F5F5F7]

                flex
                items-center
                justify-center
              "
            >
              <FaInstagram />
            </button>

            <button
              className="
                w-11
                h-11

                rounded-full

                bg-[#F5F5F7]

                flex
                items-center
                justify-center
              "
            >
              <FaWhatsapp />
            </button>

          </div>

        </div>

        <div
          className="
            flex
            flex-col

            gap-3

            text-[#6B6B6B]
          "
        >

          <p>Quito, Ecuador</p>

          <p>+593 96 800 2100</p>

          <p>ventas@woollypetshop.com</p>

        </div>

      </div>

      <div
        className="
          border-t
          border-black/5

          py-5

          text-center

          text-sm

          text-[#8A8A8E]
        "
      >
        © 2025 Woolly PetShop. Todos los derechos reservados.
      </div>

    </footer>
  );
}