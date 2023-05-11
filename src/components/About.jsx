import React from "react";

const About = () => {
  return (
    <section>
      <div className="w-[800px] sm:w-full sm:ml-0 relative h-full -ml-56">
        <img className="" src="/images/about.png" alt="" />

        <span className="text-white absolute top-1/2 -translate-y-56 z-10 h-40 max-w-[150px] left-1/2 -translate-x-10 ">
          <h2 id="description" className="font-bold text-xl py-5">
            About me
          </h2>
          My name is Jeimy Jara, I am a FrontEnd developer who aims to provide
          the best optimized applications for the user. My current goal is to
          continue improving both as a developer and as a person.
        </span>
      </div>
    </section>
  );
};

export default About;
