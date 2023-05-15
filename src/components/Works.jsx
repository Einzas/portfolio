import React, { useState } from "react";
const Works = () => {
  const [imageToShow, setImageToShow] = useState(0);
  const slidesAnchor = [
    {
      id: 1,
      title: "Ecommerce",
      img: "/images/ecommerce.png",
      a: "https://einzas-ecommerce.netlify.app",
    },
    {
      id: 2,
      title: "Pokedex",
      img: "/images/pokedex.png",
      a: "https://pokedex-einzas.netlify.app",
    },
    {
      id: 3,
      title: "Clima",
      img: "/images/wheater.png",

      a: "https://beautiful-profiterole-41461a.netlify.app",
    },
    {
      id: 4,
      title: "Phrases",
      img: "/images/phrase.png",
      a: "https://aquamarine-lily-5a52ac.netlify.app",
    },
    {
      id: 5,
      title: "Rick & Morty",
      img: "/images/rick.png",
      a: "https://creative-salmiakki-f91827.netlify.app",
    },
    {
      id: 6,
      title: "Usuarios Api",
      img: "/images/users.png",
      a: "https://tangerine-pixie-f0c05a.netlify.app",
    },
  ];
  const nextImage = () => {
    if (imageToShow < slidesAnchor.length - 1) {
      setImageToShow(imageToShow + 1);
    } else {
      setImageToShow(0);
    }
  };
  const prevImage = () => {
    if (imageToShow > 0) {
      setImageToShow(imageToShow - 1);
    } else {
      setImageToShow(slidesAnchor.length - 1);
    }
  };

  const stylePositionImages = {
    0: "-ml-[0%]",
    1: "-ml-[100%]",
    2: "-ml-[200%]",
    3: "-ml-[300%]",
    4: "-ml-[400%]",
    5: "-ml-[500%]",
  };

  return (
    <section className="w-full max-w-3xl m-auto p-10 ">
      <div className="text-center pt-10  ">
        <span id="work" className="font-bold text-white text-xl sm:text-3xl ">
          My Recent Works
        </span>
      </div>
      <div className=" ">
        <div className="overflow-hidden relative   ">
          <section
            className={`flex w-[600%] ${stylePositionImages[imageToShow]} duration-200 `}
          >
            {slidesAnchor.map((slide) => (
              <a
                href={slide.a}
                target="_blank"
                key={slide.id + 55}
                className="h-full w-[calc(100%_/_6)] p-4 rounded-lg"
              >
                <img
                  className="h-full w-full object-contain rounded-lg"
                  src={slide.img}
                  alt=""
                  key={slide.id}
                />
                <span className="text-white absolute text-center py-3 z-20 bottom-0 rounded-b-lg bg-black/60 w-full left-1/2 -translate-x-1/2  ">
                  {slidesAnchor[imageToShow].title}
                </span>
              </a>
            ))}
          </section>
        </div>
        <div className="grid place-content-center grid-cols-2 mt-5 gap-4">
          <button
            className="bg-gradient-to-r z-10 text-white from-slate-500/30 to-white/40 py-2 px-5 sm:px-12 rounded-full "
            onClick={prevImage}
          >
            Previous
          </button>
          <button
            className="bg-gradient-to-r z-10 text-white from-pink-500/90 to-blue-500/60 py-2 px-5 sm:px-12 rounded-full "
            onClick={nextImage}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
