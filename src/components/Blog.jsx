const articles = [
  {
    title: "Nutrición senior",
    description:
      "Consejos para cuidar la alimentación y bienestar de mascotas mayores.",
    image: "/blog/senior.jpg",
  },
  {
    title: "Rutina de paseo",
    description:
      "La importancia de los paseos diarios para una mascota feliz.",
    image: "/blog/walk.jpg",
  },
];

export default function Blog() {
  return (
    <section
      className="
        py-16
        md:py-20

        bg-white
      "
    >

      <div className="max-w-[1400px] mx-auto px-6 xl:px-10">

        <h2
          className="
            text-[32px]
            md:text-[42px]
            lg:text-[52px]

            font-['Fredoka']
            font-semibold

            leading-[1]

            tracking-[-1px]

            mb-10
            md:mb-12

            text-[#171717]
          "
        >
          Consejos para tu mascota
        </h2>

        <div
          className="
            grid

            grid-cols-1
            lg:grid-cols-[1.2fr_0.8fr]

            gap-6
            md:gap-8
          "
        >

          <a
            href="/blog"
            className="
              relative

              rounded-[28px]
              md:rounded-[36px]

              overflow-hidden

              h-[320px]
              md:h-[420px]

              group

              shadow-lg
            "
          >

            <img
              src="/blog/dental.jpg"
              alt="Higiene dental"
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
                from-black/80
                via-black/10
                to-transparent
              "
            />

            <div
              className="
                absolute

                bottom-5
                md:bottom-8

                left-5
                right-5
                md:left-8
                md:right-8

                text-white
              "
            >

              <h3
                className="
                  text-[32px]
                  md:text-[52px]

                  font-black
                  uppercase

                  leading-[0.95]

                  mb-3
                "
              >
                Higiene dental
              </h3>

              <p
                className="
                  text-[15px]
                  md:text-[20px]

                  text-white/90

                  max-w-lg

                  leading-relaxed
                "
              >
                Aprende cómo mantener la salud dental de tu mascota y prevenir enfermedades.
              </p>

            </div>

          </a>

          <div
            className="
              flex
              flex-col

              gap-5
              md:gap-6
            "
          >

            {articles.map((article, index) => (
              <a
                key={index}
                href="/blog"
                className="
                  flex

                  flex-col
                  sm:flex-row

                  gap-4
                  md:gap-5

                  sm:items-center

                  border-b
                  border-gray-200

                  pb-5
                  md:pb-6

                  group
                "
              >

                <div
                  className="
                    w-full
                    sm:w-[170px]

                    h-[220px]
                    sm:h-[130px]

                    rounded-[24px]
                    md:rounded-[26px]

                    overflow-hidden

                    flex-shrink-0
                  "
                >

                  <img
                    src={article.image}
                    alt={article.title}
                    className="
                      w-full
                      h-full

                      object-cover

                      group-hover:scale-105

                      transition
                      duration-500
                    "
                  />

                </div>

                <div className="flex-1 relative">

                  <span
                    className="
                      absolute

                      top-0
                      right-0
                      sm:-top-8

                      bg-gray-100

                      text-black

                      text-[10px]
                      md:text-xs

                      font-bold

                      px-3
                      py-1

                      rounded-full

                      uppercase
                    "
                  >
                    News
                  </span>

                  <h4
                    className="
                      text-[26px]
                      md:text-[30px]

                      font-['Fredoka']
                      font-semibold

                      leading-[1.05]

                      mb-2

                      text-[#171717]
                    "
                  >
                    {article.title}
                  </h4>

                  <p
                    className="
                      text-[#5F5F5F]

                      text-[15px]
                      md:text-lg

                      leading-relaxed

                      max-w-[95%]
                    "
                  >
                    {article.description}
                  </p>

                </div>

              </a>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}