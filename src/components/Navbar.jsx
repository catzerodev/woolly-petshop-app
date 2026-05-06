import {
  Phone,
  Mail,
  MapPin,
  Search,
  Heart,
  ShoppingCart,
  PawPrint,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="bg-[#f8f8f8] text-sm py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-gray-600">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +593 96 800 2100
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> ventas@woollypetshop.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            Av. Real Audiencia 59-200, Quito
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="relative z-50 -mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-0 bg-white rounded-full px-6 py-3 flex items-center justify-between shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
            
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
