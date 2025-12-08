import React from "react";
import { openingHours, socials } from "./constants";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText, ScrollTrigger);
const Contact = () => {
  useGSAP(() => {
    const tm = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 20%",
      },
    });

    tm.from("#f-right-leaf", {
      y: "-50%",
      x: "20%",
      duration: 0.5,
      ease: "power1.inOut",
    })
      .from(
        "#f-left-leaf",
        {
          y: "50%",
          x: "-20%",
          duration: 0.5,
          ease: "power1.inOut",
        },
        "-=0.3"
      )
      .from("h3", {
        stagger: 0.02,
        ease: "power1.inOut",
        yPercent: 100,
        opacity: 0,
        duration: 1,
      });
  });
  return (
    <section id="contact" className="min-h-dvh radial-gradient py-15 relative">
      <h2 className="text-3xl md:text-4xl text-center">Where To Find Us</h2>
      <div className="contact-content flex flex-col items-center gap-6 md:gap-8 mt-10">
        <div className="text-center">
          <h3 className="text-lg mb-3 uppercase">Visit Our Bar</h3>
          <p className="text-2xl">456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div className="text-center">
          <h3 className="text-lg mb-3 uppercase">Contact Us</h3>
          <p className="text-2xl">(555) 987-6543</p>
          <p className="text-2xl">hello@jsmcocktail.com</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg mb-3 uppercase">Open Every Day</h3>
          {openingHours.map((h) => (
            <p className="text-2xl">
              {h.day} : {h.time}
            </p>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-lg mb-3 uppercase">socials</h3>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <img className="cursor-pointer" src={s.icon} alt="" />
            ))}
          </div>
        </div>
      </div>

      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        className="absolute top-0 right-0"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
};

export default Contact;
