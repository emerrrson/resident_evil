import React, { useState } from "react";
import "./Requiem.css";
import RequiemCover from "../assets/images/requiem.jpg";

export default function Requiem() {
  return (
    <section className="requiem-section">
     {[...Array(25)].map((_, i) => (
     <div key={i} className="particle"></div>
     ))}
 
      <div className="requiem-container">

        <h2 className="requiem-title">RESIDENT EVIL: REQUIEM</h2>

        <div className="requiem-content">
        
          <img
            src={RequiemCover}
            alt="Resident Evil Requiem"
            className="requiem-cover"
          />

        
          <div className="requiem-info">
            <p>
              Resident Evil: Requiem marca o próximo capítulo da franquia,
              trazendo uma atmosfera ainda mais sombria, criaturas mutantes mais
              agressivas e um enredo que promete redefinir o futuro da série.
              Com a nova engine gráfica aprimorada, o jogo entrega ambientes
              hiperrealistas, narrativa cinematográfica e mecânicas de
              sobrevivência implacáveis.
            </p>

            <p>
              Prepare-se para explorar zonas de quarentena, encarar novos tipos
              de bio-armas e descobrir os segredos finais por trás do vírus que
              mudou o mundo.
            </p>

            <h3 className="release-date">
              LANÇAMENTO: 27 • FEVEREIRO • 2026
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}