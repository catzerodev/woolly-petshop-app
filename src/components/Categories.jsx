import { ArrowRight } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      name: "Ropa y accesorios",
      products: 84,
      image: "/categories/clothing.jpg",
    },
    {
      name: "Alimento",
      products: 64,
      image: "/categories/food.jpg",
    },
    {
      name: "Camas",
      products: 22,
      image: "/categories/beds.jpg",
    },
    {
      name: "Bolsos y kennels",
      products: 16,
      image: "/categories/carriers.jpg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-[34px] font-bold mb-8 font-[Pacifico]">
        Categorías favoritas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 cursor-pointer"
          >
            <div className="h-40 rounded-xl overflow-hidden mb-4 relative">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{cat.name}</p>
                <p className="text-sm text-gray-500">
                  {cat.products} productos
                </p>
              </div>

              <ArrowRight className="text-orange-500 w-5 h-5 transition transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
