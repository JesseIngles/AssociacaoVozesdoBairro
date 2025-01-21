import { ICard } from "@/interfaces/ICard";
import Image from "next/image";
import React from "react";

export const CardIntro: React.FC<ICard> = ({
  icon_path,
  title,
  text,
  fromGradient,
}) => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${fromGradient}, transparent)`,
      }}
      className="rounded-t-3xl p-5"
    >
      <header>
        <Image
          src={icon_path}
          alt="icone_demonstracao"
          width={40}
          height={40}
        />
      </header>
      <div className="pt-10">
        <h3 className="text-xl text-white">{title}</h3>
        <p className="pt-4 text-[15px] text-white">{text}</p>
      </div>
    </div>
  );
};
