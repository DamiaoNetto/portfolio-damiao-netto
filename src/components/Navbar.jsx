import React, { useEffect, useState } from "react";
import { navItems } from "../data/data";
import logo from "../assets/logo_DN.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPos >= sectionTop - 200 &&
          scrollPos < sectionTop + sectionHeight - 200
        ) {
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
  className="fixed top-0 w-full py-1.5 z-50 bg-transparent backdrop-blur-sm border-b border-[#41a0be]/30 shadow-[0_1px_10px_#41a0be] transition-all"
>
  <div className="container mx-auto flex items-center justify-between px-4 py-2">
    <div className="h-10 w-10 flex items-center justify-center cursor-pointer">
      <img
        src={logo}
        alt="Logo"
        href="home"
        className="object-cover scale-150 transition-transform duration-300"
      />
    </div>

    <ul className="hidden md:flex items-center space-x-6 text-white text-xs font-semibold uppercase">
      {navItems.map((item) => (
        <li key={item.id}>
          {item.id === "contact" ? (
            <button
              onClick={(e) => handleClick(e, item.id)}
              className={`px-3 py-1.5 rounded-full border transition-all ${
                activeSection === item.id
                  ? "bg-[#41a0be] text-white border-[#41a0be]"
                  : "border-[#41a0be] text-[#41a0be] hover:bg-[#41a0be] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ) : (
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`hover:text-cyan-500 cursor-pointer transition-colors ${
                activeSection === item.id ? "text-[#41a0be]" : ""
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
</nav>

  );
};

