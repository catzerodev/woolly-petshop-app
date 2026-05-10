import {
  PawPrint,
  Scissors,
  Sparkles,
  Ear,
  ShieldPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Baño relajante",
    image: "/services/relax-bath.jpg",
    icon: <PawPrint size={20} />,
  },
  {
    title: "Corte & estilo",
    image: "/services/style-cut.jpg",
    icon: <Scissors size={20} />,
  },
  {
    title: "Corte de uñas",
    image: "/services/nail-cut.jpg",
    icon: <Scissors size={20} />,
  },
  {
    title: "Limpieza de oídos",
    image: "/services/ear-cleaning.jpg",
    icon: <Ear size={20} />,
  },
  {
    title: "Gel anti-placa",
    image: "/services/anti-plaque.jpg",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Drenado glandulas",
    image: "/services/anal-glands.jpg",
    icon: <ShieldPlus size={20} />,
  },

  {
  title: "Baño medicado",
  image: "/services/medicated-bath.jpg",
  icon: <PawPrint size={20} />,
},
{
  title: "Pipetas & antipulgas",
  image: "/services/flea-drops.jpg",
  icon: <Sparkles size={20} />,
},

];

export default function Services() {
  return (
    <section
      className="
        pt-0

        pb-16
        md:pb-20

        bg-white
      "
    >

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div
          className="
            flex
            items-center
            justify-between

            mb-8
            md:mb-10
          "
        >

          <h2
            className="
              text-4xl
              md:text-5xl

              font-['Fredoka']
              font-semibold

              text-[#171717]
            "
          >
            Nuestros servicios
          </h2>

          <div
            className="
              hidden
              sm:flex

              gap-3
            "
          >

            <button
              className="
                w-11
                h-11
                md:w-12
                md:h-12

                rounded-full

                bg-white

                shadow-md

                flex
                items-center
                justify-center

                hover:scale-110

                transition
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="
                w-11
                h-11
                md:w-12
                md:h-12

                rounded-full

                bg-black
                text-white

                shadow-md

                flex
                items-center
                justify-center

                hover:scale-110

                transition
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        <div
          className="
            flex
            lg:grid

            lg:grid-cols-4

            gap-4
            md:gap-6

            overflow-x-auto
            lg:overflow-visible

            scrollbar-hide

            pb-2
          "
        >

          {services.map((service, index) => (
            <a
              key={index}
              href="/shop"
              className="
                relative

                min-w-[240px]
                md:min-w-[260px]
                lg:min-w-0

                h-[270px]
                md:h-[300px]

                rounded-[28px]
                md:rounded-[34px]

                overflow-hidden

                shadow-lg

                group

                flex-shrink-0
              "
            >

              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-full

                  object-cover

                  group-hover:scale-105

                  transition
                  duration-500
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/75
                  via-black/10
                  to-transparent
                "
              />

              <div
                className="
                  absolute

                  bottom-5
                  md:bottom-6

                  left-5
                  right-5
                  md:left-6
                  md:right-6

                  flex
                  items-end
                  justify-between
                "
              >

                <h3
                  className="
                    text-white

                    text-[26px]
                    md:text-3xl

                    font-semibold

                    leading-[1]

                    max-w-[140px]
                    md:max-w-[150px]
                  "
                >
                  {service.title}
                </h3>

                <div className="text-white">
                  {service.icon}
                </div>

              </div>

            </a>
          ))}

        </div>
      </div>
    </section>
  );
}