import { ArrowRight, Shirt, Bone, BedDouble, Briefcase } from "lucide-react";

const categories = [
  {
    title: "Ropa y accesorios",
    products: "84 productos",
    bg: "bg-[#EFE4FF]",
    image: "/categories/clothing.jpg",
    icon: <Shirt size={22} />,
  },
  {
    title: "Alimento",
    products: "64 productos",
    bg: "bg-[#FFE8D6]",
    image: "/categories/food.jpg",
    icon: <Bone size={22} />,
  },
  {
    title: "Camas",
    products: "22 productos",
    bg: "bg-[#DDF8EC]",
    image: "/categories/beds.jpg",
    icon: <BedDouble size={22} />,
  },
  {
    title: "Bolsos y kennels",
    products: "16 productos",
    bg: "bg-[#F3E2FF]",
    image: "/categories/carriers.jpg",
    icon: <Briefcase size={22} />,
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TITLE */}
        <h2 className="text-4xl font-['Pacifico'] mb-14">
          Categorías favoritas
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} relative rounded-[32px] p-7 h-[320px] overflow-hidden shadow-sm hover:shadow-xl transition duration-300`}
            >
              
              {/* TOP ICON */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md text-black z-20 relative">
                {item.icon}
              </div>

              {/* IMAGE */}
              <div className="absolute top-[30px] right-0 left-0 flex justify-center z-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[190px] h-[150px] object-cover rounded-[28px] transition duration-300 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold leading-tight max-w-[140px]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-lg">
                    {item.products}
                  </p>
                </div>

                {/* BUTTON */}
                <button className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition">
                  <ArrowRight size={24} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}