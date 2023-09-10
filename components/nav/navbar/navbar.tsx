import { Menu, UserCircle2 } from "lucide-react";

import Logo from "@/components/logo";
import SearchBar from "./components/SearchBar";
import Cart from "./components/cart";
import FAQ from "./components/faq";
import LowerNav from "./components/lowerNav";

const Navbar = () => {
  return (
    <nav className="py-5 border border-red-600">
      {/* top navigation */}
      <div className="flex justify-between items-center gap-1 md:gap-3 px-5 md:px-10 ">
        <Menu size={25} className="md:hidden" />
        <Logo />
        <SearchBar />
        <FAQ />
        <UserCircle2 size={25} />
        <Cart />
      </div>
      {/* lower navigation desktop */}
      <LowerNav />
    </nav>
  );
};

export default Navbar;
