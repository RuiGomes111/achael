import assistencia from "../assets/img/workspace-nP1JMOEp.jpeg";
import yes from "../assets/icon/checkmarks.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Sobre() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl w-full p-7 bg-[#F0F2F5] py-10 justify-center ">
      <div className="py-10 relative w-fit">
  <img
    src={assistencia}
    alt="foto impressora"
    className="rounded-2xl shadow-lg"
  />

  <div className="absolute  right-4 -translate-y-1/2 
    rounded-2xl shadow-lg p-4 
    bg-white/90 backdrop-blur-sm">
    
    <span className="text-2xl font-bold text-[#F06121]">
      10+
    </span>
    <p className="text-gray-800 text-sm">
      Anos de Experiência
    </p>
  </div>
</div>
      <div className="flex flex-col gap-5 py-10">
        <div>
          <h2 className="text-md font-semibold mb-2 text-[#F06121]">
            SOBRE NÓS
          </h2>
          <h3 className="text-4xl font-bold mb-2 text-gray-800">
            Compromisso com a{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F06121] via-[#ff8c52] to-[#08304E] brightness-125">
              Excelência
            </span>
          </h3>
        </div>
        <p className="text-gray-500 text-lg  ">
          A ACHAEL é uma empresa dedicada ao comércio e prestação de serviços na
          área tecnológica. Com anos de experiência, oferecemos soluções
          completas em assistência técnica, videovigilância, redes informáticas
          e fornecimento de materiais.
        </p>
        <div className=" text-base  mt-5 gap-3 flex flex-col ">
          <p>
            {" "}
            <img src={yes} alt="Sim" className="w-6 h-6 inline mr-2" />
            Equipamentos de qualidade comprovada
          </p>
          <p>
            {" "}
            <img src={yes} alt="Sim" className="w-6 h-6 inline mr-2" />
            Técnicos especializados e certificados
          </p>
          <p>
            {" "}
            <img src={yes} alt="Sim" className="w-6 h-6 inline mr-2" />
            Garantia em todos os serviços
          </p>
          <p>
            {" "}
            <img src={yes} alt="Sim" className="w-6 h-6 inline mr-2" />
            Atendimento personalizado
          </p>
        </div>
        <a href="#contato" className="bg-[#25D366] text-white py-2 px-4 rounded-lg hover:bg-[#25D366]/90 transition-colors duration-300 w-max mt-5 inline-flex items-center gap-2 hover:scale-105 transform cursor-pointer">
          <FaWhatsapp />
          Fale Connosco ➪
        </a>
      </div>
    </div>
  );
}
