import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

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
              <FaPhoneAlt color="#00FF00" />
              939 340 305
            </span>

            <span className="flex items-center gap-3 hover:text-white transition">
              <MdOutlineMailOutline color="#FBBC05" />
              achael04@hotmail.com
            </span>

            <span className="hover:text-white transition items-center gap-3 flex">
              <AiFillFacebook color="#1877F2" />
              <a href="https://www.facebook.com/share/1JPGwwDhnH/?mibextid=wwXIfr">ACHAEL-Comércial & Prestação de Serviços Lda</a>
            </span>

            <span className="hover:text-white transition items-center gap-3 flex">
              <FaInstagram color="#E1306C" />
              <a href="https://www.instagram.com/achael_lda?igsh=bWJ5ZDR0aTFzMnli">ACHAEL Lda</a>
            </span>

          </div>
        </div>

        {/* Localização */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Localização</h2>
           
          <span className="flex items-start gap-3 text-gray-400 text-lg leading-relaxed ">
            Rua Padre Costa, Casa Nº 7965, junto ao parque de estancionamento do GetHotel
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