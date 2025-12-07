import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Cocktails from "./sections/Cocktails";
import About from "./sections/About";
import Art from "./sections/Art";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <section className="h-dvh bg-red-300"></section>
      </main>
    </>
  );
};

export default App;
