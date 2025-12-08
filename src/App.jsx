import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Cocktails from "./sections/Cocktails";
import About from "./sections/About";
import Art from "./sections/Art";
import Previews from "./sections/Previews";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Cocktails />
        <Art />
        <About />
        <Previews />
        <Contact />
      </main>
    </>
  );
};

export default App;
