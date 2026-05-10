import { useProducts } from "../hooks/useProducts";

const Shop = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="py-32 text-center">
        <p className="text-[#5F5F5F] text-lg">
          Cargando productos...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-32 text-center">
        <p className="text-red-500 text-lg">
          Error al cargar productos
        </p>
      </div>
    );
  }

  return (
    <section
      className="
        pt-32
        md:pt-36

        pb-16
        md:pb-24

        bg-white
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          md:px-6
        "
      >

        {/* HEADER */}
        <div className="mb-10 md:mb-14">

          <p
            className="
              text-[#F28C28]

              font-medium

              mb-3
            "
          >
            Woolly PetShop
          </p>

          <h1
            className="
              text-[42px]
              md:text-[64px]

              leading-[0.92]

              tracking-[-3px]

              font-black

              text-[#2B1E1E]
            "
          >
            Shop
          </h1>
        </div>

        {/* GRID */}
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-6
            md:gap-8
          "
        >

          {products.map((product) => (
            <div
              key={product.id}
              className="
                bg-[#FAFAFA]

                rounded-[28px]

                p-5

                border
                border-[#F0F0F0]

                hover:-translate-y-1
                hover:shadow-xl

                transition-all
                duration-300
              "
            >

              {/* IMAGE PLACEHOLDER */}
              <div
                className="
                  h-[220px]

                  rounded-[22px]

                  bg-[#F3F3F3]

                  mb-5
                "
              />

              {/* NAME */}
              <h2
                className="
                  text-[20px]

                  font-semibold

                  text-[#171717]

                  mb-2
                "
              >
                {product.name}
              </h2>

              {/* PRICE */}
              <p
                className="
                  text-[28px]

                  font-bold

                  text-[#F28C28]
                "
              >
                ${product.price}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Shop;