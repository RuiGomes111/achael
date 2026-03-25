import Header from "./components/header";
import Principal from "./components/principal";
import Servicos from "./components/servicos";
import Sobre from "./components/sobre";
import Contato from "./components/contacto";
import Footer from "./components/footer";

function App() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen">
      <Header />
      <Principal />
      <Servicos />
      <Sobre />
      <Contato />
      <Footer />

     
      
    </main>

  );
}

export default App;
