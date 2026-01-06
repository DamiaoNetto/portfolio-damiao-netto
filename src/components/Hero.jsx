import { Fragment } from "react";
import TituloAnimado from "./utils/TituloAnimado";
import { BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import { FaGithub, FaDownload } from "react-icons/fa";
import backgroundHero from "../assets/background-hero.jpg";
import curriculo from "../assets/curriculo_damiao_netto.pdf";

export default function Hero() {
  return (
    <Fragment>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 pb-20"
      >
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundHero})` }}
        ></div>

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 capitalize tracking-wide text-[#41a0be] drop-shadow-lg">
              Damiao Netto
            </h1>

            <TituloAnimado />

            <p className="mt-6 text-slate-100 text-base sm:text-lg leading-relaxed drop-shadow-lg">
              Desenvolvo sites e aplicações modernas que unem
              <span className="text-white font-semibold"> tecnologia </span>e
              <span className="text-white font-semibold"> criatividade </span>
              para dar vida às suas ideias.
              <span className="block mt-3 text-[#4cc3e0] font-bold text-lg tracking-wide">
                Vamos criar algo incrível juntos!
              </span>
            </p>

            <div className="flex gap-5 mt-8 justify-center md:justify-start">
              {[
                {
                  icon: <BsWhatsapp size={25} />,
                  link: "https://wa.me/5584999259170",
                },
                {
                  icon: <FaGithub size={25} />,
                  link: "https://github.com/DamiaoNetto",
                },
                {
                  icon: <LiaLinkedin size={25} />,
                  link: "https://www.linkedin.com/in/damiao-netto/",
                },
                {
                  icon: <ImInstagram size={25} />,
                  link: "https://www.instagram.com/nettosousa96/",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-[#41a0be] transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/5584999259170"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-[#41a0be] font-semibold text-white hover:scale-110 transition-transform flex items-center justify-center"
              >
                Contate-me
              </a>

              <a
                href={curriculo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-white font-semibold text-black hover:scale-110 transition-transform flex items-center justify-center gap-2"
              >
                <FaDownload className="animate-bounce text-[#41a0be]" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
