import { Menu, UserCircle2 } from "lucide-react";

import Logo from "@/components/logo";
import Cart from "./components/cart";
import FAQ from "./components/faq";
// import LowerNav from "./components/lowerNav";
// import SearchInput from "./components/searchBar";

const Navbar = () => {
  return (
    <nav className="pt-8">
      {/* top navigation */}
      <div className="flex justify-between items-center gap-1 md:gap-3 pb-4 mx-5 md:mx-10 ">
        <Menu size={25} className="md:hidden" />
        <Logo />
        {/* <SearchInput /> */}
        <FAQ />
        <UserCircle2 size={25} />
        <Cart />
      </div>
      {/* lower navigation desktop */}
      {/* <LowerNav /> */}
    </nav>
  );
};

export default Navbar;
