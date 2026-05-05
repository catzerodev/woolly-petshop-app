export default function Hero() {
  return (
    <section className="relative bg-[#f8f8f8] overflow-visible pt-24 pb-40">
      {/* Blob */}
      <img
        src="/pattern.png"
        className="absolute right-0 bottom-0 h-[105%] object-contain z-0"
      />

      <img
        src="/dog.png"
        className="absolute right-[185px] bottom-[-242px] h-[650px] object-contain drop-shadow-2xl z-20"
      />

      <img
        src="/paws.svg"
        className="absolute right-0 bottom-0 h-[105%] object-contain"
      />
      
      <div className="absolute right-[170px] bottom-[-10px] w-44 h-12 bg-black/20 blur-2xl rounded-full" />
      
      <div className="relative max-w-6xl mx-auto px-6 flex items-center">
        <div>
          <p className="text-orange-500 font-semibold mb-2">Pet Shop</p>

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            A pet store with <br /> everything you need
          </h1>

          <p className="text-gray-600 mb-6 max-w-md">
            Sociis blandit et pellentesque aliquet at quisque tortor lacinia
            nullam.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
