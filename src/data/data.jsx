import livrosVnw from "../assets/livros_vnw.png";
import jogoVelha from "../assets/jogo_da_velha.png";
import medicos from "../assets/projeto-medicos-solidario.png";
import portfolio from "../assets/page_dn.png";

// Navigation dat
export const navItems = [
  { id: "home", label: "" },
  { id: "about", label: "Sobre" },
  { id: "cardSkills", label: "Habilidades" },
  { id: "projects", label: "Projetos" },
  { id: "testimonials", label: "Depoimentos" },
  { id: "contact", label: "Contatos" },
];

// Testimonials data
export const testimonials = [
  {
    name: "Ana Ribeiro",
    position: "Fundadora, TechLab",
    content:
      "“O Damião entregou um trabalho excepcional no redesign do nosso site. A atenção aos detalhes e a comunicação durante todo o processo foram incríveis.”",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Felipe Rocha",
    position: "CEO, StartUp Hub",
    content:
      "“Trabalhar com o Damião foi uma ótima experiência. Ele conseguiu transformar nossos requisitos complexos em uma interface bonita e fácil de usar.”",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "João Pedro",
    position: "Gerente de Produto",
    content:
      "“As habilidades técnicas e o olhar criativo do Damião ajudaram nossa equipe a criar uma plataforma envolvente que nossos usuários adoram. Super recomendo!”",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=687&q=80",
  },
];

// Portfolio data
export const projectsItems = [
  {
    titulo: "Livros Vai na Web",
    tecnologias: "React | Flask",
    imagem: livrosVnw,
    link: "https://desafio-livros-vnw-wine.vercel.app/",
  },
  {
    titulo: "Jogo da Velha",
    tecnologias: "HTML | CSS | Javascript",
    imagem: jogoVelha,
    link: "https://desafio-livros-vnw-wine.vercel.app/",
  },
  {
    titulo: "Médicos Solidários",
    tecnologias: "React | Vite | SCSS",
    imagem: medicos,
    link: "https://projeto-medicos-solidarios.vercel.app/",
  },
  {
    titulo: "Portfolio",
    tecnologias: "HTML | CSS | Javascript",
    imagem: portfolio,
    link: "https://portifolio-sandy-gamma.vercel.app/",
  },
];