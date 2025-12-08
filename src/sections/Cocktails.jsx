import React from "react";
import { cocktailLists, mockTailLists } from "../constants";

const Cocktails = () => {
  return (
    <section id="cocktails" className="noisyBg min-h-dvh relative">
      <img
        src="images/cocktail-left-leaf.png"
        alt="l-leaf"
        id="c-left-leaf"
        className="absolute bottom-0 left-0"
      />

      <img
        src="images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
        className="absolute bottom-0 right-0"
      />
      <div className="list relative z-20 flex flex-col md:flex-row items-center justify-between h-full w-full px-10 md:px-20">
        <div className="popular">
          <h2 className="my-6 text-2xl">Most Popular Cocktails</h2>
          <ul>
            {cocktailLists.map((item) => (
              <li key={item.name} className="flex  gap-10 md:gap-13 my-5">
                <div className="w-50">
                  <h2 className="text-xl text-yellow-100 mb-2">{item.name}</h2>
                  <p>
                    {item.country} | {item.detail}
                  </p>
                </div>
                <span className="text-xl">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="popular">
          <h2 className="my-6 text-2xl">Most Loved Cocktails</h2>
          <ul>
            {mockTailLists.map((item) => (
              <li key={item.name} className="flex  gap-10 md:gap-13 my-5">
                <div className="w-50">
                  <h2 className="text-xl text-yellow-100 mb-2">{item.name}</h2>
                  <p>
                    {item.country} | {item.detail}
                  </p>
                </div>
                <span className="text-xl">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
