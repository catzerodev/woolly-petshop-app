// HERO.JSX

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-visible

        pt-6
        md:pt-10
        lg:pt-[44px]

        pb-14
        md:pb-20
        lg:pb-12

        bg-gradient-to-r
        from-[#E8DFFF]
        via-[#FBE3DA]
        to-[#FFD29D]
      "
    >

      {/* PAWS */}
      <img
        src="/paws.svg"
        alt=""
        className="
          absolute

          right-[-40px]
          md:right-[-10px]
          lg:right-0

          top-[40px]
          md:top-[20px]
          lg:top-0

          h-[82%]
          md:h-[72%]
          lg:h-full

          object-contain

          opacity-[0.05]
          md:opacity-[0.05]
          lg:opacity-[0.10]

          scale-[0.78]
          md:scale-[0.78]
          lg:scale-110

          z-0
        "
      />

      {/* BLOB DESKTOP */}
      <img
        src="/pattern.png"
        alt=""
        className="
          hidden
          xl:block

          absolute

          right-[100px]

          bottom-0

          h-[96%]

          object-contain

          opacity-90

          z-[2]
        "
      />

      {/* DESKTOP DOG */}
      <img
        src="/dog.png"
        alt="Dog"
        className="
          hidden
          xl:block

          absolute

          right-[280px]
          bottom-[-294px]

          h-[760px]

          object-contain

          z-[60]
        "
      />

      {/* TABLET DOG */}
      <img
        src="/dog-new.png"
        alt="Dog"
        className="
          hidden
          md:block
          xl:hidden

          absolute

          right-[-220px]
          lg:right-[-120px]

          bottom-[-8px]

          h-[480px]
          lg:h-[520px]

          object-contain

          z-20
        "
      />

      <div
        className="
          relative

          max-w-[1400px]
          mx-auto

          px-5
          md:px-8
          xl:px-10

          pt-28
          md:pt-40
          lg:pt-52

          z-10
        "
      >

        <div
          className="
            max-w-full
            md:max-w-[430px]
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

              leading-[0.95]

              tracking-[-2px]
              md:tracking-[-3px]
              lg:tracking-[-5px]

              font-black

              text-[#2B1E1E]

              max-w-[280px]
              md:max-w-[420px]
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
              md:text-[22px]
              lg:text-[30px]

              leading-relaxed

              font-medium

              mt-5
              md:mt-7
              lg:mt-10

              max-w-[220px]
              md:max-w-[320px]
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

              mt-7
              md:mt-9
              lg:mt-12

              bg-[#FF8A00]
              hover:bg-[#ff9500]

              text-white

              px-7
              md:px-9
              lg:px-12

              py-[11px]
              md:py-4

              rounded-full

              text-[13px]
              md:text-[15px]
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

        {/* MOBILE DOG */}
        <div
          className="
            md:hidden

            flex
            justify-center

            mt-6

            relative

            z-20
          "
        >
          <img
            src="/dog-new.png"
            alt="Dog"
            className="
              h-[260px]

              object-contain

              translate-y-[12px]
            "
          />
        </div>

      </div>

      {/* WAVE */}
      <div
        className="
          absolute

          bottom-[-30px]

          left-0
          w-full

          overflow-hidden
          leading-none

          z-[10]
        "
      >
        <svg
          viewBox="0 0 1440 120"
          className="
            w-full

            h-[42px]
            md:h-[54px]
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