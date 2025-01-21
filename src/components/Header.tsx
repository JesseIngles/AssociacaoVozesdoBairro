'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  // Estado para controlar o menu hambúrguer
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" top-0 left-0 right-0 z-20 md:bg-transparent bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/vozesdebairro.png" alt="Vozes de Bairro Logo" width={180} height={80} />
        </Link>

        {/* Menu Hambúrguer para Mobile e Tablet */}
        <button 
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Menu de Navegação Desktop */}
        <nav className={`hidden md:flex gap-8`}>
          <Link href="/" className="text-[#654321] hover:underline decoration-2 text-[#6A4E23]">Quem Somos</Link>
          <Link href="/projetos" className="text-[#654321] hover:underline decoration-2 text-[#6A4E23]">Projetos</Link>
          <Link href="/blog" className="text-[#654321] hover:underline decoration-2 text-[#6A4E23]">Blog</Link>
          <Link href="/contacto" className="text-[#654321] hover:underline decoration-2 text-[#6A4E23]">Contato</Link>
        </nav>

        {/* Botão de Doação visível em Desktop */}
        <Link href="#join" className="hidden md:inline-block border-2 bg-[#FFB300] text-white py-2 px-4 rounded-full hover:bg-[#FFA000]">
          Faça uma doação
        </Link>
      </div>

      {/* Menu de Navegação Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#111D25] p-4">
          <Link href="/" className="block text-white hover:text-blue-400 py-2">Quem Somos</Link>
          <Link href="/projetos" className="block text-white hover:text-blue-400 py-2">Projetos</Link>
          <Link href="/blog" className="block text-white hover:text-blue-400 py-2">Blog</Link>
          <Link href="/contacto" className="block text-white hover:text-blue-400 py-2">Contato</Link>
          {
          /*<Link href="#join" className="block text-white bg-[#FFB300] py-2 mt-4 border-2 rounded-full hover:bg-[#FFA000]">
            Faça uma doação
          </Link>*/
          }
        </div>
      )}
    </header>
  );
}
