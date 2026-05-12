import MainLayout from "../../common/layout/MainLayout";

const articles = [
  {
    title: "Nutrición senior",
    description:
      "Consejos para cuidar la alimentación y bienestar de mascotas mayores.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop",
    category: "Nutrición",
  },

  {
    title: "Rutina de paseo",
    description:
      "La importancia de los paseos diarios para una mascota feliz.",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1600&auto=format&fit=crop",
    category: "Lifestyle",
  },

  {
    title: "Cuidados de invierno",
    description:
      "Cómo proteger a tu mascota durante temporadas frías.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop",
    category: "Cuidados",
  },

  {
    title: "Spa & relajación",
    description:
      "Beneficios del grooming y relajación para mascotas.",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1600&auto=format&fit=crop",
    category: "Wellness",
  },
];

export default function BlogPage() {

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
              items-end

              p-8
              md:p-16

              bg-[#F8EFE7]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1800&auto=format&fit=crop"
              alt="Blog Hero"
              className="
                absolute
                inset-0

                w-full
                h-full

                object-cover

                opacity-50
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
              "
            />

            <div className="relative z-10 max-w-[720px] text-white">

              <span
                className="
                  inline-flex

                  bg-white/20
                  backdrop-blur-xl

                  px-5
                  py-2

                  rounded-full

                  text-sm

                  font-semibold
                "
              >
                Blog Woolly ✨
              </span>

              <h1
                className="
                  mt-7

                  text-5xl
                  md:text-7xl

                  font-black

                  leading-[0.95]

                  tracking-[-3px]
                "
              >
                Consejos &
                bienestar
                para mascotas
              </h1>

              <p
                className="
                  mt-8

                  text-lg
                  md:text-xl

                  text-white/90

                  leading-relaxed
                "
              >
                Descubre tips, nutrición, bienestar y cuidados premium
                para darle a tu mascota una vida feliz y saludable.
              </p>

            </div>

          </div>

          {/* ARTICLES */}

          <div className="mt-24">

            <div className="flex items-end justify-between flex-wrap gap-6">

              <div>

                <p className="text-[#FF6B00] font-semibold">
                  Últimos artículos
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
                  Historias & tips
                </h2>

              </div>

              <p
                className="
                  max-w-[420px]

                  text-[#6B625B]

                  leading-relaxed
                "
              >
                Aprende sobre salud, alimentación y estilo de vida
                para consentir a tu mascota todos los días.
              </p>

            </div>

            <div
              className="
                grid

                grid-cols-1
                md:grid-cols-2

                gap-8

                mt-12
              "
            >

              {articles.map((article, index) => (

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
                      src={article.image}
                      alt={article.title}
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
                      {article.category}
                    </div>

                  </div>

                  <div className="p-8">

                    <h3
                      className="
                        text-4xl

                        font-black

                        tracking-[-1px]

                        leading-[1]

                        text-[#1E1E1E]
                      "
                    >
                      {article.title}
                    </h3>

                    <p
                      className="
                        mt-5

                        text-[#6B625B]

                        leading-relaxed

                        text-lg
                      "
                    >
                      {article.description}
                    </p>

                    <button
                      className="
                        mt-8

                        bg-[#FF6B00]
                        hover:bg-[#e55f00]

                        text-white

                        px-7
                        py-4

                        rounded-full

                        font-bold

                        transition-all
                      "
                    >
                      Leer artículo
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </MainLayout>

  );
}