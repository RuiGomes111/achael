import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contato() {
  useEffect(() => {
    AOS.init({ duration: 600, once: false, easing: "ease-out" });
  }, []);

  const cards = [
    { icon: <FaPhoneAlt color="#F06121" />, label: "Telefone", value: "939 340 305" },
    { icon: <MdOutlineMailOutline color="#F06121" />, label: "Email", value: "achael04@hotmail.com" },
    { icon: <CiLocationOn color="#F06121" />, label: "Endereço", value: "Rua Padre Costa, Casa Nº 7965" },
    { icon: <IoTimeOutline color="#F06121" />, label: "Horário", value: "Seg–Sex: 8h–18h" },
  ];

  return (
    <div id="contato" className="bg-[#F0F2F5] py-10 px-6 mt-20 rounded-lg text-center">
      <div>
        <h2 className="text-md font-semibold mb-2 text-[#F06121]">FALE CONNOSCO</h2>
        <h3 className="text-4xl font-bold mb-2 text-gray-800">Entre em Contato</h3>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto mt-12 gap-6 px-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} 
            className="flex items-center gap-4 bg-white p-4 md:p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 min-h-[80px]"
          >
            <div className="bg-[#F06121]/10 p-3 md:p-4 rounded-xl flex items-center justify-center flex-shrink-0">
              {card.icon}
            </div>
            <div className="text-left flex flex-col justify-center">
              <p className="text-xs md:text-sm text-gray-500">{card.label}</p>
              <p className="text-base md:text-lg font-semibold text-gray-800">{card.value}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}