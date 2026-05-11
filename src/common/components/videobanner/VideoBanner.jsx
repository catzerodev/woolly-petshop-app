import { Play } from "lucide-react";

export default function VideoBanner() {
  return (
    <section
      className="
        pt-4
        md:pt-8

        pb-16
        md:pb-20
        lg:pb-24

        bg-white
      "
    >

      <div className="max-w-[1400px] mx-auto px-6 xl:px-10">

        <div
          className="
            relative

            overflow-hidden

            rounded-[28px]
            md:rounded-[36px]

            h-[420px]
            md:h-[480px]

            shadow-xl
          "
        >

          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full
              h-full

              object-cover
            "
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
          </video>

          <div
            className="
              absolute
              inset-0

              bg-black/30
            "
          />

          <div
            className="
              absolute
              inset-0

              flex

              flex-col
              md:flex-row

              items-start
              md:items-center

              justify-end
              md:justify-between

              px-6
              md:px-10
              lg:px-16

              py-8
              md:py-0
            "
          >

            <div
              className="
                max-w-[300px]
                md:max-w-sm

                text-white

                z-10
              "
            >

              <p
                className="
                  text-orange-400

                  font-semibold

                  text-[14px]
                  md:text-base

                  mb-3
                "
              >
                Woolly PetShop
              </p>

              <h2
                className="
                  text-[34px]
                  md:text-[46px]
                  lg:text-5xl

                  font-['Fredoka']
                  font-semibold

                  leading-[0.95]

                  mb-4
                  md:mb-5
                "
              >
                Las mejores marcas
                <br />
                para tu mascota
              </h2>

              <p
                className="
                  text-white/80

                  text-[15px]
                  md:text-base

                  leading-relaxed
                "
              >
                Productos premium, accesorios y cuidado especializado
                para consentir a tu mejor amigo.
              </p>

            </div>

            <a
              href="/shop"
              className="
                mt-8
                md:mt-0

                self-center

                w-16
                h-16
                md:w-20
                md:h-20
                lg:w-24
                lg:h-24

                rounded-full

                bg-[#F28C28]

                flex
                items-center
                justify-center

                shadow-2xl

                hover:scale-110

                transition

                z-10
              "
            >

              <Play
                size={28}
                className="md:hidden"
                fill="white"
                color="white"
              />

              <Play
                size={36}
                className="hidden md:block lg:hidden"
                fill="white"
                color="white"
              />

              <Play
                size={42}
                className="hidden lg:block"
                fill="white"
                color="white"
              />

            </a>

          </div>

        </div>
      </div>
    </section>
  );
}