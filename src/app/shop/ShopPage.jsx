import { useEffect, useState } from "react";

import { supabase } from "../../lib/supabase";

import { useCartStore } from "../../store/useCartStore";

import MainLayout from "../../common/layout/MainLayout";

export default function ShopPage() {

  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearch] = useState("");

  const { addToCart } = useCartStore();

  const [showToast, setShowToast] = useState(false);

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

const filteredProducts = products.filter((product) => {

  const matchesCategory =
    selectedCategory === "All"
      ? true
      : product.category?.trim() === selectedCategory;

  const matchesSearch =
    product.name &&
    product.name
      .toLowerCase()
      .includes(search.toLowerCase());

  return matchesCategory && matchesSearch;

});

  return (

    <MainLayout
      search={search}
      setSearch={setSearch}
      products={products}
    >   

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
          mb-6

          w-full
          max-w-[500px]
        "
      >

        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full

            bg-white

            border
            border-[#ECECEC]

            rounded-full

            px-6
            py-4

            outline-none

            text-[#4B4B4B]

            shadow-sm
          "
        />

      </div>
         
         
         
         
         
         
          {/* FILTER BUTTONS */}

          <div
            className="
              flex
              flex-wrap

              gap-3

              mb-10
            "
          >

            <button
              onClick={() => setSelectedCategory("All")}
              className={`
                px-5
                py-3

                rounded-full

                font-semibold

                transition-all

                ${
                  selectedCategory === "All"
                    ? "bg-[#FF6B00] text-white"
                    : "bg-white border"
                }
              `}
            >
              Todos
            </button>

            <button
              onClick={() => setSelectedCategory("Dog")}
              className={`
                px-5
                py-3

                rounded-full

                font-semibold

                transition-all

                ${
                  selectedCategory === "Dog"
                    ? "bg-[#FF6B00] text-white"
                    : "bg-white border"
                }
              `}
            >
              Dog
            </button>

            <button
              onClick={() => setSelectedCategory("Cat")}
              className={`
                px-5
                py-3

                rounded-full

                font-semibold

                transition-all

                ${
                  selectedCategory === "Cat"
                    ? "bg-[#FF6B00] text-white"
                    : "bg-white border"
                }
              `}
            >
              Cat
            </button>

            <button
              onClick={() => setSelectedCategory("Grooming")}
              className={`
                px-5
                py-3

                rounded-full

                font-semibold

                transition-all

                ${
                  selectedCategory === "Grooming"
                    ? "bg-[#FF6B00] text-white"
                    : "bg-white border"
                }
              `}
            >
              Grooming
            </button>

            <button
              onClick={() => setSelectedCategory("Accessories")}
              className={`
                px-5
                py-3

                rounded-full

                font-semibold

                transition-all

                ${
                  selectedCategory === "Accessories"
                    ? "bg-[#FF6B00] text-white"
                    : "bg-white border"
                }
              `}
            >
              Accessories
            </button>

          </div>

          {/* PRODUCTS */}

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

            {filteredProducts.map((product) => (

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
                    onClick={() => {

                    addToCart(product);

                    setShowToast(true);

                    setTimeout(() => {
                      setShowToast(false);
                    }, 2000);

                  }}
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


{showToast && (

  <div
    className="
      fixed

      bottom-8
      right-8

      bg-[#1E1E1E]

      text-white

      px-6
      py-4

      rounded-2xl

      shadow-2xl

      z-[99999]

      animate-[fadeIn_.3s_ease]
    "
  >

    <div className="flex items-center gap-3">

      <div
        className="
          w-3
          h-3

          rounded-full

          bg-green-400
        "
      />

      <p className="font-medium">
        Agregado a tu bolsa 🛍️
      </p>

    </div>

  </div>

)}










    </MainLayout>

  );
}