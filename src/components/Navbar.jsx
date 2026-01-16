import React, { useState } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-screen  bg-black/40 z-50">
      <div className="w-9/10 mx-auto py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="images/logo.png" alt="" />
          <h1 className="text-2xl text-white">Velvet Pour</h1>
        </a>

        <div className="hidden navLinks md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              className="text-white text-gold-hover"
              href={`#${link.id}`}
              key={link.id}
            >
              {link.title}
            </a>
          ))}
        </div>
        <Menu
          size={30}
          className="text-white cursor-pointer block md:hidden"
          onClick={() => setIsMenuOpen(true)}
        />
        {isMenuOpen && <MobileLinks setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </nav>
  );
};
function MobileLinks({ setIsMenuOpen }) {
  return (
    <div className="flex md:hidden flex-col gap-7 items-center justify-center fixed inset-0 bg-black">
      {navLinks.map((link) => (
        <a
          className="text-white text-gold-hover text-lg font-medium"
          href={`#${link.id}`}
          key={link.id}
          onClick={() => setIsMenuOpen(false)}
        >
          {link.title}
        </a>
      ))}

      <X
        size={30}
        className="absolute top-5 right-5 cursor-pointer text-white"
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
}
export default Navbar;
