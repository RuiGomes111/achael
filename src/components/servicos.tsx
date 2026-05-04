import assistencia from "../assets/img/tec.jpeg";
import impressora from "../assets/img/service-bulkink-D2WZ1Pf-.jpg";
import cctv from "../assets/img/service-cctv-DrQgE8Jd.jpg";
import network from "../assets/img/service-network-CWNhAgEL.jpg";
import bulkink from "../assets/img/bulk.jpeg";
import materiais from "../assets/img/materiais.jpeg";
export default function Servicos() {
  const services = [
    {
      title: "Assistência Técnica",
      description:
        "Diagnóstico, reparação e manutenção de computadores desktop e portáteis.",
      imagem: assistencia,
    },
    {
      title: "Assistência Técnica em Impressoras",
      description:
        "Reparação e manutenção de impressoras de todas as marcas e modelos.",
      imagem: impressora,
    },
    {
      title: "Câmeras de Vigilância",
      description:
        "Montagem e configuração de sistemas de videovigilância (CCTV).",
      imagem: cctv,
    },
    {
      title: "Redes de Computadores",
      description:
        "Instalação e configuração de redes informáticas empresariais e domésticas.",
      imagem: network,
    },
    {
      title: "Sistema Bulk Ink",
      description:
        "Instalação de sistema bulk ink em diversos modelos de impressoras.",
      imagem: bulkink,
    },
    {
      title: "Venda de Materiais",
      description:
        "Tintas bulk ink, sublimáticas, cartuchos, toners, impressoras e computadores reciclados.",
      imagem: materiais,
    },
  ];

  return (
    <section
      id="service"
      className="flex flex-col items-center py-10 px-6 bg-gray-50 rounded-lg overflow-hidden"
    >
      <div className="text-center mb-12">
        <h1 className="text-[#F06121] font-bold tracking-[0.2em] text-sm mb-2">
          O QUE FAZEMOS
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Os Nossos Serviços
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-[#F06121] to-[#1C4057] rounded-full"></div>
      </div>

      {/* Grid de Serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {services.map((service, index) => (
          <div
            key={index}           
            className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            {/* Imagem do Serviço */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={service.imagem}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Conteúdo de Texto */}
            <div className="flex flex-col gap-2 p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
