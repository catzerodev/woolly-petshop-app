import MainLayout from "../../common/layout/MainLayout";

import {
  Sparkles,
  Scissors,
  HeartHandshake,
  Bath,
  ShieldCheck,
  Clock3,
} from "lucide-react";

export default function ServicesPage() {

  const services = [
    {
      title: "Baño Premium",
      price: "$18",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
      description:
        "Limpieza profunda, shampoo premium y secado delicado.",
      icon: Bath,
    },
    {
      title: "Corte & Grooming",
      price: "$25",
      image:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop",
      description:
        "Estilo personalizado para que tu mascota luzca increíble.",
      icon: Scissors,
    },
    {
      title: "Spa Relax",
      price: "$32",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
      description:
        "Masaje, hidratación y experiencia relajante premium.",
      icon: Sparkles,
    },
  ];

  const benefits = [
    {
      title: "Cuidado profesional",
      icon: ShieldCheck,
    },
    {
      title: "Atención con amor",
      icon: HeartHandshake,
    },
    {
      title: "Horarios flexibles",
      icon: Clock3,
    },
  ];

  return (

    <MainLayout>

      <section className="px-5 md:px-8 xl:px-10 pb-24">

        <div className="max-w-[1400px] mx-auto">

          {/* HERO */}

          <div
            className="
              relative

              overflow-hidden

              rounded-[42px]

              min-h-[650px]

              flex
              items-center

              px-8
              md:px-16

              py-16

              bg-[#F8EFE7]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop"
              alt="Dog Grooming"
              className="
                absolute
                inset-0

                w-full
                h-full

                object-cover

                opacity-30
              "
            />

            <div className="relative z-10 max-w-[650px]">

              <span
                className="
                  inline-flex
                  items-center

                  gap-2

                  bg-white/80

                  px-5
                  py-2

                  rounded-full

                  text-sm

                  font-semibold
                "
              >
                Grooming Premium ✨
              </span>

              <h1
                className="
                  mt-7

                  text-5xl
                  md:text-7xl

                  font-black

                  leading-[0.95]

                  tracking-[-3px]

                  text-[#2B1F1A]
                "
              >
                Peluquería &
                <br />
                Spa para mascotas
              </h1>

              <p
                className="
                  mt-8

                  text-lg
                  md:text-xl

                  leading-relaxed

                  text-[#5F5148]

                  max-w-[540px]
                "
              >
                Consentimos a tu mascota con grooming profesional,
                productos premium y una experiencia relajante en un
                ambiente cálido y seguro.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <button
                  className="
                    bg-[#FF6B00]
                    hover:bg-[#e55f00]

                    text-white

                    px-8
                    py-4

                    rounded-full

                    font-bold

                    transition-all
                  "
                >
                  Reservar cita
                </button>

                <button
                  className="
                    bg-white/80

                    border
                    border-white/70

                    px-8
                    py-4

                    rounded-full

                    font-semibold
                  "
                >
                  Ver servicios
                </button>

              </div>

            </div>

          </div>

          {/* BENEFITS */}

          <div
            className="
              grid

              grid-cols-1
              md:grid-cols-3

              gap-6

              mt-12
            "
          >

            {benefits.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="
                    bg-white/70

                    backdrop-blur-xl

                    rounded-[32px]

                    p-8

                    border
                    border-white/40
                  "
                >

                  <div
                    className="
                      w-14
                      h-14

                      rounded-2xl

                      bg-[#FFF1E7]

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon className="text-[#FF6B00]" />
                  </div>

                  <h3
                    className="
                      mt-6

                      text-2xl

                      font-bold
                    "
                  >
                    {item.title}
                  </h3>

                </div>

              );

            })}

          </div>

          {/* SERVICES */}

          <div className="mt-28">

            <div className="flex items-end justify-between gap-6 flex-wrap">

              <div>

                <p className="text-[#FF6B00] font-semibold">
                  Servicios destacados
                </p>

                <h2
                  className="
                    text-4xl
                    md:text-6xl

                    font-black

                    tracking-[-2px]

                    mt-3
                  "
                >
                  Cuidado premium
                </h2>

              </div>

              <p
                className="
                  text-[#6B625B]

                  max-w-[420px]

                  leading-relaxed
                "
              >
                Diseñado para brindar confort, limpieza y bienestar
                a cada mascota.
              </p>

            </div>

            <div
              className="
                grid

                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3

                gap-8

                mt-12
              "
            >

              {services.map((service, index) => {

                const Icon = service.icon;

                return (

                  <div
                    key={index}
                    className="
                      overflow-hidden

                      rounded-[36px]

                      bg-white

                      shadow-[0_10px_40px_rgba(0,0,0,0.06)]

                      hover:-translate-y-2

                      transition-all
                      duration-500
                    "
                  >

                    <div className="relative">

                      <img
                        src={service.image}
                        alt={service.title}
                        className="
                          w-full

                          h-[320px]

                          object-cover
                        "
                      />

                      <div
                        className="
                          absolute
                          top-5
                          left-5

                          bg-white/90

                          backdrop-blur-xl

                          px-4
                          py-2

                          rounded-full

                          font-bold
                        "
                      >
                        {service.price}
                      </div>

                    </div>

                    <div className="p-7">

                      <div
                        className="
                          w-14
                          h-14

                          rounded-2xl

                          bg-[#FFF1E7]

                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon className="text-[#FF6B00]" />
                      </div>

                      <h3
                        className="
                          text-3xl

                          font-black

                          mt-6
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          mt-4

                          text-[#6B625B]

                          leading-relaxed
                        "
                      >
                        {service.description}
                      </p>

                      <button
                        className="
                          mt-7

                          w-full

                          bg-[#FF6B00]
                          hover:bg-[#e55f00]

                          text-white

                          py-4

                          rounded-full

                          font-bold

                          transition-all
                        "
                      >
                        Reservar ahora
                      </button>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </section>

    </MainLayout>

  );
}
