import React, { useState } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Previews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleIndexChange(index) {
    setCurrentIndex((index + sliderLists.length) % sliderLists.length);
  }

  function getCockatilAt(n) {
    return sliderLists[
      (currentIndex + n + sliderLists.length) % sliderLists.length
    ];
  }
  const prevCocktail = getCockatilAt(-1);
  const currentCocktail = getCockatilAt(0);

  const nextCocktail = getCockatilAt(1);

  useGSAP(() => {
    gsap.set(".cocktailImg", {
      position: "abosolute",
      top: "50%",
      left: "50%",
      translateX: "-50%",
      translateY: "-50%",
    });
    const tm = gsap.timeline();
    tm.from(".cocktailImg", {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    })
      .from(
        ".left-text",
        {
          opacity: 0,
          yPercent: 50,
          ease: "power1.inOut",
          duration: 0.7,
        },
        "-=0.7"
      )
      .from(
        ".right-text",
        {
          opacity: 0,
          yPercent: -50,
          ease: "power1.inOut",
          duration: 0.7,
        },
        "-=0.5"
      );
  }, [currentIndex]);
  return (
    <section id="previews" className="min-h-dvh radial-gradient relative">
      <div className="previewNavBar grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 px-5 md:px-20">
        {sliderLists.map((coktail, index) => {
          const isActive = index === currentIndex;
          return (
            <h2
              key={coktail.id}
              className={`text-2xl md:text-3xl border-b ${
                isActive
                  ? "text-white border-white"
                  : "text-white/60 border-white/60"
              } text-center pb-2 cursor-pointer `}
              onClick={() => handleIndexChange(index)}
            >
              {coktail.name}
            </h2>
          );
        })}
      </div>

      <div className="arrows relative z-10 px-10 flex items-center justify-between mt-30 mb-20">
        <button
          className="cursor-pointer hover:text-yellow-200"
          onClick={() => handleIndexChange(-1 + currentIndex)}
        >
          <span className="block max-w-30 text-2xl md:text-3xl  text-left">
            {prevCocktail.name}
          </span>
          <img
            src="/images/right-arrow.png"
            alt="right-arrow"
            aria-hidden="true"
          />
        </button>

        <button
          className="cursor-pointer hover:text-yellow-200"
          onClick={() => handleIndexChange(1 + currentIndex)}
        >
          <span className="block max-w-30 text-2xl md:text-3xl  text-left">
            {nextCocktail.name}
          </span>
          <img
            src="/images/left-arrow.png"
            alt="left-arrow"
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="cocktailImg absolute top-[50%] md:top-[60%] left-1/2 -translate-1/2">
        <img src={currentCocktail.image} alt="" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-9/10 mx-auto min-h-[42vh] ">
        <div className="self-start md:self-end max-md:mb-5">
          <p className="text-lg mb-3">Recipe for:</p>
          <h2 className="text-3xl left-text md:text-5xl text-yellow-100 max-w-40 leading-15 font-bold">
            {currentCocktail.name}
          </h2>
        </div>

        <div className="max-w-120 right-text">
          <h2 className="text-3xl md:text-5xl  leading-15 font-bold  mb-4">
            {currentCocktail.title}
          </h2>
          <p className="text-lg">{currentCocktail.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Previews;
