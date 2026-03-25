import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-[#171C26] mt-16 px-6 py-10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Empresa */}
        <div>
          <h2 className="text-white text-xl font-bold tracking-wide">ACHAEL</h2>
          <div className="flex flex-col gap-2 text-gray-400 mt-4 text-sm leading-relaxed">
            <span>Comércio e Prestação de Serviços, LDA</span>
            <span>NIF: 5001381547</span>
          </div>
        </div>

        {/* Contactos */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contactos</h2>
          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            
            <span className="flex items-center gap-3 hover:text-white transition">
              <FaPhoneAlt color="#F06121" />
              939 340 305
            </span>

            <span className="flex items-center gap-3 hover:text-white transition">
              <MdOutlineMailOutline color="#F06121" />
              achael04@hotmail.com
            </span>

            <span className="hover:text-white transition">
              www.achael.com
            </span>

          </div>
        </div>

        {/* Localização */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Localização</h2>
          <span className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
            <CiLocationOn color="#F06121" />
            Rua Padre Costa, Casa Nº 7965
          </span>
        </div>

      </div>

    
      <div className="border-t border-gray-700 my-8"></div>

     
      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ACHAEL — Todos os direitos reservados.
      </div>

    </footer>
  );
}