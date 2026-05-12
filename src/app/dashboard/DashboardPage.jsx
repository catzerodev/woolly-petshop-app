import { useEffect, useState } from "react";

import MainLayout from "../../common/layout/MainLayout";

import { supabase } from "../../lib/supabase";

import {
  Plus,
  Trash2,
  Pencil,
  Package,
} from "lucide-react";

export default function DashboardPage() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);

  const [toast, setToast] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    stock: "",
    category: "Dog",
  });

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {

    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setProducts(data);
    }

    setLoading(false);
  }

  async function handleSubmit(e) {

    e.preventDefault();

    if (editingId) {

      await supabase
        .from("products")
        .update({
          name: form.name,
          price: Number(form.price),
          image: form.image,
          stock: Number(form.stock),
          category: form.category,
        })
        .eq("id", editingId);

    } else {

      await supabase
        .from("products")
        .insert({
          name: form.name,
          price: Number(form.price),
          image: form.image,
          stock: Number(form.stock),
          category: form.category,
        });

    }

    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);

    setEditingId(null);

    setForm({
      name: "",
      price: "",
      image: "",
      stock: "",
      category: "Dog",
    });

    getProducts();
  }

  async function deleteProduct(id) {

    await supabase
      .from("products")
      .delete()
      .eq("id", id);

    getProducts();
  }

  function editProduct(product) {

    setEditingId(product.id);

    setForm({
      name: product.name,
      price: product.price,
      image: product.image,
      stock: product.stock,
      category: product.category,
    });
  }

  const isAdmin =
    localStorage.getItem("woolly_admin");

  if (!isAdmin) {
    return null;
  }

  return (

    <MainLayout>

      <section className="px-5 md:px-8 xl:px-10 pt-10 pb-24">

        <div className="max-w-[1400px] mx-auto">

          {/* HEADER */}

          <div className="flex items-center justify-between flex-wrap gap-6">

            <div>

              <p className="text-[#FF6B00] font-semibold">
                Admin Dashboard
              </p>

              <h1
                className="
                  text-5xl
                  md:text-7xl

                  font-black

                  tracking-[-3px]

                  mt-3
                "
              >
                Gestión de productos
              </h1>

            </div>

            <div
              className="
                flex
                items-center
                gap-3

                bg-white

                px-6
                py-4

                rounded-3xl

                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
              "
            >

              <Package className="text-[#FF6B00]" />

              <div>

                <p className="text-sm text-[#777]">
                  Productos
                </p>

                <h3 className="font-black text-2xl">
                  {products.length}
                </h3>

              </div>

            </div>

          </div>

          {/* FORM */}

          <div
            className="
              bg-white

              rounded-[36px]

              p-8

              mt-12

              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            "
          >

            <div className="flex items-center gap-3 mb-8">

              <Plus className="text-[#FF6B00]" />

              <h2 className="text-3xl font-black">
                {editingId
                  ? "Editar producto"
                  : "Agregar producto"}
              </h2>

            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >

              <input
                type="text"
                placeholder="Nombre"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="
                  bg-[#F8F8F8]

                  rounded-2xl

                  px-5
                  py-5

                  outline-none
                "
                required
              />

              <input
                type="number"
                placeholder="Precio"
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
                className="
                  bg-[#F8F8F8]

                  rounded-2xl

                  px-5
                  py-5

                  outline-none
                "
                required
              />

              <input
                type="text"
                placeholder="URL imagen"
                value={form.image}
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.target.value,
                  })
                }
                className="
                  bg-[#F8F8F8]

                  rounded-2xl

                  px-5
                  py-5

                  outline-none
                "
                required
              />

              <input
                type="number"
                placeholder="Stock"
                value={form.stock}
                onChange={(e) =>
                  setForm({
                    ...form,
                    stock: e.target.value,
                  })
                }
                className="
                  bg-[#F8F8F8]

                  rounded-2xl

                  px-5
                  py-5

                  outline-none
                "
                required
              />

              <select
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
                className="
                  bg-[#F8F8F8]

                  rounded-2xl

                  px-5
                  py-5

                  outline-none
                "
              >

                <option>Dog</option>
                <option>Cat</option>
                <option>Accessories</option>
                <option>Grooming</option>

              </select>

              <button
                type="submit"
                className="
                  bg-[#FF6B00]
                  hover:bg-[#e55f00]

                  text-white

                  rounded-2xl

                  font-bold

                  transition-all
                "
              >
                {editingId
                  ? "Guardar cambios"
                  : "Crear producto"}
              </button>

            </form>

          </div>

          {/* TABLE */}

          <div className="mt-12 overflow-x-auto">

            <div
              className="
                bg-white

                rounded-[36px]

                p-6

                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              "
            >

              <table className="w-full min-w-[900px]">

                <thead>

                  <tr className="border-b border-gray-200 text-left">

                    <th className="pb-5">Imagen</th>
                    <th className="pb-5">Nombre</th>
                    <th className="pb-5">Precio</th>
                    <th className="pb-5">Stock</th>
                    <th className="pb-5">Categoría</th>
                    <th className="pb-5">Acciones</th>

                  </tr>

                </thead>

                <tbody>

                  {!loading && products.map((product) => (

                    <tr
                      key={product.id}
                      className="border-b border-gray-100"
                    >

                      <td className="py-5">

                        <img
                          src={product.image}
                          alt={product.name}
                          className="
                            w-20
                            h-20

                            object-cover

                            rounded-2xl
                          "
                        />

                      </td>

                      <td className="font-semibold">
                        {product.name}
                      </td>

                      <td className="font-bold text-[#FF6B00]">
                        ${product.price}
                      </td>

                      <td>
                        {product.stock}
                      </td>

                      <td>
                        {product.category}
                      </td>

                      <td>

                        <div className="flex items-center gap-3">

                          <button
                            onClick={() =>
                              editProduct(product)
                            }
                            className="
                              w-11
                              h-11

                              rounded-2xl

                              bg-[#FFF1E7]

                              flex
                              items-center
                              justify-center
                            "
                          >

                            <Pencil
                              size={18}
                              className="text-[#FF6B00]"
                            />

                          </button>

                          <button
                            onClick={() =>
                              deleteProduct(product.id)
                            }
                            className="
                              w-11
                              h-11

                              rounded-2xl

                              bg-red-50

                              flex
                              items-center
                              justify-center
                            "
                          >

                            <Trash2
                              size={18}
                              className="text-red-500"
                            />

                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>

      {toast && (

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
          "
        >
          Acción realizada exitosamente ✨
        </div>

      )}

    </MainLayout>

  );
}