import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen  bg-black/40 z-50">
      <div className="w-9/10 mx-auto py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="images/logo.png" alt="" />
          <h1 className="text-2xl text-white">Velvet Pour</h1>
        </a>

        <div className="navLinks flex items-center gap-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
