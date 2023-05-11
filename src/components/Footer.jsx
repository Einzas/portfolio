import React from "react";

const Footer = () => {
  return (
    <footer className="grid relative gap-10 justify-center py-10 bg-blue-800/30">
      <nav>
        <ul className="sm:flex gap-10 items-center text-xl scroll-smooth ">
          <li>
            <a href="#">
              <i className="bx bx-home"> Home</i>
            </a>
          </li>
          <li>
            <a href="#description">
              <i className="bx bx-user"> About</i>
            </a>
          </li>
          <li>
            <a href="#work">
              <i className="bx bx-briefcase"> Works</i>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="bx bx-envelope"> Contact</i>
            </a>
          </li>
        </ul>
      </nav>

      <nav className="text-3xl">
        <ul className="flex justify-center gap-10">
          <li>
            <a
              href="https://www.linkedin.com/in/jeimy-jara-bautista-37383a240/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Einzas/" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </li>
        </ul>
      </nav>

      <hr className="absolute bottom-5 w-96 left-1/2 -translate-x-1/2" />
    </footer>
  );
};

export default Footer;
