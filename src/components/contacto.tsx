import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
export default function Contato() {
  return (
    <div
      id="contato"
      className="bg-[#F0F2F5] py-10 px-7 mt-20 rounded-lg text-center h-screen"
    >
      <div>
        <h2 className="text-md font-semibold mb-2 text-[#F06121]">
          FALE CONNOSCO
        </h2>
        <h3 className="text-4xl font-bold mb-2 text-gray-800">
          Entre em Contato
        </h3>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto mt-16 gap-6 px-4">
        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-[#F06121]/10 p-4 rounded-xl flex items-center justify-center">
            <FaPhoneAlt className="text-[#F06121] text-xl" />
          </div>

          <div className="text-left">
            <p className="text-sm text-gray-500">Telefone</p>
            <p className="text-lg font-semibold text-gray-800">939 340 305</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-[#F06121]/10 p-4 rounded-xl flex items-center justify-center">
            <MdOutlineMailOutline className="text-[#F06121] text-xl" />
          </div>

          <div className="text-left">
            <p className="text-sm text-gray-500 ">Email</p>
            <p className="text-lg font-semibold text-gray-800">achael04@hotmail.com</p>
          </div>
        </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-[#F06121]/10 p-4 rounded-xl flex items-center justify-center">
            <CiLocationOn className="text-[#F06121] text-xl" />
          </div>

          <div className="text-left">
            <p className="text-sm text-gray-500 ">Endereço</p>
            <p className="text-lg font-semibold text-gray-800">Rua Padre Costa, Casa Nº 7965</p>
          </div>
        </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-[#F06121]/10 p-4 rounded-xl flex items-center justify-center">
            <CiLocationOn className="text-[#F06121] text-xl" />
          </div>

          <div className="text-left">
            <p className="text-sm text-gray-500 ">Horário</p>
            <p className="text-lg font-semibold text-gray-800">Seg–Sex: 8h–18h</p>
          </div>
        </div>
      </section>
    </div>
  );
}
