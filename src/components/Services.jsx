import {
  PawPrint,
  Scissors,
  Sparkles,
  Ear,
  ShieldPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Baño relajante",
    image: "/services/relax-bath.jpg",
    icon: <PawPrint size={22} />,
  },
  {
    title: "Corte & estilo",
    image: "/services/style-cut.jpg",
    icon: <Scissors size={22} />,
  },
  {
    title: "Corte de uñas",
    image: "/services/nail-cut.jpg",
    icon: <Scissors size={22} />,
  },
  {
    title: "Limpieza de oídos",
    image: "/services/ear-cleaning.jpg",
    icon: <Ear size={22} />,
  },
  {
    title: "Gel anti-placa",
    image: "/services/anti-plaque.jpg",
    icon: <Sparkles size={22} />,
  },
  {
    title: "Glándulas anales",
    image: "/services/anal-glands.jpg",
    icon: <ShieldPlus size={22} />,
  },
];

export default function Services() {
  return (
    <section className="pt-0 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-[Pacifico]">
            Nuestros servicios
          </h2>

          {/* BUTTONS */}
          <div className="flex gap-3">

            <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition">
              <ChevronLeft size={22} />
            </button>

            <button className="w-12 h-12 rounded-full bg-black text-white shadow-md flex items-center justify-center hover:scale-110 transition">
              <ChevronRight size={22} />
            </button>

          </div>
        </div>

        {/* CAROUSEL */}
        <div className="flex justify-between gap-6 overflow-hidden">

          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-[260px] h-[300px] rounded-[34px] overflow-hidden shadow-lg group cursor-pointer flex-shrink-0"
            >

              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

                <h3 className="text-white text-3xl font-bold leading-tight max-w-[150px]">
                  {service.title}
                </h3>

                <div className="text-white">
                  {service.icon}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}