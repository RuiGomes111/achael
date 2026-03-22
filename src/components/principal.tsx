import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Principal() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-start px-6 sm:px-10 md:px-20 py-20 md:py-0 mt-[68px]">
      <div className="absolute inset-0 bg-[url('./assets/img/hero-bg-5mfkv4hf.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#010f24]/90 via-[#010f24]/70 to-[#010f24]/50"></div>
      {/* CONTENT - Responsive width and alignment */}
      <div className="relative z-10 w-full max-w-3xl text-left">
        {/* Tag - Added inline-block to prevent weird wrapping */}
        <span className="inline-block text-[#ff9d6c] bg-[#77462f80] border-[#ff6320c7] border-2 rounded-xl px-3 py-1 mt-5 text-sm md:text-base font-bold shadow-[0_0_10px_rgba(239,98,32,0.5)] ">
          Soluções Tecnológicas
        </span>

        {/* Heading - Fluid text sizes */}
        <h1 className="text-3xl sm:text-xl md:text-7xl font-bold text-white mt-6 leading-tight">
          Tecnologia ao
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F06121] via-[#ff8c52] to-[#08304E] brightness-125">
            {" "}
            serviço
          </span>{" "}
          do seu negócio
        </h1>

        <p className="text-gray-300/70 mt-6 text-lg md:text-xl font-medium max-w-xl">
          Assistência técnica, Impressoras, videovigilância, redes e venda de
          equipamentos informáticos.
          <span className="hidden sm:inline">
            {" "}
            Qualidade e confiança em cada serviço.
          </span>
        </p>

        {/* BUTTONS - Stack on mobile (flex-col), side-by-side on desktop (sm:flex-row) */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="group w-full sm:w-auto justify-center bg-linear-to-r from-[#F06121] to-[#1C4057] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
            ver serviços
            <span className="transition-transform duration-300 group-hover:translate-x-2 animate-shake-horizontal text-xl">
              ➪
            </span>
          </button>

          <button className="w-full sm:w-auto justify-center border border-white/20 text-white/90 px-8 py-4 rounded-xl font-bold hover:border-[#EF6220] hover:bg-[#EF6220]/10 hover:scale-105 transition-transform cursor-pointer flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-[#F06121]" />
            939 340 305
          </button>
        </div>
        <div className="flex gap-20 mt-15 text-center">
          <div>
            <span className="text-2xl font-bold text-[#F06121]/50">10+</span>
            <p className="text-gray-300/50 text-sm">Anos de Experiência</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-[#F06121]/50">500+</span>
            <p className="text-gray-300/50 text-sm">Clientes Satisfeitos</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-[#F06121]/50">24h</span>
            <p className="text-gray-300/50 text-sm">Resposta Rápida</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Principal;
