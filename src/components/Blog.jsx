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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-5xl font-black uppercase mb-12">
          Consejos para tu mascota
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">

          {/* MAIN ARTICLE */}
          <div className="relative rounded-[36px] overflow-hidden h-[420px] group cursor-pointer shadow-lg">

            <img
              src="/blog/dental.jpg"
              alt="Higiene dental"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-8 left-8 right-8 text-white">

              <h3 className="text-5xl font-black uppercase leading-tight mb-3">
                Higiene dental
              </h3>

              <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                Aprende cómo mantener la salud dental de tu mascota y prevenir enfermedades.
              </p>

            </div>
          </div>

          {/* SIDE ARTICLES */}
          <div className="flex flex-col gap-6">

            {articles.map((article, index) => (
              <div
                key={index}
                className="flex gap-5 items-center border-b border-gray-200 pb-6 group cursor-pointer"
              >

                {/* IMAGE */}
                <div className="w-[170px] h-[130px] rounded-[26px] overflow-hidden flex-shrink-0">

                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1 relative">

                  {/* BADGE */}
                  <span className="absolute -top-10 right-0 bg-gray-100 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                    News
                  </span>

                  <h4 className="text-3xl font-black uppercase mb-3 leading-tight">
                    {article.title}
                  </h4>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {article.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}