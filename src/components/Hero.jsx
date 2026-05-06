export default function Hero() {
  return (
    <section className="relative bg-[#f8f8f8] overflow-visible pt-[110px] pb-40">
      <img
        src="/pattern.png"
        className="absolute right-0 bottom-0 h-[100%] object-contain z-0"
      />

      <img
        src="/dog.png"
        className="absolute right-[210px] bottom-[-261px] h-[700px] object-contain drop-shadow-2xl z-20"
      />

      <img
        src="/paws.svg"
        className="absolute right-0 bottom-0 h-[105%] object-contain"
      />

      <div className="absolute right-[170px] bottom-[-10px] w-44 h-12 bg-black/20 blur-2xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 flex items-center pt-20">
        <div>
          <p className="text-orange-500 font-semibold mb-2">Woolly Pet Shop</p>

          <h1 className="text-5xl leading-tight font-[Pacifico] tracking-wide">
            Cuidado, amor y estilo <br /> para tu mascota
          </h1>

          <p className="text-gray-600 mt-6 mb-6 max-w-md leading-relaxed">
            Productos de calidad y servicio de grooming <br />
            para que siempre luzca feliz y saludable.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition">
            Comprar ahora
          </button>
        </div>
      </div>
    </section>
  );
}
