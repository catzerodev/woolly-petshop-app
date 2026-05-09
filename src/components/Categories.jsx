import { ArrowRight, Shirt, Bone, BedDouble, Briefcase } from "lucide-react";

const categories = [
  {
    title: "Ropa y accesorios",
    products: "84 productos",
    bg: "bg-[#EFE4FF]",
    image: "/categories/clothing.jpg",
    icon: <Shirt size={18} />,
    position: "object-center",
  },
  {
    title: "Alimento",
    products: "64 productos",
    bg: "bg-[#FFE8D6]",
    image: "/categories/food.jpg",
    icon: <Bone size={18} />,
    position: "object-top",
  },
  {
    title: "Camas",
    products: "22 productos",
    bg: "bg-[#DDF8EC]",
    image: "/categories/beds.jpg",
    icon: <BedDouble size={18} />,
    position: "object-center",
  },
  {
    title: "Bolsos y kennels",
    products: "16 productos",
    bg: "bg-[#F3E2FF]",
    image: "/categories/carriers.jpg",
    icon: <Briefcase size={18} />,
    position: "object-top",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">"
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
              className={`
                ${item.bg}

                relative
                rounded-[34px]

                p-5
                h-[290px]

                overflow-hidden

                shadow-[0_8px_25px_rgba(0,0,0,0.04)]

                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]

                transition-all
                duration-300
              `}
            >

              {/* ICON */}
              <div
                className="
                  w-12
                  h-12

                  rounded-full
                  bg-white

                  flex
                  items-center
                  justify-center

                  shadow-[0_6px_18px_rgba(0,0,0,0.08)]

                  text-black

                  relative
                  z-20
                  -top-2
                "
              >
                {item.icon}
              </div>

              {/* IMAGE */}
              <div
                className="
                  absolute
                  top-[25px]
                  left-0
                  right-0

                  flex
                  justify-center

                  z-10
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`
                    w-[210px]
                    h-[158px]

                    object-cover
                    ${item.position}

                    rounded-[26px]

                    transition
                    duration-300

                    hover:scale-[1.03]
                  `}
                />
                              </div>

              {/* CONTENT */}
              <div
                className="
                  absolute

                  bottom-5
                  left-5
                  right-5

                  flex
                  items-end
                  justify-between
                "
              >

                <div>
                  <h3
                    className="
                      text-[17px]
                      font-bold

                      leading-[1.08]

                      max-w-[120px]

                      text-[#171717]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[15px]
                      text-[#6F6F6F]

                      mt-1
                    "
                  >
                    {item.products}
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  className="
                    w-12
                    h-12
                    

                    rounded-full
                    bg-white

                    flex
                    items-center
                    justify-center

                    shadow-[0_6px_18px_rgba(0,0,0,0.08)]

                    hover:scale-105

                    transition
                  "
                >
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}