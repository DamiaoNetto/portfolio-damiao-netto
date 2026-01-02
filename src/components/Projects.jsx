import React, { useState } from "react";
import { projectsItems } from "../data/data";

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () => {
    if (visibleCount < projectsItems.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3); // volta para o início
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-black/90 text-white text-center flex flex-col items-center justify-center scroll-mt-15">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#41a0be] mb-2 mt-10">Projetos</h2>
        <p className="text-gray-400 mb-10">
          Estes são alguns dos trabalhos que desenvolvi com foco em resultado e qualidade.
        </p>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsItems.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 
                         hover:-translate-y-1 transition-transform shadow-[0_0_15px_rgba(65,160,190,0.3)]"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-48 overflow-hidden cursor-pointer">
                  <img
                    src={item.imagem}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt={item.titulo}
                  />
                </div>
              </a>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-white">
                  {item.titulo}
                </h3>
                <p className="text-slate-400 mt-2">{item.tecnologias}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão fixo abaixo */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleToggle}
            className="px-8 py-3 rounded-full bg-[#41a0be] text-white font-semibold 
                       hover:scale-105 hover:bg-cyan-500 transition-all shadow-lg shadow-[#41a0be]/40 mb-5"
          >
            {visibleCount < projectsItems.length ? "Ver mais..." : "Ver menos"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
