import React from "react";
import { featureLists, goodLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Art = () => {
  useGSAP(() => {
    const tm = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        scrub: 1.5,
        start: "top top",
        end: "bottom center",
        pin: true,
      },
    });

    tm.to(".will-fade", {
      opacity: 0,
      duration: 1,
      stagger: 0.02,
      ease: "power1.inOut",
    })
      .to(".masked-img", {
        scale: 1.3,
        maskSize: "400%",
        maskPosition: "center",
        ease: "power1.inOut",
        duration: 1,
      })
      .to(".masked-content", {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power1.inOut",
      });
  });
  return (
    <section id="art" className="radial-gradient min-h-dvh ">
      <div className="container mx-auto pt-20 relative">
        <h2 className="will-fade text-center text-[15vw] uppercase text-white/70">
          the art
        </h2>
        <div className="content flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img flex flex-col">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit md:60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="masked-content translate-y-full text-center w-full md:w-1/2 mx-auto opacity-0 pb-20">
        <h2 className="text-3xl md:text-5xl">
          Made with Craft, Poured with passion
        </h2>
        <p className="text-lg my-5">
          This isn't just a drink. It's a carefully crafted moment made just for
          you.
        </p>
      </div>
    </section>
  );
};

export default Art;
