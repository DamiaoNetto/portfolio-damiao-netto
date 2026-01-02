import { Fragment } from "react";
import TituloAnimado from "./utils/TituloAnimado";
import { BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import backgroundHero from "../assets/background-hero.jpg";


import curriculo from "../assets/curriculo_damiao_netto.pdf";

export default function Hero(){
  return (
    <Fragment>
      <section  className="relative min-h-screen flex items-center justify-center pt-16 pb-20">
       <div
  className="absolute inset-0 bg-center bg-cover bg-no-repeat brightness-75"
          style={{ backgroundImage: `url(${backgroundHero})` }}
></div>

        <div className="absolute inset-0"></div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h1  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-6 capitalize tracking-wide text-[#41a0be]">
              Damiao Netto
            </h1>
            <TituloAnimado />
            <p className="mt-4 text-white font-medium">
              Desenvolvo sites e aplicações modernas que unem tecnologia e
              criatividade para dar vida às suas ideias.
              <br />
              <span className="">Vamos criar algo incrível juntos!</span>
            </p>
            <div className="flex gap-5 mt-8 justify-center md:justify-start">
              <a
                href="https://wa.me/5584999259170"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 cursor-pointer bg-white rounded-full hover:bg-[#41a0be] transition-colors"
              >
                <BsWhatsapp size={25} />
              </a>

              <a
                href="https://github.com/DamiaoNetto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 cursor-pointer bg-white rounded-full hover:bg-[#41a0be] transition-colors"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/damiao-netto/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 cursor-pointer bg-white rounded-full hover:bg-[#41a0be] transition-colors"
              >
                <LiaLinkedin size={25} />
              </a>

              <a
                href="https://www.instagram.com/nettosousa96/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 cursor-pointer bg-white rounded-full hover:bg-[#41a0be] transition-colors"
              >
                <ImInstagram size={25} />
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/5584999259170"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full cursor-pointer bg-[#41a0be] font-semibold text-white hover:scale-110 transition-transform text-center flex items-center justify-center gap-2"
              >
                Contate-me
              </a>

              <a
                href={curriculo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full cursor-pointer bg-white font-semibold text-black hover:scale-110 transition-transform text-center flex items-center justify-center gap-2"
              >
                <FaDownload className="animate-bounce text-[#41a0be]" />
                Download CV
              </a>
            </div>
          </div>
          {/* <div className="flex justify-center items-center ">
            <img
              src={Imagem}
              alt="Damião Netto"
              className="rounded-2xl w-full max-w-xl"
            />
          </div> */}
        </div>
      </section>
    </Fragment>
  );
};

