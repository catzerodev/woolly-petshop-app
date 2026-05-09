export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-visible

        pt-[44px]
        pb-12

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
          bottom-[-18px]

          h-[92%]

          object-contain

          opacity-90

          z-[2]
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

          h-full

          object-contain

          opacity-[0.18]
        "
      />

      {/* DOG */}
      <img
        src="/dog.png"
        alt="Dog"
        className="
          absolute
          right-[135px]
          bottom-[-279px]

          h-[760px]

          object-contain

          drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]

          z-20
        "
      />

        {/* PAW SHADOWS */}
<div
  className="
    absolute
    right-[255px]
    bottom-[35px]

    w-24
    h-10

    bg-black/18
    blur-2xl
    rounded-full

    z-[3]
  "
/>

<div
  className="
    absolute
    right-[105px]
    bottom-[35px]

    w-24
    h-10

    bg-black/18
    blur-2xl
    rounded-full

    z-[3]
  "
/>



      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-20 pt-52 z-10">

        <div className="max-w-[760px]">

          {/* TITLE */}
          <h1
            className="
              text-[72px]
              leading-[0.92]
              tracking-[-5px]

              font-black

              text-[#2B1E1E]
            "
          >
            Un lugar pensado
            <br />
            para ellos
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-[#5F5F5F]

              text-[30px]

              leading-relaxed

              font-medium

              mt-10
            "
          >
            Donde cada detalle cuida su día
          </p>

          {/* BUTTON */}
          <button
            className="
              mt-12

              bg-[#FF8A00]
              hover:bg-[#ff9500]

              text-white

              px-12
              py-4

              rounded-full

              text-lg
              font-semibold

              shadow-[0_10px_30px_rgba(255,138,0,0.35)]

              transition-all
              duration-300

              hover:scale-105
            "
          >
            VER PRODUCTOS
          </button>
        </div>
      </div>

     
      {/* WAVE */}
      <div className="absolute bottom-[-20px] left-0 w-full overflow-hidden leading-none z-[5]">
      <svg
      viewBox="0 0 1440 120"
      className="w-full h-[70px] block"
       preserveAspectRatio="none"
      >
   
      <path
      d="
          M0,70
  C260,105 520,35 780,70
  C1040,105 1240,40 1440,70
  L1440,120
  L0,120
  Z
"
      fill="white"
    />
  </svg>
</div>
    </section>
  );
}

