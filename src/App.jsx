import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Cocktails from "./sections/Cocktails";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Cocktails />
      </main>
    </>
  );
};

export default App;
