export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-visible

        pt-6
        md:pt-10
        lg:pt-[44px]

        pb-16
        md:pb-20
        lg:pb-12

        bg-gradient-to-r
        from-[#E8DFFF]
        via-[#FBE3DA]
        to-[#FFD29D]
      "
    >

      <img
        src="/pattern.png"
        alt=""
        className="
          absolute

          right-[-120px]
          md:right-[-40px]
          lg:right-0

          bottom-[-12px]
          md:bottom-[-16px]
          lg:bottom-[-18px]

          h-[55%]
          md:h-[72%]
          lg:h-[92%]

          object-contain

          opacity-90

          z-[2]
        "
      />

      <img
        src="/paws.svg"
        alt=""
        className="
          absolute
          right-0
          top-0

          h-full

          object-contain

          opacity-[0.10]
          md:opacity-[0.14]
          lg:opacity-[0.18]
        "
      />

      <img
        src="/dog.png"
        alt="Dog"
        className="
          absolute

          right-[-30px]
          md:right-[20px]
          lg:right-[135px]

          bottom-[-90px]
          md:bottom-[-160px]
          lg:bottom-[-279px]

          h-[320px]
          md:h-[520px]
          lg:h-[760px]

          object-contain

          drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]

          z-20
        "
      />

      <div
        className="
          absolute

          right-[85px]
          md:right-[160px]
          lg:right-[255px]

          bottom-[10px]
          md:bottom-[18px]
          lg:bottom-[35px]

          w-12
          md:w-16
          lg:w-24

          h-5
          md:h-7
          lg:h-10

          bg-black/18
          blur-2xl
          rounded-full

          z-[3]
        "
      />

      <div
        className="
          absolute

          right-[5px]
          md:right-[55px]
          lg:right-[105px]

          bottom-[10px]
          md:bottom-[18px]
          lg:bottom-[35px]

          w-12
          md:w-16
          lg:w-24

          h-5
          md:h-7
          lg:h-10

          bg-black/18
          blur-2xl
          rounded-full

          z-[3]
        "
      />

      <div className="relative max-w-[1400px] mx-auto px-6 xl:px-10 pt-40 md:pt-44 lg:pt-52 z-10">

        <div
          className="
            max-w-full
            md:max-w-[560px]
            lg:max-w-[760px]

            relative
            z-10
          "
        >

          <h1
            className="
              text-[42px]
              md:text-[58px]
              lg:text-[72px]

              leading-[0.92]

              tracking-[-2px]
              md:tracking-[-3px]
              lg:tracking-[-5px]

              font-black

              text-[#2B1E1E]

              max-w-[280px]
              md:max-w-[520px]
              lg:max-w-full
            "
          >
            Un lugar pensado
            <br />
            para ellos
          </h1>

          <p
            className="
              text-[#5F5F5F]

              text-[18px]
              md:text-[24px]
              lg:text-[30px]

              leading-relaxed

              font-medium

              mt-6
              md:mt-8
              lg:mt-10

              max-w-[240px]
              md:max-w-[420px]
              lg:max-w-[520px]
            "
          >
            Donde cada detalle cuida su día
          </p>

          <a
            href="/shop"
            className="
              inline-flex
              items-center
              justify-center

              mt-8
              md:mt-10
              lg:mt-12

              bg-[#FF8A00]
              hover:bg-[#ff9500]

              text-white

              px-8
              md:px-10
              lg:px-12

              py-3
              md:py-4

              rounded-full

              text-[14px]
              md:text-base
              lg:text-lg

              font-semibold

              shadow-[0_10px_30px_rgba(255,138,0,0.35)]

              transition-all
              duration-300

              hover:scale-105
            "
          >
            VER PRODUCTOS
          </a>

        </div>
      </div>

      <div
        className="
          absolute

          bottom-[-10px]
          md:bottom-[-14px]
          lg:bottom-[-20px]

          left-0
          w-full

          overflow-hidden
          leading-none

          z-[5]
        "
      >
        <svg
          viewBox="0 0 1440 120"
          className="
            w-full

            h-[45px]
            md:h-[58px]
            lg:h-[70px]

            block
          "
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