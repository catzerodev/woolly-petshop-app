import { X, Trash2 } from "lucide-react";

import { useCartStore } from "../../../store/useCartStore";

import { useState } from "react";

export default function Cart({
  open,
  setOpen,
}) {

  const [success, setSuccess] = useState(false);
  const {
    cart,
    removeFromCart,
    clearCart,
  } = useCartStore();

  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  return (

    <>

      {/* OVERLAY */}

      {open && (

        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0

            bg-black/30

            backdrop-blur-sm

            z-[9998]
          "
        />

      )}

      {/* PANEL */}

      <div
        className={`
          fixed
          top-0
          right-0

          h-screen

          w-full
          max-w-[430px]

          bg-white

          z-[9999]

          shadow-[-10px_0_40px_rgba(0,0,0,0.08)]

          transition-all
          duration-500

          flex
          flex-col

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* TOP */}

        <div
          className="
            flex
            items-center
            justify-between

            p-6

            border-b
          "
        >

          <h2
            className="
              text-2xl

              font-black
            "
          >
            Mi carrito
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="
              w-10
              h-10

              rounded-full

              bg-[#F5F5F5]

              flex
              items-center
              justify-center
            "
          >

            <X size={20} />

          </button>

        </div>

        {/* ITEMS */}

        <div
          className="
            flex-1

            overflow-y-auto

            p-5

            flex
            flex-col

            gap-4
          "
        >

          {cart.length === 0 && (

            <div
              className="
                text-center

                text-[#888]

                mt-20
              "
            >
              Tu carrito está vacío
            </div>

          )}

          {cart.map((item, index) => (

            <div
              key={index}
              className="
                flex

                gap-4

                bg-[#FAFAFA]

                rounded-3xl

                p-4
              "
            >

              <img
                src={item.image}
                alt={item.name}
                className="
                  w-24
                  h-24

                  rounded-2xl

                  object-cover
                "
              />

              <div className="flex-1">

                <h3
                  className="
                    font-bold

                    text-lg
                  "
                >
                  {item.name}
                </h3>

                <p
                  className="
                    text-[#FF6B00]

                    font-bold

                    mt-2
                  "
                >
                  ${item.price}
                </p>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="
                    mt-3

                    flex
                    items-center

                    gap-2

                    text-red-500

                    text-sm
                  "
                >

                  <Trash2 size={15} />

                  Eliminar

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* FOOTER */}

        <div
          className="
            border-t

            p-6
          "
        >

          <div
            className="
              flex
              items-center
              justify-between

              mb-5
            "
          >

            <span className="text-lg">
              Subtotal
            </span>

            <span
              className="
                text-2xl

                font-black

                text-[#FF6B00]
              "
            >
              ${subtotal}
            </span>

          </div>

<button
  onClick={() => {

    setSuccess(true);

    clearCart();

    setTimeout(() => {

      setSuccess(false);

      setOpen(false);

    }, 2500);

  }}
  className="
    w-full

    bg-[#FF6B00]
    hover:bg-[#e65f00]

    text-white

    py-4

    rounded-full

    font-bold

    transition-all
  "
>
  Finalizar compra
</button>

          <button
            onClick={clearCart}
            className="
              w-full

              mt-3

              border

              py-4

              rounded-full

              font-semibold
            "
          >
            Vaciar carrito
          </button>

        </div>

      </div>

{success && (

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

      z-[999999]
    "
  >
    Compra realizada exitosamente 🎉
  </div>

)}





    </>

  );
}