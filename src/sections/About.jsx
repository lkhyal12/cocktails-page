import React from "react";

const About = () => {
  return (
    <section id="about" className="mb-20">
      <div className="container w-9/10 mx-auto pt-30">
        <div className="content flex flex-col md:flex-row">
          <div className="flex-2 p-4">
            <button className="rounded-full cursor-pointer bg-white text-black px-5 py-2">
              Best Cocktails
            </button>
            <h2 className="text-yellow-100 text-3xl md:text-5xl w-full md:w-8/10 font-bold mt-7 leading-15">
              Where every detail matters -from muddle to garnish
            </h2>
          </div>

          <div className="flex-1 p-4 flex flex-col  gap-15 ">
            <p className="text-lg">
              Where every detail matters -from muddle to garnish Every cocktail
              we serve is a reflection of our obsession with detail - from the
              first muddle to the final garnish. That care is what turns a
              simple drink into something memorable
            </p>
            <div>
              <h2 className="text-[60px] font-bold">
                4.5<span className="text-[40px]">/5</span>
              </h2>
              <p>More than +12000 customers</p>
            </div>
          </div>
        </div>

        <div className="gridContent mt-10 grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="col-span-1 md:col-span-3">
            <img src="/images/abt1.png" alt="" />
          </div>

          <div className="col-span-1 md:col-span-6">
            <img src="/images/abt2.png" alt="grid img" />
          </div>

          <div className=" col-span-1 md:col-span-3">
            <img src="/images/abt5.png" alt="grid img" />
          </div>

          <div className="col-span-1 md:col-span-8">
            <img src="/images/abt3.png" alt="grid img 3" />
          </div>
          <div className="col-span-1 md:col-span-4">
            <img src="/images/abt4.png" alt="grid img 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
