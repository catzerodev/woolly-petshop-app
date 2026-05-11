import { Star } from "lucide-react";

const products = [
  {
    title: "Collar premium",
    price: "$29,00",
    image: "/products/collar.png",
    badge: "Nuevo",
  },
  {
    title: "Cama suave",
    price: "$19,00",
    image: "/products/bed.png",
    badge: "Nuevo",
  },
  {
    title: "Plato cerámico",
    price: "$25,00",
    image: "/products/bowl.png",
    badge: "Nuevo",
  },
  {
    title: "Plato doble",
    price: "$25,00",
    image: "/products/food.png",
    badge: "Oferta",
  },
  {
    title: "Arnés París",
    price: "$32,00",
    image: "/products/arnes-paris.png",
    badge: "Top",
  },
  {
    title: "Arnés Pink",
    price: "$24,00",
    image: "/products/arnes-gatito.png",
    badge: "Nuevo",
  },
  {
    title: "Túnel arcoíris",
    price: "$28,00",
    image: "/products/tunel-arcoiris.png",
    badge: "Popular",
  },
  {
    title: "Arenero premium",
    price: "$39,00",
    image: "/products/arenero-1.png",
    badge: "Top",
  },
];

export default function Products() {
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
            text-4xl
            md:text-5xl

            font-['Fredoka']
            font-semibold

            mb-12
            md:mb-14
          "
        >
          Productos recomendados
        </h2>

        <div
          className="
            grid

            grid-cols-2
            lg:grid-cols-4

            gap-6
            md:gap-8
          "
        >

          {products.map((product, index) => (
            <a
              key={index}
              href="/shop"
              className="group"
            >

              <div
                className="
                  relative

                  bg-[#f8f8f8]

                  rounded-[24px]
                  md:rounded-[28px]

                  p-4
                  md:p-5

                  overflow-hidden

                  shadow-sm

                  hover:shadow-xl
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >

                <span
                  className="
                    absolute

                    top-4
                    left-4

                    bg-[#FFE7D6]

                    text-black

                    text-xs
                    md:text-sm

                    px-3
                    py-1

                    rounded-xl

                    font-semibold

                    z-20
                  "
                >
                  {product.badge}
                </span>

                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    w-full

                    h-[180px]
                    md:h-[240px]

                    object-contain

                    group-hover:scale-105

                    transition
                    duration-300
                  "
                />

              </div>

              <div className="mt-4 md:mt-5">

                <h3
                  className="
                    text-[17px]
                    md:text-xl

                    font-semibold

                    leading-snug

                    text-[#171717]
                  "
                >
                  {product.title}
                </h3>

                <div className="flex gap-1 mt-2 text-yellow-400">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}

                </div>

                <p
                  className="
                    text-[#F28C28]

                    text-2xl
                    md:text-3xl

                    font-bold

                    mt-2
                  "
                >
                  {product.price}
                </p>

              </div>

            </a>
          ))}

        </div>
      </div>
    </section>
  );
}