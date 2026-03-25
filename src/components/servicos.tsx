import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importação obrigatória dos estilos

// Imports das suas imagens
import assistencia from "../assets/img/workspace-nP1JMOEp.jpeg";
import impressora from "../assets/img/service-bulkink-D2WZ1Pf-.jpg";
import cctv from "../assets/img/service-cctv-DrQgE8Jd.jpg";
import network from "../assets/img/service-network-CWNhAgEL.jpg";

export default function Servicos() {
  // Configuração do AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,      // Duração da animação (1 segundo)
      once: false,         // Faz a animação repetir sempre que rolar a página
      easing: "ease-out",  // Suaviza a entrada
      anchorPlacement: "top-bottom", // Inicia a animação assim que o topo do item entra na tela
    });
  }, []);

  const services = [
    { title: "Assistência Técnica", description: "Diagnóstico, reparação e manutenção de computadores desktop e portáteis.", icon: "🔧", imagem: assistencia },
    { title: "Assistência Técnica em Impressoras", description: "Reparação e manutenção de impressoras de todas as marcas e modelos.", icon: "🔧", imagem: impressora },
    { title: "Câmeras de Vigilância", description: "Montagem e configuração de sistemas de videovigilância (CCTV).", icon: "🔧", imagem: cctv },
    { title: "Redes de Computadores", description: "Instalação e configuração de redes informáticas empresariais e domésticas.", icon: "🔧", imagem: network },
    { title: "Sistema Bulk Ink", description: "Instalação de sistema bulk ink em diversos modelos de impressoras.", icon: "🔧", imagem: impressora },
    { title: "Venda de Materiais", description: "Tintas bulk ink, sublimáticas, cartuchos, toners, impressoras e computadores reciclados.", icon: "🔧", imagem: assistencia },
  ];

  return (
    <section id="service" className="flex flex-col items-center py-25 px-6 bg-gray-50 overflow-hidden">
      
      {/* Cabeçalho da Seção com Fade-Down */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-[#F06121] font-bold tracking-[0.2em] text-sm mb-2">
          O QUE FAZEMOS
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Os Nossos Serviços
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-[#F06121] to-[#1C4057] rounded-full"></div>
      </div>

      {/* Grid de Serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {services.map((service, index) => (
          <div 
            key={index} 
            // Animação de fade-down com delay progressivo
            data-aos="fade-down"
            data-aos-delay={index * 100} 
            className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:text-[#F06121] group cursor-pointer"
          >
            {/* Container da Imagem */}
            <div className="h-52 w-full overflow-hidden">
              <img 
                src={service.imagem} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            
            {/* Conteúdo de Texto */}
            <div className="flex flex-col gap-4 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#F06121] transition-colors duration-300">
                {service.title}
              </h3>
              <div className="w-12 h-1 bg-[#F06121] mx-auto rounded-full"></div> 
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}