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
            Resident Evil: Requiem marks the next chapter of the franchise, delivering an even darker atmosphere, 
            more aggressive mutant creatures, and a storyline that promises to redefine the future of the series. 
            Powered by an enhanced new graphics engine, the game delivers hyper-realistic environments, cinematic 
            storytelling, and relentless survival mechanics.
            </p>

            <p>
              Prepare yourself to explore quarantine zones, face new types of bio-weapons, and uncover the final 
              secrets behind the virus that changed the world.
            </p>

            <h3 className="release-date">
              RELEASE: 27 • FEBRUARY • 2026
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}