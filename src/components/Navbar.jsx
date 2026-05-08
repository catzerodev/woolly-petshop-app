import {
  Search,
  Heart,
  ShoppingCart,
  PawPrint,
  User,
} from "lucide-react";

export default function Navbar() {
  return (
    <header
  className="
    w-full
    bg-gradient-to-r
    from-[#E8DFFF]
    via-[#FBE3DA]
    to-[#FFD29D]
  "
>
      

     

      {/* NAVBAR */}
      <div className="relative z-50 pt-8 -mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-0 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
            
            {/* LOGO */}
            <div className="flex items-center gap-2 font-semibold text-lg">
              <PawPrint className="text-black" size={20} />
              Woolly PetShop
            </div>

            {/* LINKS */}
            <nav className="hidden md:flex gap-8 text-[15px] font-semibold text-gray-800">
              <a className="hover:text-orange-500">Home</a>
              <a className="text-orange-500 border-b-2 border-orange-500 pb-1">
                Shop
              </a>
              <a className="hover:text-orange-500">Nosotros</a>
              <a className="hover:text-orange-500">Contactanos</a>
            </nav>

            {/* SEARCH */}
            <div className="flex items-center gap-3">
              
              <div
                className="
                flex items-center
                bg-[#f7f7f7]
                rounded-full
                px-4 py-2
                w-[240px]
              "
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none text-sm w-full"
                />
                <Search size={16} className="text-black" />
              </div>

              {/* ICONS */}
              <div className="flex items-center gap-3 ml-2">
                <Heart size={18} />
                <ShoppingCart size={18} />
                <User size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
