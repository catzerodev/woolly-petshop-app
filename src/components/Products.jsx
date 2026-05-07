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
    title: "Plato metálico",
    price: "$25,00",
    image: "/products/bowl.png",
    badge: "Nuevo",
  },
  {
    title: "Alimento premium",
    price: "$25,00",
    image: "/products/food.png",
    badge: "Oferta",
  },
];

export default function Products() {
  return (
    <section className="pt-10 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-['Pacifico'] mb-14">
          Productos recomendados
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="group"
            >

              {/* IMAGE CARD */}
              <div className="relative bg-[#f8f8f8] rounded-[28px] p-5 overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

                {/* BADGE */}
                <span className="absolute top-4 left-4 bg-[#FFE7D6] text-black text-sm px-3 py-1 rounded-xl font-semibold z-20">
                  {product.badge}
                </span>

                {/* IMAGE */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[240px] object-contain group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-5">

                <h3 className="text-xl font-semibold leading-snug">
                  {product.title}
                </h3>

                {/* STARS */}
                <div className="flex gap-1 mt-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={1.5} />
                  ))}
                </div>

                {/* PRICE */}
                <p className="text-[#F28C28] text-3xl font-bold mt-2">
                  {product.price}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}