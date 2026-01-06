import { useState, useEffect } from "react";

export default function TituloAnimado() {
  const roles = [{ title: "Web Developer" }, { title: "Front-End Developer" }];

  const [currentRoleIndex, setCurrIndex] = useState(0);
  const [currentText, setCurText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[currentRoleIndex].title;

      if (!isDeleting) {
        // Digitando o texto
        if (currentText === current) {
          // Pausa antes de começar a deletar
          setTimeout(() => setIsDeleting(true), 1000);
          setTypingSpeed(500);
        } else {
          // Continua digitando
          setCurText(current.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        }
      } else {
        // Deletando o texto
        if (currentText === "") {
          setIsDeleting(false);
          setCurrIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        } else {
          setCurText(current.substring(0, currentText.length - 1));
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <div className="text-center md:text-start">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        <span className="text-outline pb-1">{currentText}</span>
        <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-500 ml-1 animate-pulse"></span>
      </h2>
    </div>
  );
}
