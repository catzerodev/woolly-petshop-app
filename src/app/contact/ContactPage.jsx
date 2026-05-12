import MainLayout from "../../common/layout/MainLayout";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  } from "lucide-react";

export default function ContactPage() {

  const contactInfo = [
    {
      title: "Email",
      value: "hello@woollypetshop.com",
      icon: Mail,
    },

    {
      title: "Teléfono",
      value: "+593 96 800 2100",
      icon: Phone,
    },

    {
      title: "Ubicación",
      value: "Quito, Ecuador",
      icon: MapPin,
    },

    {
      title: "Horario",
      value: "Lun - Sáb / 9am - 7pm",
      icon: Clock3,
    },
  ];

  return (

    <MainLayout>

      <section className="px-5 md:px-8 xl:px-10 pb-24">

        <div className="max-w-[1400px] mx-auto">

          {/* HERO */}

          <div
            className="
              relative

              overflow-hidden

              rounded-[42px]

              min-h-[650px]

              flex
              items-end

              p-8
              md:p-16

              bg-[#F8EFE7]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=1800&auto=format&fit=crop"
              alt="Contact Woolly"
              className="
                absolute
                inset-0

                w-full
                h-full

                object-cover

                opacity-40
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/70
                via-black/20
                to-transparent
              "
            />

            <div className="relative z-10 max-w-[760px] text-white">

              <span
                className="
                  inline-flex

                  bg-white/20
                  backdrop-blur-xl

                  px-5
                  py-2

                  rounded-full

                  text-sm

                  font-semibold
                "
              >
                Contacto Woolly ✨
              </span>

              <h1
                className="
                  mt-7

                  text-5xl
                  md:text-7xl

                  font-black

                  leading-[0.95]

                  tracking-[-3px]
                "
              >
                Hablemos sobre tu mascota
              </h1>

              <p
                className="
                  mt-8

                  text-lg
                  md:text-xl

                  text-white/90

                  leading-relaxed

                  max-w-[620px]
                "
              >
                Nuestro equipo está listo para ayudarte con productos,
                grooming premium y cualquier duda sobre Woolly PetShop.
              </p>

            </div>

          </div>

          {/* CONTACT GRID */}

          <div
            className="
              grid

              grid-cols-1
              xl:grid-cols-[0.9fr_1.1fr]

              gap-10

              mt-16
            "
          >

            {/* LEFT */}

            <div className="space-y-6">

              {contactInfo.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="
                      bg-white

                      rounded-[32px]

                      p-7

                      shadow-[0_10px_40px_rgba(0,0,0,0.05)]

                      flex
                      items-center

                      gap-5
                    "
                  >

                    <div
                      className="
                        w-16
                        h-16

                        rounded-2xl

                        bg-[#FFF1E7]

                        flex
                        items-center
                        justify-center
                      "
                    >

                      <Icon
                        className="text-[#FF6B00]"
                        size={28}
                      />

                    </div>

                    <div>

                      <p
                        className="
                          text-sm

                          text-[#8B817A]

                          font-medium
                        "
                      >
                        {item.title}
                      </p>

                      <h3
                        className="
                          text-2xl

                          font-black

                          mt-1

                          text-[#1E1E1E]
                        "
                      >
                        {item.value}
                      </h3>

                    </div>

                  </div>

                );

              })}

              {/* SOCIAL */}

              <div
  className="
    bg-gradient-to-br
    from-[#FFF4EC]
    via-[#FFEBDD]
    to-[#FFF7F1]

    border
    border-white/60

    rounded-[36px]

    p-8

    overflow-hidden

    relative

    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
  "
>

                <div
                  className="
                    absolute

                    -top-10
                    -right-10

                    w-[180px]
                    h-[180px]

                    rounded-full

                    bg-[#FF6B00]/20
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      w-16
                      h-16

                      rounded-2xl

                      bg-white

                      flex
                      items-center
                      justify-center
                    "
                  >

                    <div className="text-3xl">📸</div>

                  </div>

                  <h3
                    className="
                      text-3xl

                      font-black

                      mt-7
                    "
                  >
                    Síguenos
                  </h3>

                  <p
                    className="
                      mt-4

                      text-[#1E1E1E]

                      leading-relaxed
                    "
                  >
                    Descubre tips, nuevos productos y contenido premium
                    para mascotas en nuestras redes sociales.
                  </p>

                  <button
                    className="
                      mt-7

                      bg-[#FF6B00]
                      hover:bg-[#e55f00]

                      px-7
                      py-4

                      rounded-full

                      font-bold

                      transition-all
                    "
                  >
                    @woollypetshop
                  </button>

                </div>

              </div>

            </div>

            {/* FORM */}

            <div
              className="
                bg-white

                rounded-[42px]

                p-8
                md:p-10

                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              "
            >

              <div>

                <p className="text-[#FF6B00] font-semibold">
                  Envíanos un mensaje
                </p>

                <h2
                  className="
                    text-4xl
                    md:text-5xl

                    font-black

                    tracking-[-2px]

                    mt-4
                  "
                >
                  Estamos aquí para ayudarte
                </h2>

              </div>

              <form className="mt-10 space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    placeholder="Nombre"
                    className="
                      w-full

                      bg-[#F8F8F8]

                      border
                      border-[#ECECEC]

                      rounded-2xl

                      px-5
                      py-5

                      outline-none

                      text-lg
                    "
                  />

                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="
                      w-full

                      bg-[#F8F8F8]

                      border
                      border-[#ECECEC]

                      rounded-2xl

                      px-5
                      py-5

                      outline-none

                      text-lg
                    "
                  />

                </div>

                <input
                  type="text"
                  placeholder="Asunto"
                  className="
                    w-full

                    bg-[#F8F8F8]

                    border
                    border-[#ECECEC]

                    rounded-2xl

                    px-5
                    py-5

                    outline-none

                    text-lg
                  "
                />

                <textarea
                  rows="6"
                  placeholder="Escribe tu mensaje..."
                  className="
                    w-full

                    bg-[#F8F8F8]

                    border
                    border-[#ECECEC]

                    rounded-2xl

                    px-5
                    py-5

                    outline-none

                    text-lg

                    resize-none
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full

                    bg-[#FF6B00]
                    hover:bg-[#e55f00]

                    text-white

                    py-5

                    rounded-full

                    font-bold

                    text-lg

                    flex
                    items-center
                    justify-center

                    gap-3

                    transition-all
                  "
                >

                  <Send size={20} />

                  Enviar mensaje

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>

  );
}