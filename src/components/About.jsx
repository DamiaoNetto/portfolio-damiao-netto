import React from "react";
import ImagemAbout from "../assets/Design sem nome (8).png";

export default function About() {
  return (
    <section id="about"   className="min-h-screen flex items-center justify-center px-6 bg-black/90 text-white scroll-mt-20"
>
      <div className="container mx-auto mt-10 mb-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#41a0be]">
Um Pouco Sobre Mim      </h2>

        <p className="text-gray-400 text-center mb-12">
Conheça um pouco mais sobre minha trajetória, motivações e experiências.        </p>

        <div className="mx-auto w-full bg-[#31383b] rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 border border-white/20">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Quem sou eu?
            </h3>
            <p className="text-slate-200 mb-4 leading-relaxed">
Sou estudante de Tecnologia em Sistemas para Internet pelo IFRN e aluno do curso Full Stack do Vai na Web. Apaixonado por criar experiências web que unem propósito, estética e performance, busco sempre desenvolver interfaces modernas e funcionais. </p>
            <p className="text-slate-200 mb-4 leading-relaxed">
Atuo como desenvolvedor Front-end, com foco em usabilidade e boas práticas de desenvolvimento. Atualmente, estou iniciando minha jornada como freelancer, ampliando meus conhecimentos e aprimorando minhas habilidades a cada novo projeto.</p>

            
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-12 text-white">
          <div className="text-center p-4 transform transition-transform duration-300 hover:scale-105  cursor-pointer rounded-lg shadow-[6px_0_10px_-2px_rgba(144,216,234,1)]">
            <h4 className="text-4xl font-bold text-[#41a0be]">1+</h4>
            <p className="text-gray-300">Experiência</p>
          </div>
          <div className="text-center p-4 transform transition-transform duration-300 hover:scale-105  cursor-pointer rounded-lg shadow-[6px_0_10px_-2px_rgba(144,216,234,1)]">
            <h4 className="text-4xl font-bold text-[#41a0be]">4+</h4>
            <p className="text-gray-300">Clientes satisfeitos</p>
          </div>
          <div className="text-center p-4 transform transition-transform duration-300 hover:scale-105  cursor-pointer rounded-lg shadow-[6px_0_10px_-2px_rgba(144,216,234,1)]">
            <h4 className="text-4xl font-bold text-[#41a0be]">10+</h4>
            <p className="text-gray-300">Projetos realizados</p>
          </div>

        </div>

          </div>

          {/* Imagem */}
          <div className="flex justify-center items-center ">
            <img
              src={ImagemAbout}
              alt="Damião Netto"
              className="rounded-2xl w-full max-w-[320px] h-auto shadow-[6px_2px_10px_2px_rgba(144,216,234,1)]"

            />
          </div>
        </div>
      </div>
    </section>
  );
};
