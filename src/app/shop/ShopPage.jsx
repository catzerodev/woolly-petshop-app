import { useEffect, useState } from "react";

import { supabase } from "../../lib/supabase";

import { useCartStore } from "../../store/useCartStore";

import MainLayout from "../../common/layout/MainLayout";

export default function ShopPage() {

  const [products, setProducts] = useState([]);

  const { cart, addToCart } = useCartStore();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {

    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setProducts(data);
  }

  return (

    <MainLayout>

      <section
        className="
          

          bg-transparent

          px-5
          py-10

          md:px-8
          xl:px-10
        "
      >

        <div
          className="
            max-w-[1400px]
            mx-auto
          "
        >

          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4

              gap-8
            "
          >

            {products.map((product) => (

              <div
                key={product.id}
                className="
                  rounded-[32px]

                  overflow-hidden

                  bg-white

                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]

                  p-4

                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full

                    h-[220px]

                    object-cover

                    rounded-[24px]
                  "
                />

                <div className="mt-5">

                  <p
                    className="
                      text-sm

                      text-[#7C7C7C]
                    "
                  >
                    Stock: {product.stock}
                  </p>

                  <h2
                    className="
                      text-[30px]

                      font-black

                      mt-2

                      leading-tight
                    "
                  >
                    {product.name}
                  </h2>

                  <p
                    className="
                      text-[#FF6B00]

                      font-bold

                      text-[20px]

                      mt-3
                    "
                  >
                    ${product.price}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="
                      mt-6

                      w-full

                      bg-[#FF6B00]
                      hover:bg-[#e65f00]

                      text-white

                      py-4

                      rounded-full

                      font-bold

                      transition-all
                      duration-300
                    "
                  >
                    Agregar al carrito
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </MainLayout>

  );
}