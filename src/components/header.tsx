import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";
import LogoAchael from "../assets/img/achael.logo.jpeg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <header className="bg-[#D0D3D7]/95 backdrop-blur-sm flex items-center p-3 justify-between fixed w-full top-0 z-50 shadow-md">
      {/* LOGO SECTION */}
      <div className="flex items-center gap-3">
        <img className="rounded shadow-sm" src={LogoAchael} alt="Achael Logo" width={40} />
        <a className="font-bold text-xl cursor-pointer tracking-tight">ACHAEL</a>
      </div>

      {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
      <ul className="hidden md:flex gap-8 text-gray-600 font-semibold transition-all">
        <li className="hover:text-[#EF6320] cursor-pointer transition-colors"><a href="#">Início</a></li>
        <li className="hover:text-[#EF6320] cursor-pointer transition-colors"><a href="#service">Serviços</a></li>
        <li className="hover:text-[#EF6320] cursor-pointer transition-colors"><a href="#">Contacto</a></li>
      </ul>

      {/* DESKTOP BUTTON (Hidden on Mobile) */}
      <button className="hidden md:block rounded-xl px-5 py-2 bg-linear-to-r from-[#F06121] to-[#1C4057] text-white font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer">
        Ligar Agora
      </button>

      {/* MOBILE HAMBURGER BUTTON (Visible only on Mobile) */}
      <button 
        className="md:hidden text-2xl text-[#1C4057] cursor-pointer p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`
        absolute top-full left-0 w-full bg-[#D0D3D7] shadow-xl transition-all duration-300 ease-in-out overflow-hidden md:hidden
        ${isOpen ? "max-h-75 border-t border-gray-300" : "max-h-0"}
      `}>
        <ul className="flex flex-col p-5 gap-4 text-gray-700 font-bold">
          <li className="hover:text-[#EF6320]"><a href="#" onClick={() => setIsOpen(false)}>Início</a></li>
          <li className="hover:text-[#EF6320]"><a href="#" onClick={() => setIsOpen(false)}>Serviços</a></li>
          <li className="hover:text-[#EF6320]"><a href="#" onClick={() => setIsOpen(false)}>Contacto</a></li>
          <a href="tel:+244942349797" className="w-full mt-2 rounded-xl p-3 bg-linear-to-r from-[#F06121] to-[#1C4057] text-white flex items-center justify-center gap-2 animate-pulse">
            <FontAwesomeIcon icon={faPhone} /> Ligar Agora
          </a>
        </ul>
      </div>
    </header>
  );
}
