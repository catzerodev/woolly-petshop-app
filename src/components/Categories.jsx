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
    <section
      className="
        py-16
        md:py-20
        lg:py-24

        bg-white
      "
    >

      <div className="max-w-7xl mx-auto px-4 md:px-6">

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
          Categorías favoritas
        </h2>

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-5
            md:gap-6
            lg:gap-7
          "
        >

          {categories.map((item, index) => (
            <a
              key={index}
              href="/shop"
              className={`
                ${item.bg}

                relative

                rounded-[28px]
                md:rounded-[32px]

                p-4
                md:p-5

                h-[260px]
                md:h-[280px]
                lg:h-[290px]

                overflow-hidden

                shadow-[0_8px_25px_rgba(0,0,0,0.04)]

                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]

                transition-all
                duration-300
              `}
            >

              <div
                className="
                  absolute

                  top-3
                  left-3
                  md:top-4
                  md:left-4

                  w-11
                  h-11
                  md:w-12
                  md:h-12

                  rounded-full
                  bg-white

                  flex
                  items-center
                  justify-center

                  shadow-[0_6px_18px_rgba(0,0,0,0.08)]

                  text-black

                  z-20
                "
              >
                {item.icon}
              </div>

              <div
                className="
                  absolute

                  top-[30px]
                  md:top-[25px]

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
                    w-[190px]
                    md:w-[205px]
                    lg:w-[210px]

                    h-[145px]
                    md:h-[154px]
                    lg:h-[158px]

                    object-cover
                    ${item.position}

                    rounded-[24px]
                    md:rounded-[26px]

                    transition
                    duration-300

                    hover:scale-[1.03]
                  `}
                />
              </div>

              <div
                className="
                  absolute

                  bottom-4
                  md:bottom-5

                  left-4
                  right-4
                  md:left-5
                  md:right-5

                  flex
                  items-end
                  justify-between
                "
              >

                <div>

                  <h3
                    className="
                      text-[16px]
                      md:text-[17px]

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
                      text-[14px]
                      md:text-[15px]

                      text-[#6F6F6F]

                      mt-1
                    "
                  >
                    {item.products}
                  </p>

                </div>

                <div
                  className="
                    w-11
                    h-11
                    md:w-12
                    md:h-12

                    rounded-full
                    bg-white

                    flex
                    items-center
                    justify-center

                    shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                  "
                >
                  <ArrowRight size={17} />
                </div>

              </div>

            </a>
          ))}

        </div>
      </div>
    </section>
  );
}