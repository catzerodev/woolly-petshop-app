export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-visible
        pt-[20px]
        pb-20
        bg-gradient-to-r
        from-[#E8DFFF]
        via-[#FBE3DA]
        to-[#FFD29D]
      "
    >
      {/* BACKGROUND SHAPE */}
      <img
        src="/pattern.png"
        alt=""
        className="
        absolute
        right-0
        bottom-[40px]
        h-[92%]
        object-contain
        z-2
        opacity-90
    "
      />

      {/* PAWS */}
      <img
        src="/paws.svg"
        alt=""
        className="
          absolute
          right-0
          top-0
          h-[100%]
          object-contain
          opacity-20
        "
      />

      {/* ORANGE GLOW */}
      <div
        className="
  absolute
  right-0
  bottom-[-40px]
  h-[108%]
  object-contain
  z-0
  opacity-90
"
      />

      {/* DOG */}
      <img
        src="/dog.png"
        alt="Dog"
        className="
          absolute
          right-[100px]
          bottom-[-70px]
          h-[760px]
          object-contain
          drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]
          z-20
        "
      />

      {/* SHADOW */}
      <div
        className="
          absolute
          right-[170px]
          bottom-[20px]
          w-56
          h-16
          bg-black/20
          blur-3xl
          rounded-full
          z-10
        "
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-28 z-10">
        <div className="max-w-[720px]">
          {/* MINI LABEL */}
          <p className="text-[#ff8a00] font-semibold mb-5 text-lg">
            Woolly Pet Shop
          </p>

          {/* TITLE */}
          <h1
            className="
              text-7xl
              font-black
              leading-[0.92]
              tracking-[-4px]
              text-[#2B1E1E]
            "
          >
            Cuidado Premium
            <br />
            para tu Mejor Amigo
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-[#5f5f5f]
              text-2xl
              mt-8
              mb-10
              leading-relaxed
              font-medium
            "
          >
            Lo mejor para ellos, coordinado por WhatsApp.
          </p>

          {/* BUTTON */}
          <button
            className="
              bg-[#FF8A00]
              hover:bg-[#ff9500]
              text-white
              px-12
              py-5
              rounded-full
              text-xl
              font-semibold
              shadow-[0_10px_30px_rgba(255,138,0,0.35)]
              transition-all
              duration-300
              hover:scale-105
            "
          >
            VER PRODUCTOS
          </button>

          {/* MENU */}
          <div className="flex gap-14 mt-14 text-3xl font-medium text-[#3b2a2a]">
            <a href="#" className="hover:text-[#ff8a00] transition">
              Tienda
            </a>

            <a href="#" className="hover:text-[#ff8a00] transition">
              Peluquería
            </a>

            <a href="#" className="hover:text-[#ff8a00] transition">
              Blog
            </a>

            <a href="#" className="hover:text-[#ff8a00] transition">
              Nosotros
            </a>

            <a href="#" className="hover:text-[#ff8a00] transition">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
