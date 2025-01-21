import { motion } from "framer-motion";
import { CardIntro } from "./CardIntro";

export function IntroGuide() {
  return (
    <>
      <h1 className="text-[#FFB300] sm:w-[60%] w-[60%] items-center text-center text-[32px]">
        Juntos podemos transformar vidas através de projetos de educação,
        cultura, cidadania e solidariedade
      </h1>
      <div className="signal flex relative items-end pb-1 justify-center h-16 w-6 mt-5 mx-auto rounded-full bg-[#FFA000] border-[#17222F]">
        <button className="text-white svg_animated absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevrons-down size-5"
          >
            <path d="m7 6 5 5 5-5" />
            <path d="m7 13 5 5 5-5" />
          </svg>
        </button>
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.0, delay: 0.8 }}
        className="w-full pt-14 pr-7 pl-7"
        id="beneficios"
      >
        <header>
          <h2 className="text-[#c6d0d6] text-center retrato-tablet:text-3xl text-2xl">
            Associação Vozes do Bairro{" "}
          </h2>
        </header>

        {/* Cards Responsivos */}
        <div className="max-w-6xl mt-10 w-full m-auto flex flex-wrap justify-center gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3">
          <CardIntro
            icon_path="/icons/marca.svg"
            title="Quem Somos"
            fromGradient="#FFA000"
            text="A Associação Vozes do Bairro é uma organização comunitária que atua em prol do
                        desenvolvimento social e humano nas comunidades de Angola. Nosso foco está em
                        promover a inclusão, fortalecer as capacidades locais e criar oportunidades que gerem
                        impacto positivo e sustentável."
          />
          <CardIntro
            icon_path="/icons/hand.svg"
            title="Missão"
            fromGradient="#6A4E23"
            text="Transformar vidas através de projetos de educação, cultura, cidadania e solidariedade,
                        conectando recursos às necessidades reais da comunidade"
          />
          <CardIntro
            icon_path="/icons/network.svg"
            title="Visão"
            fromGradient="#6A4E23"
            text="Ser referência em transformação social, promovendo comunidades fortes, autônomas e
                        resilientes."
          />
        </div>
      </motion.section>
    </>
  );
}
