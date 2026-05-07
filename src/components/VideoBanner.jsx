import { Play } from "lucide-react";

export default function VideoBanner() {
  return (
    <section className="pt-8 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[36px] h-[420px] shadow-xl">

          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
          </video>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center justify-between px-16">

            {/* LEFT TEXT */}
            <div className="max-w-sm text-white z-10">

              <p className="text-orange-400 font-semibold mb-3">
                Woolly PetShop
              </p>

              <h2 className="text-5xl font-bold leading-tight mb-5">
                Las mejores marcas
                <br />
                para tu mascota
              </h2>

              <p className="text-white/80 leading-relaxed">
                Productos premium, accesorios y cuidado especializado
                para consentir a tu mejor amigo.
              </p>

            </div>

            {/* PLAY BUTTON */}
            <button className="w-24 h-24 rounded-full bg-[#F28C28] flex items-center justify-center shadow-2xl hover:scale-110 transition z-10">
              <Play size={42} fill="white" color="white" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}