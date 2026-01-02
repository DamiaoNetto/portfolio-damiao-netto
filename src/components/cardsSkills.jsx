import React, { useState } from "react";
import { FaNodeJs, FaGitlab } from "react-icons/fa";
import {
  RiReactjsLine,
  RiTailwindCssLine,
  RiDatabase2Line,
} from "react-icons/ri";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiPhp,
  SiPython,
  SiFlask,
  SiDjango,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiFlutter,
  SiFirebase 
} from "react-icons/si";

const tecnologias = {
  Frontend: [
    { nome: "HTML", icone: <SiHtml5 className="text-orange-500 text-5xl" /> },
    { nome: "CSS", icone: <SiCss3 className="text-blue-500 text-5xl" /> },
    { nome: "Sass / SCSS", icone: <SiSass className="text-pink-400 text-5xl" /> },
    { nome: "JavaScript", icone: <SiJavascript className="text-yellow-400 text-5xl" /> },
    { nome: "React", icone: <RiReactjsLine className="text-[#41a0be] text-5xl" /> },
    { nome: "Tailwind", icone: <RiTailwindCssLine className="text-cyan-400 text-5xl" /> },
  ],
  Backend: [
    { nome: "Python", icone: <SiPython className="text-yellow-300 text-5xl" /> },
    { nome: "Flask", icone: <SiFlask className="text-white text-5xl" /> },
    { nome: "Django", icone: <SiDjango className="text-green-600 text-5xl" /> },
    { nome: "PHP", icone: <SiPhp className="text-blue-400 text-5xl" /> },
    { nome: "Node.js", icone:  <FaNodeJs className="text-7xl mx-auto text-[#539e43]" /> },

    
  ],
  BancodeDados: [
    { nome: "MySQL", icone: <SiMysql className="text-blue-400 text-5xl" /> },
    { nome: "SQLite", icone: <SiSqlite className="text-slate-300 text-5xl" /> },
  ],
  Mobile: [
    {nome: "Flutter", icone: <SiFlutter className="text-6xl text-[#41a0be] mb-3" /> },
    {nome: "Firebase", icone:<SiFirebase className="text-6xl text-[#ffcc30] mb-3" />},
  ],
  Ferramentas: [
    { nome: "Git", icone: <SiGit className="text-orange-600 text-5xl" /> },
    { nome: "GitHub", icone: <SiGithub className="text-white text-5xl" /> },
    { nome: "Figma", icone: <SiFigma className="text-pink-500 text-5xl" /> },
    { nome: "Postman", icone: <SiPostman className="text-7xl mx-auto text-[#ff6c37]"/>},
    { nome: "GitLab", icone:  <FaGitlab className="text-7xl mx-auto text-[#e24329]" />},


  ],
};

const Navegacao = ({ setCategoriaSelecionada, categoriaSelecionada }) => {
  const categorias = ["Frontend", "Backend", "BancodeDados", "Mobile", "Ferramentas"];

  return (
    <div className="flex justify-center gap-5 mb-20 flex-wrap">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => setCategoriaSelecionada(categoria)}
          className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-md ${
            categoriaSelecionada === categoria
              ? "bg-[#41a0be] text-white shadow-[#41a0be]/50"
              : "bg-[#1e1e1e] text-gray-300 hover:bg-[#41a0be]/70 hover:text-white"
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
};

const CardsTecnologias = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Frontend");

  return (
    <section id="cardSkills" className="min-h-screen bg-black/90 text-white text-center flex flex-col items-center justify-center scroll-mt-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#41a0be] mb-2 mt-10">Stack de Desenvolvimento</h2>
        <p className="text-gray-400 mb-10">Tecnologias e ferramentas que fazem parte da minha jornada profissional.</p>

        <Navegacao
          setCategoriaSelecionada={setCategoriaSelecionada}
          categoriaSelecionada={categoriaSelecionada}
        />

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center place-items-center">
  {tecnologias[categoriaSelecionada].map((tec, index) => (
    <div
      key={index}
      className="bg-[#1e1e1e] rounded-2xl p-6 w-34 h-34 flex flex-col items-center justify-between
                 shadow-[0_0_15px_rgba(65,160,190,0.4)] border border-[#41a0be]/30 
                 transition-transform duration-300 hover:scale-105 mb-5"
    >
      {tec.icone}
      <p className="mt-2 text-sm font-semibold text-gray-200 text-center">{tec.nome}</p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default CardsTecnologias;