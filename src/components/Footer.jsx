export default function Footer() {
  return (
    <footer className="relative mt-24">

      {/* PUG */}
      <img
  src="/footer/pug.png"
  alt="Pug"
  className="absolute left-1/2 -translate-x-1/2 top-[-110px] z-20 w-[1800px]"
/>

      {/* WAVE BACKGROUND */}
      <div className="pt-6">

        <div
          className="
            relative
            bg-gradient-to-r
            from-[#F7D8FF]
            via-[#FFE6D6]
            to-[#FFB347]
            
            overflow-hidden
            w-full
            
          "
        >

          {/* PAWS */}
          <img
            src="/paws.svg"
            alt=""
            className="absolute left-0 top-0 opacity-10 w-[300px]"
          />

          <img
            src="/paws.svg"
            alt=""
            className="absolute right-0 bottom-0 opacity-10 w-[300px] rotate-180"
          />

          {/* CONTENT */}
          <div className="max-w-7xl mx-auto px-6 pt-44 pb-10 grid grid-cols-1 md:grid-cols-5 gap-6 items-start relative z-20">

            {/* BRAND */}
                <div className="relative z-20">
              <h3 className="text-3xl font-black mb-4">
                Woolly PetShop
              </h3>

              <p className="text-[15px] text-gray-700 leading-8 mb-5">
                Lo mejor para consentir a tu mascota con productos premium y grooming profesional.
              </p>

              {/* SOCIALS */}
              <div className="flex gap-3">

                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  📘
                </div>

                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  📸
                </div>

                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  💬
                </div>

              </div>
            </div>

            {/* TIENDA */}
            <div>
              <h4 className="font-black mb-5 uppercase">
                Tienda
              </h4>

              <ul className="space-y-2 text-[15px] text-gray-700">
                <li>Nosotros</li>
                <li>Blog</li>
                <li>Gift cards</li>
                <li>Adopta</li>
              </ul>
            </div>

            {/* CATEGORIAS */}
            <div>
              <h4 className="font-black mb-5 uppercase">
                Categorías
              </h4>

              <ul className="space-y-3 text-gray-700">
                <li>Ropa y accesorios</li>
                <li>Alimento</li>
                <li>Camas</li>
                <li>Kennels</li>
              </ul>
            </div>

            {/* LINKS */}
            <div>
              <h4 className="font-black mb-5 uppercase">
                Enlaces útiles
              </h4>

              <ul className="space-y-3 text-gray-700">
                <li>Contacto</li>
                <li>Envíos</li>
                <li>Reembolsos</li>
                <li>Preguntas frecuentes</li>
              </ul>
            </div>

            {/* CONTACTO */}
            <div>
              <h4 className="text-sm font-black mb-4 uppercase tracking-wide">
                Contacto
              </h4>

              <div className="space-y-4 text-gray-700">

                <div className="flex gap-3">
                  <span>📍</span>
                  <p>Av. Real Audiencia 59-200, Quito</p>
                </div>

                <div className="flex gap-3">
                  <span>📞</span>
                  <p>+593 96 800 2100</p>
                </div>

                <div className="flex gap-3">
                  <span>✉️</span>
                  <p>ventas@woollypetshop.com</p>
                </div>

              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-black/10 py-5 text-center text-sm text-gray-700 relative z-10">
            © 2025 Woolly PetShop. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}