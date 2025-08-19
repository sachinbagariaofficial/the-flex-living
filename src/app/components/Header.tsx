import {
  Building2,
  ChevronDown,
  Info,
  BookOpen,
  Mail,
  Menu,
  Home,
} from "lucide-react";

const Header = () => (
  <header className=" bg-[#FFFDF6]  ">
    <div className="max-w-[1440px] px-[25px]">
      <nav className="flex items-center justify-between h-[88px]">
        {/* Logo */}
        <div className="flex gap-3">
          <Home size={28} className="text-gray-600" />
          <div className="text-xl lg:text-2xl font-light text-gray-800">
            the flex
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-15">
          <button className="flex items-center text-sm font-bold text-[#333] hover:text-gray-900 transition">
            <Building2 size={18} className="mr-1" />
            Landlords
            <ChevronDown size={16} className="ml-1" />
          </button>

          <a
            href="/about-us"
            className="flex items-center text-sm font-bold text-[#333] hover:text-gray-900 transition"
          >
            <Info size={18} className="mr-1" />
            About Us
          </a>

          <a
            href="/careers"
            className="flex items-center text-sm font-bold text-[#333] hover:text-gray-900 transition"
          >
            <BookOpen size={18} className="mr-1" />
            Careers
          </a>

          <a
            href="/contact"
            className="flex items-center text-sm font-bold text-[#333] hover:text-gray-900 transition"
          >
            <Mail size={18} className="mr-1" />
            Contact
          </a>

          {/* Language Switcher */}
          <button className="flex items-center text-sm font-bold text-[#333] hover:text-gray-900 transition">
            <span className="pr-2">🇬🇧</span>
            English
            <ChevronDown size={16} className="ml-1" />
          </button>

          {/* Currency Switcher */}
          <button className="flex items-center text-sm font-bold text-[#333] hover:text-gray-900 transition">
            <span className="text-lg">$</span>
            <span className="ml-1">USD</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <button className="flex items-center text-sm font-bold text-[#333] hover:bg-gray-100 px-3 py-2 rounded-full transition">
            🇬🇧 <span className="ml-1">EN</span>
          </button>
          <button className="flex items-center text-sm font-bold text-[#333] hover:bg-gray-100 px-3 py-2 rounded-full transition">
            $ USD
          </button>
          <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 transition">
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
