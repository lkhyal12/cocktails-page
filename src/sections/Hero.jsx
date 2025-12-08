import React, { useEffect, useRef, useState } from "react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsapWithCSS from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const videoRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 766);

  useGSAP(() => {
    const charsText = SplitText.create(".title", { type: "chars" });

    gsap.from(charsText.chars, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.02,
      ease: "power1.inOut",
      duration: 0.5,
    });

    const tm = gsap.timeline({
      duration: 1,
      ease: "power.inOut",
    });

    tm.from(".leftSide", {
      yPercent: 100,
      opacity: 0,
    }).from(
      ".rightSide",
      {
        yPercent: -100,
        opacity: 0,
      },
      "-=0.2"
    );
  });
  useGSAP(() => {
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";
    const videoTm = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      videoTm.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: "none",
      });
    };
  });

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 766);
      console.log(isMobile);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <section
        id="home"
        className="noisyBg relative z-10 min-h-dvh pt-20 text-white"
      >
        <img
          src="images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf absolute top-[40%] left-0"
        />

        <img
          src="images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf absolute top-[10%] right-0"
        />
        <h1 className="title relative z-20 uppercase text-[100px] sm:text-[150px] md:text-[200px] w-full text-white/80 italic flex items-center justify-center font-bold">
          mojito
        </h1>

        <div className="content relative z-40 flex max-md:flex-col md:flex-row items-center justify-between w-9/10 mx-auto ">
          <div className="leftSide w-full md:w-78 mb-10 md:mb-0">
            <p className="text-lg">Cool. Grisp. Classic.</p>
            <h2 className="text-yellow-100  text-center  text-3xl md:text-5xl font-bold mt-3">
              Sip The Spirit Of Summer
            </h2>
          </div>

          <div className="rightSide max-w-80">
            <p>
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes
            </p>
            <p>--</p>
            <p className="mb-5">designed to delight your senses .</p>
            <a
              href="#"
              className="text-2xl text-amber-100 hover:text-amber-200"
            >
              View Cocktails
            </a>
          </div>
        </div>
      </section>
      <div className="video absolute  left-0 top-0 w-full h-full ">
        <video
          ref={videoRef}
          src="/videos/input.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
