"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="app_main">
      <Header />
      <main className="flex flex-col justify-center items-center py-20">
        <section className="w-full max-w-4xl px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Quem Somos
          </h1>
          <div className="text-gray-700 text-lg leading-relaxed md:text-xl md:leading-loose">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Estrutura Organizacional</h2>
            <ul className="space-y-3 mb-6">
              <li>
                <strong>Presidente:</strong> Afonso Bongui
              </li>
              <li>
                <strong>Vice-Presidente:</strong> Norberta Garcia
              </li>
              <li>
                <strong>Presidente do Conselho:</strong> Nsumbo Joa
              </li>
              <li>
                <strong>Tesoureiro:</strong> [Adicionar Nome]
              </li>
              <li>
                <strong>Secretário Geral:</strong> [Adicionar Nome]
              </li>
              <li>
                <strong>Dep. de Comunicação:</strong> David Moma
              </li>
            </ul>

            
          </div>
        </section>

        <section className="py-10 px-6 w-full max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/imagem5.jpg"
                alt="Estrutura Organizacional"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 text-base leading-relaxed md:text-lg md:leading-loose">
                A Associação Vozes do Bairro é comprometida com a promoção de
                educação, cultura e cidadania em Luanda, Angola. Nossa equipe
                trabalha incansavelmente para transformar vidas e construir um
                futuro melhor para a nossa comunidade.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
