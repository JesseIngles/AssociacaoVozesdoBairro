import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, description, image, link } : any) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <Image
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
        width={400} 
        height={300}
        priority 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
        >
          Ver mais
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Plataforma de Streaming",
      description:
        "Uma solução robusta e de alto desempenho para streaming de vídeos e gerenciamento de assinaturas.",
      image: "/imagem5.jpg",
      link: "#",
    },
    {
      title: "Aplicativo de Serviços Empresariais",
      description:
        "Aplicativo desenvolvido com integração à plataforma MEC, oferecendo soluções empresariais rápidas e eficientes.",
      image: "/imagem5.jpg",
      link: "#",
    },
    {
      title: "Zima - Plataforma Comunitária",
      description:
        "Uma plataforma inovadora baseada no algoritmo do UTorrent para promover criadores de conteúdo angolanos.",
      image: "/imagem5.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <Header />  
      <section className="py-12 " id="projects">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Nossos Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
    
  );
};

export default Projects;
