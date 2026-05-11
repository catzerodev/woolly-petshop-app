import { useEffect, useState } from "react";

import { supabase } from "../../lib/supabase";

import MainLayout from "../../common/layout/MainLayout";

export default function DashboardPage() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");

  const [editingId, setEditingId] = useState(null);

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

  async function createProduct(e) {

    e.preventDefault();

    const { error } = await supabase
      .from("products")
      .insert([
        {
          name,
          price,
          image,
          stock,
        },
      ]);

    if (error) {
      console.log(error);
      return;
    }

    clearForm();

    getProducts();
  }

  async function updateProduct(id) {

    const { error } = await supabase
      .from("products")
      .update({
        name,
        price,
        image,
        stock,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    clearForm();

    setEditingId(null);

    getProducts();
  }

  async function deleteProduct(id) {

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    getProducts();
  }

  function clearForm() {

    setName("");
    setPrice("");
    setImage("");
    setStock("");
  }

  return (

    <MainLayout>

      <section
        className="
          min-h-screen

          bg-[#F8F5F2]

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

          <h1
            className="
              text-5xl

              font-black

              mb-10
            "
          >
            Dashboard
          </h1>

          <form
            onSubmit={(e) => {

              if (editingId) {
                e.preventDefault();
                updateProduct(editingId);
              } else {
                createProduct(e);
              }

            }}

            className="
              bg-white/90

              backdrop-blur-xl

              p-6
              md:p-8

              rounded-[32px]

              shadow-[0_10px_30px_rgba(0,0,0,0.05)]

              mb-14

              max-w-2xl
            "
          >

            <div className="grid gap-4">

              <input
                type="text"
                placeholder="Nombre del producto"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  p-4

                  rounded-2xl

                  border

                  outline-none
                "
              />

              <input
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="
                  p-4

                  rounded-2xl

                  border

                  outline-none
                "
              />

              <input
                type="text"
                placeholder="URL Imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="
                  p-4

                  rounded-2xl

                  border

                  outline-none
                "
              />

              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="
                  p-4

                  rounded-2xl

                  border

                  outline-none
                "
              />

              <button
                className="
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

                {editingId
                  ? "Guardar cambios"
                  : "Crear producto"}

              </button>

            </div>

          </form>

          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3

              gap-8
            "
          >

            {products.map((product) => (

              <div
                key={product.id}
                className="
                  bg-white

                  rounded-[32px]

                  p-4

                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]

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

                    h-[240px]

                    object-cover

                    rounded-[24px]
                  "
                />

                <h2
                  className="
                    text-3xl

                    font-black

                    mt-5
                  "
                >
                  {product.name}
                </h2>

                <p
                  className="
                    text-[#FF6B00]

                    font-bold

                    text-xl

                    mt-2
                  "
                >
                  ${product.price}
                </p>

                <p
                  className="
                    text-[#7C7C7C]

                    mt-1
                  "
                >
                  Stock: {product.stock}
                </p>

                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() => {

                      setEditingId(product.id);

                      setName(product.name);
                      setPrice(product.price);
                      setImage(product.image);
                      setStock(product.stock);
                    }}

                    className="
                      flex-1

                      bg-blue-500
                      hover:bg-blue-600

                      text-white

                      py-3

                      rounded-full

                      font-semibold
                    "
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="
                      flex-1

                      bg-red-500
                      hover:bg-red-600

                      text-white

                      py-3

                      rounded-full

                      font-semibold
                    "
                  >
                    Eliminar
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