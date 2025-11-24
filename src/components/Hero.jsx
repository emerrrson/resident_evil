import React, { useState } from "react";
import "./Hero.css";

export default function Hero({ onEnter }) {
  const [showTransition, setShowTransition] = useState(false);

  const handleEnter = () => {
  // Áudio "Resident Evil"
  const voiceAudio = new Audio("/sounds/revoice.mp3");
  voiceAudio.volume = 1;

  // Áudio Save Room
  const saveRoomAudio = new Audio("/sounds/saveroom.mp3");
  saveRoomAudio.volume = 0.6;
  saveRoomAudio.loop = true;

  // Quando o primeiro terminar, iniciar Save Room
  voiceAudio.addEventListener("ended", () => {
    saveRoomAudio.play();
  });

  voiceAudio.play();
    


    setShowTransition(true);

    // Espera o efeito terminar (1.2s) e chama a parte Characters
    setTimeout(() => {
      onEnter(); // App.js vai rolar pro Characters
    }, 1200);

    // remove o overlay depois do fade
    setTimeout(() => {
        setShowTransition(false);
    }, 4000);
  };

  return (
    <>
      <section className="hero">
        {/* Partículas */}
        {[...Array(25)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}

        <div className="hero-content">
          <h1>RACCOON CITY</h1>
          <p>THE OUTBREAK BEGINS</p>
          <button className="enter-btn" onClick={handleEnter}>
            ENTER THE DARKNESS
          </button>
        </div>
      </section>

      {/* Tela de transição estilo Resident Evil */}
    {showTransition && <div className="re-transition"></div>}    </>
  );
}