export default function Brands() {
  const brands = [
    {
      src: "/brands/avant.png",
      className: "h-10",
    },

    {
      src: "/brands/brit.png",
      className: "h-9",
    },

    {
      src: "/brands/hills.png",
      className: "h-12",
    },

    {
      src: "/brands/nutrapro.png",
      className: "h-12",
    },

    {
      src: "/brands/pedigree.png",
      className: "h-20",
    },

    {
      src: "/brands/procan.png",
      className: "h-12",
    },

    {
      src: "/brands/whiskas.png",
      className: "h-12",
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-10 mb-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center justify-between gap-12 opacity-60 grayscale">

          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt="brand"
              className={`
                ${brand.className}
                object-contain
                transition-all
                duration-300
                hover:grayscale-0
                hover:opacity-100
                hover:scale-105
              `}
            />
          ))}

        </div>
      </div>
    </section>
  );
}