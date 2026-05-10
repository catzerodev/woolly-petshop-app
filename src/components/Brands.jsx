export default function Brands() {
  const brands = [
    {
      src: "/brands/avant.png",
      className: "h-7 md:h-9 lg:h-10",
    },
    {
      src: "/brands/brit.png",
      className: "h-6 md:h-8 lg:h-9",
    },
    {
      src: "/brands/hills.png",
      className: "h-8 md:h-10 lg:h-12",
    },
    {
      src: "/brands/nutrapro.png",
      className: "h-8 md:h-10 lg:h-12",
    },
    {
      src: "/brands/pedigree.png",
      className: "h-14 md:h-16 lg:h-20",
    },
    {
      src: "/brands/procan.png",
      className: "h-8 md:h-10 lg:h-12",
    },
    {
      src: "/brands/whiskas.png",
      className: "h-8 md:h-10 lg:h-12",
    },
  ];

  return (
    <section
      className="
        bg-[#f3f3f3]

        py-7
        md:py-8
        lg:py-10

        mb-14
        md:mb-16
        lg:mb-20

        overflow-hidden
      "
    >

      <div className="max-w-[1400px] mx-auto px-6 xl:px-10">

        <div
          className="
            flex
            flex-wrap

            justify-center
            items-center

            gap-10
            md:gap-14
            lg:gap-16

            opacity-60
            grayscale
          "
        >

          {brands.map((brand, index) => (
            <a
              key={index}
              href="/shop"
            >

              <img
                src={brand.src}
                alt="brand"
                className={`
                  ${brand.className}

                  object-contain

                  flex-shrink-0

                  transition-all
                  duration-300

                  hover:grayscale-0
                  hover:opacity-100
                  hover:scale-105
                `}
              />

            </a>
          ))}

        </div>
      </div>
    </section>
  );
}