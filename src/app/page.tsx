"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntroGuide } from "@/components/IntroGuide";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");

  const suggestedAmounts = [50, 100, 200];

  const handleDonationChange = (amount: number) => {
    setDonationAmount(amount);
  };

  const handleDonate = () => {
    alert(`Obrigado por sua doação de KZ ${donationAmount}!`);
  };

  return (
    <div className="app_main">
      <Header />
      <main className="flex flex-col justify-center items-center pt-20 pb-10">
        <IntroGuide />

        <section className="py-20 px-6">
          <div className=" mx-auto flex flex-col md:flex-row sm:flex-row items-center">
            {/* Coluna com a imagem grande (esquerda) */}
            <div className="md:w-2/3 relative">
              <Image
                src="/fotogrupo.jpg"
                alt="Imagem Grande"
                width={900}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Colagem (direita) */}
            <div className="md:w-1/3 relative">
              {/* Imagem principal sobreposta */}
              <div className="absolute top-[50px] left-5 w-32 h-32 z-30 transform ">
                <Image
                  src="/imagem1.jpg"
                  alt="Imagem 1"
                  width={224}
                  height={224}
                  className="object-cover rounded-lg shadow-lg border-2 border-white"
                />
              </div>

              {/* Imagem inclinada à direita */}
              <div className="absolute top-[-250px] left-44 right-30 w-40 h-40 z-20 transform ">
                <Image
                  src="/imagem2.jpg"
                  alt="Imagem 2"
                  width={224}
                  height={224}
                  className="object-cover rounded-lg shadow-lg border-2 border-white"
                />
              </div>

              {/* Imagem menor centralizada */}
              <div className="absolute top-[-150px] left-10 w-28 h-28 z-40 transform ">
                <Image
                  src="/imagem3.jpg"
                  alt="Imagem 3"
                  width={112}
                  height={112}
                  className="object-cover rounded-lg shadow-lg border-2 border-white"
                />
              </div>

              {/* Imagem lateral sobreposta */}
              <div className="absolute top-[-10px] left-60 right-30 w-36 h-36 z-10 transform ">
                <Image
                  src="/imagem4.jpg"
                  alt="Imagem 4"
                  width={144}
                  height={144}
                  className="object-cover rounded-lg shadow-lg border-2 border-white"
                />
              </div>

              {/* Imagem pequena no fundo */}
              <div className="absolute top-[-30px] left-[-50] w-20 h-20 z-0 transform">
                <Image
                  src="/imagem5.jpg"
                  alt="Imagem 5"
                  width={80}
                  height={80}
                  className="object-cover rounded-lg shadow-lg border-2 border-white"
                />
              </div>

              {/* Nova imagem adicional 1 */}
              <div className="absolute top-[-90px] left-48 w-24 h-24 z-50 transform">
                <Image
                  src="/imagem6.jpg"
                  alt="Imagem 6"
                  width={96}
                  height={96}
                  className="object-cover rounded-lg shadow-lg border-2 border-white"
                />
              </div>

              {/* Nova imagem adicional 2 */}
              <div className="absolute top-[-120px] left-36 w-28 h-28 z-45 transform ">
                <Image
                  src="/imagem6.jpg"
                  alt="Imagem 7"
                  width={112}
                  height={112}
                  className="object-cover rounded-lg shadow-lg border-2 border-white"
                />
              </div>

              {/* Nova imagem adicional 3 */}
              <div className="absolute top-[-60px] left-60 w-32 h-32 z-35 transform">
                <Image
                  src="/imagem5.jpg"
                  alt="Imagem 8"
                  width={128}
                  height={128}
                  className="object-cover rounded-lg shadow-lg border-2 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Doação */}
        <section className="py-12 px-2 mt-10 ">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-black text-center mb-6 mt-10">
              Contribua para nossos projetos
            </h2>
            <p className="text-lg text-center mb-8 text-black sm:w-[60%]">
              Sua doação nos ajuda a continuar promovendo educação, cultura e
              cidadania. Faça a diferença na vida de muitas pessoas!
            </p>
            <Image
              src="/imagem6.jpg"
              alt="Imagem7"
              width={328}
              height={228}
              className="sm:w-[40%] w-[80%] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

            
            <div className="flex flex-col items-center space-y-4 border p-6 rounded-[20] mt-6 ">
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className="p-4 w-full max-w-xs rounded-lg text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFB300]"
                placeholder="Seu nome"
              />
              <input
                type="email"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className="p-4 w-full max-w-xs rounded-lg text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFB300]"
                placeholder="Seu e-mail"
              />
              <input
                key={donationAmount}
                type="number"

                onChange={() => handleDonationChange(donationAmount)}
                className="p-4 w-full max-w-xs rounded-lg text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFB300]"
                placeholder="Valor"
              />
              <div className="flex space-x-4">
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleDonationChange(amount)}
                    className={`px-6 py-3 rounded-lg shadow-md text-lg ${
                      donationAmount === amount
                        ? "bg-[#E68A00] text-white"
                        : "bg-gray-200 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB300]`}
                  >
                    KZ {amount}
                  </button>
                ))}
              </div>
              <button
                onClick={handleDonate}
                className="mt-4 px-6 py-3 bg-[#FFB300] text-white rounded-lg shadow-md hover:bg-[#E68A00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB300]"
              >
                Doar KZ {donationAmount || "0"}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
