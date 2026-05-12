import MainLayout from "../../common/layout/MainLayout";

import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  PawPrint,
} from "lucide-react";

export default function AboutPage() {

  const values = [
    {
      title: "Cuidado real",
      description:
        "Tratamos a cada mascota con amor, respeto y atención personalizada.",
      icon: HeartHandshake,
    },

    {
      title: "Productos premium",
      description:
        "Seleccionamos calidad premium para garantizar bienestar y seguridad.",
      icon: ShieldCheck,
    },

    {
      title: "Experiencia moderna",
      description:
        "Diseñamos una experiencia elegante, cómoda y minimalista.",
      icon: Sparkles,
    },
  ];

  const stats = [
    {
      number: "+8K",
      label: "Mascotas felices",
    },

    {
      number: "+3K",
      label: "Clientes frecuentes",
    },

    {
      number: "5★",
      label: "Valoración premium",
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

              min-h-[680px]

              flex
              items-center

              px-8
              md:px-16

              py-16

              bg-[#F8EFE7]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1800&auto=format&fit=crop"
              alt="About Woolly"
              className="
                absolute
                inset-0

                w-full
                h-full

                object-cover

                opacity-35
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-r
                from-white/80
                via-white/30
                to-transparent
              "
            />

            <div className="relative z-10 max-w-[720px]">

              <div
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

                <PawPrint size={16} />

                Nuestra historia

              </div>

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
                Creamos un lugar pensado para ellos
              </h1>

              <p
                className="
                  mt-8

                  text-lg
                  md:text-xl

                  leading-relaxed

                  text-[#5F5148]

                  max-w-[600px]
                "
              >
                Woolly PetShop nació con la idea de combinar diseño,
                bienestar y productos premium para crear una experiencia
                moderna para mascotas y personas que las aman.
              </p>

            </div>

          </div>

          {/* STATS */}

          <div
            className="
              grid

              grid-cols-1
              md:grid-cols-3

              gap-6

              mt-12
            "
          >

            {stats.map((item, index) => (

              <div
                key={index}
                className="
                  bg-white/70

                  backdrop-blur-xl

                  rounded-[32px]

                  p-10

                  border
                  border-white/40

                  text-center
                "
              >

                <h2
                  className="
                    text-5xl
                    md:text-6xl

                    font-black

                    text-[#FF6B00]
                  "
                >
                  {item.number}
                </h2>

                <p
                  className="
                    mt-4

                    text-lg

                    text-[#6B625B]

                    font-medium
                  "
                >
                  {item.label}
                </p>

              </div>

            ))}

          </div>

          {/* ABOUT CONTENT */}

          <div
            className="
              grid

              grid-cols-1
              lg:grid-cols-2

              gap-14

              items-center

              mt-28
            "
          >

            <div>

              <p className="text-[#FF6B00] font-semibold">
                Nuestra misión
              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl

                  font-black

                  tracking-[-2px]

                  mt-4

                  leading-[1]
                "
              >
                Bienestar, diseño y amor animal
              </h2>

              <p
                className="
                  mt-8

                  text-lg

                  leading-relaxed

                  text-[#6B625B]
                "
              >
                Creemos que las mascotas merecen productos de alta calidad,
                espacios cómodos y experiencias diseñadas con cariño.
                Por eso construimos una tienda premium inspirada en
                estética minimalista y cuidado profesional.
              </p>

              <button
                className="
                  mt-10

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
                Explorar tienda
              </button>

            </div>

            <div
              className="
                overflow-hidden

                rounded-[42px]

                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop"
                alt="Pet Love"
                className="
                  w-full

                  h-[620px]

                  object-cover
                "
              />

            </div>

          </div>

          {/* VALUES */}

          <div className="mt-28">

            <div className="text-center max-w-[760px] mx-auto">

              <p className="text-[#FF6B00] font-semibold">
                Nuestros valores
              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl

                  font-black

                  tracking-[-2px]

                  mt-4
                "
              >
                Lo que hace especial a Woolly
              </h2>

            </div>

            <div
              className="
                grid

                grid-cols-1
                md:grid-cols-3

                gap-8

                mt-14
              "
            >

              {values.map((value, index) => {

                const Icon = value.icon;

                return (

                  <div
                    key={index}
                    className="
                      bg-white

                      rounded-[36px]

                      p-8

                      shadow-[0_10px_40px_rgba(0,0,0,0.05)]

                      hover:-translate-y-2

                      transition-all
                      duration-500
                    "
                  >

                    <div
                      className="
                        w-16
                        h-16

                        rounded-2xl

                        bg-[#FFF1E7]

                        flex
                        items-center
                        justify-center
                      "
                    >

                      <Icon
                        className="text-[#FF6B00]"
                        size={28}
                      />

                    </div>

                    <h3
                      className="
                        mt-7

                        text-3xl

                        font-black
                      "
                    >
                      {value.title}
                    </h3>

                    <p
                      className="
                        mt-4

                        text-[#6B625B]

                        leading-relaxed
                      "
                    >
                      {value.description}
                    </p>

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