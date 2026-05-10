import {
  PawPrint,
  Scissors,
  Sparkles,
  Ear,
  ShieldPlus,
} from "lucide-react";

const services = [
  {
    title: "Baño relajante",
    image: "/services/relax-bath.jpg",
    icon: <PawPrint size={18} />,
  },
  {
    title: "Corte & estilo",
    image: "/services/style-cut.jpg",
    icon: <Scissors size={18} />,
  },
  {
    title: "Corte de uñas",
    image: "/services/nail-cut.jpg",
    icon: <Scissors size={18} />,
  },
  {
    title: "Limpieza de oídos",
    image: "/services/ear-cleaning.jpg",
    icon: <Ear size={18} />,
  },
  {
    title: "Gel anti-placa",
    image: "/services/anti-plaque.jpg",
    icon: <Sparkles size={18} />,
  },
  {
    title: "Drenado glandulas",
    image: "/services/anal-glands.jpg",
    icon: <ShieldPlus size={18} />,
  },
  {
    title: "Baño medicado",
    image: "/services/medicated-bath.jpg",
    icon: <PawPrint size={18} />,
  },
  {
    title: "Pipetas & antipulgas",
    image: "/services/flea-drops.jpg",
    icon: <Sparkles size={18} />,
  },
];

export default function Services() {
  return (
    <section className="pt-0 pb-16 md:pb-20 bg-white">

      <div className="max-w-[1400px] mx-auto px-6 xl:px-10">

        <div className="flex items-center justify-between mb-8 md:mb-10">

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

        </div>

        <div
          className="
            grid

            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4

            gap-4
            md:gap-6
          "
        >

          {services.map((service, index) => (
            <a
              key={index}
              href="/services"
              className="
                relative

                h-[220px]
                md:h-[300px]

                rounded-[28px]
                md:rounded-[34px]

                overflow-hidden

                shadow-lg

                group
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

                  bottom-4
                  md:bottom-6

                  left-4
                  right-4
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

                    text-[22px]
                    md:text-3xl

                    font-semibold

                    leading-[1]

                    max-w-[120px]
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