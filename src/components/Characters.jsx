import React, { useState } from "react";
import "./Characters.css";
import LeonImg from "../assets/images/leons.jpg";
import Jillv from "../assets/images/jillv.jpg";
import Chrisr from "../assets/images/chrisr.jpg";

export default function Characters() {
  const characters = [
    {
      name: "Leon S. Kennedy",
      description:
        "Um policial novato que ficou preso no caos do surto biológico em Raccoon City. Determinado, focado e sempre pronto para o impossível.",
      image: LeonImg,
    },
    {
      name: "Jill Valentine",
      description:
        "Ex-membro da S.T.A.R.S., especialista em táticas de sobrevivência. Uma das únicas capazes de enfrentar a Umbrella de frente.",
      image: Jillv,
    },
    {
      name: "Chris Redfield",
      description:
        "Veterano de combate, membro da BSAA e símbolo de resistência contra ameaças biológicas. Força absoluta.",
      image: Chrisr,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextCharacter = () => {
    if (index < characters.length - 1) setIndex(index + 1);
  };

  const previousCharacter = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="characters-container" id="characters">
      {/* Partículas de fundo — gerenciadas por inline styles para posições aleatórias */}
      {[...Array(25)].map((_, i) => {
        const top = (i * 7) % 85 + 5; // 5%..89%
        const left = (i * 13) % 85 + 5;
        const dur = 8 + (i % 6); // 8s..13s
        return (
          <div
            key={i}
            className="particle-char"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDuration: `${dur}s`,
            }}
          />
        );
      })}

      <div className="character-card fade-animation">
        <img
          src={characters[index].image}
          alt={characters[index].name}
          className="character-image"
        />

        <div className="character-info">
          <h2>{characters[index].name}</h2>
          <p>{characters[index].description}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="char-buttons">
        <button onClick={previousCharacter} disabled={index === 0}>
          ◀
        </button>
        <button
          onClick={nextCharacter}
          disabled={index === characters.length - 1}
        >
          ▶
        </button>
      </div>
    </div>
  );
}