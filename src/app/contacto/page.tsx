import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Contacto() {
  return (
    <div className="app_main">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Contato
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  placeholder="Escreva sua mensagem aqui..."
                  
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
