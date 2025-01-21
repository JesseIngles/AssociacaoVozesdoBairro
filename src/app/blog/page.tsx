import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, date, link }) => {
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
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
        >
          Leia mais
        </a>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const posts: BlogCardProps[] = [
    {
      title: "Introdução ao Edge Computing",
      description: "Explorando como o Edge Computing transforma aplicações modernas.",
      image: "/imagem5.jpg",
      date: "20 de Janeiro de 2025",
      link: "#",
    },
    {
      title: "Como construir um Streaming de Alto Desempenho",
      description: "Dicas e tecnologias essenciais para plataformas de streaming.",
      image: "/imagem5.jpg",
      date: "15 de Janeiro de 2025",
      link: "#",
    },
    {
      title: "Segurança em Aplicações Web",
      description: "Melhores práticas para proteger suas aplicações online.",
      image: "/imagem5.jpg",
      date: "10 de Janeiro de 2025",
      link: "#",
    },
  ];

  return (
    <>
      <Header />
      <section className="py-12" id="blog">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                description={post.description}
                image={post.image}
                date={post.date}
                link={post.link}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
