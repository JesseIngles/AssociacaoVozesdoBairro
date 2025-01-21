import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

const BlogCard = ({ title, description, image, date, link } : any) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
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

const Blog = () => {
  const posts = [
    {
      title: "Introdução ao Edge Computing",
      description: "Explorando como o Edge Computing transforma aplicações modernas.",
      image: "https://via.placeholder.com/400x300",
      date: "20 de Janeiro de 2025",
      link: "#",
    },
    {
      title: "Como construir um Streaming de Alto Desempenho",
      description: "Dicas e tecnologias essenciais para plataformas de streaming.",
      image: "https://via.placeholder.com/400x300",
      date: "15 de Janeiro de 2025",
      link: "#",
    },
    {
      title: "Segurança em Aplicações Web",
      description: "Melhores práticas para proteger suas aplicações online.",
      image: "https://via.placeholder.com/400x300",
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
