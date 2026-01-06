import React, { useEffect, useState } from "react";
import { navItems } from "../data/data";
import logo from "../assets/logo_DN.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-[#41a0be]/30">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div
            className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center cursor-pointer"
            onClick={() => {
              const el = document.getElementById("home");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            <img
              src={logo}
              alt="Logo"
              className="object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Menu Desktop */}
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
                    className={`transition-colors hover:text-[#41a0be] ${
                      activeSection === item.id ? "text-[#41a0be]" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Mobile */}
          <button
            className="md:hidden text-white text-2xl hover:text-[#41a0be] transition-colors duration-200"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* DRAWER LATERAL */}
      <aside
        className={`fixed top-0 right-0 h-full w-52 bg-black/85 z-50 transform transition-transform duration-300 border-l border-[#41a0be]/20 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <span className="text-[#41a0be] font-semibold tracking-wide">
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl"
            aria-label="Fechar menu"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-white uppercase text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block transition-colors ${
                  activeSection === item.id
                    ? "text-[#41a0be]"
                    : "hover:text-[#41a0be]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
