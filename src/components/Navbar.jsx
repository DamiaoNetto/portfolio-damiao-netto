import React, { useEffect, useState } from "react";
import { navItems } from "../data/data";
import logo from "../assets/logo_DN.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // ajusta o threshold se precisar (200px funciona bem para nav fixa)
        if (scrollPos >= sectionTop - 200) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    // chama uma vez para setar o estado inicial
    handleScroll();

    // passive melhora performance de scroll
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // executa só no mount/unmount

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed top-0 w-full py-2 z-50  backdrop-blur-sm border-b border-[#41a0be]/30 shadow-[0_2px_15px_#41a0be] transition-all"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3 ">
        <div className="h-15 w-15 overflow-hidden flex items-center justify-center cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="object-cover scale-250 transition-transform duration-300"
          />
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-white text-sm font-semibold uppercase">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`hover:text-cyan-500 cursor-pointer transition-colors ${
                  activeSection === item.id ? "text-cyan-500" : ""
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
