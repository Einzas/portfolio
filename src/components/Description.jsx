import React from "react";

const Description = () => {
  return (
    <article className="sm:mt-36 mt-56 sm:m-0 sm:w-[800px] sm:mx-auto">
      <section className="">
        <h2 className="text-3xl sm:text-5xl mx-5 z-10 max-w-[44rem] font-semibold">
          Designs and Applications <br /> Jeimy Jara a FrontEnd Developer from
          Ecuador to the World
        </h2>
        <div className="flex justify-center gap-3 mt-14">
          <button className="bg-gradient-to-r z-10 from-slate-500/30 to-white/40 py-2 px-5 sm:px-12 rounded-full">
            Hire me
          </button>
          <button className="bg-gradient-to-r z-10 from-pink-500/90 to-blue-500/60 py-2 px-5 sm:px-12 rounded-full">
            Download CV
          </button>
        </div>
      </section>
    </article>
  );
};

export default Description;
