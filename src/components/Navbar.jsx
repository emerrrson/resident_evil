import React from "react";
import "./Navbar.css";

export default function Navbar ({ goToHero, goToCharacters, goToRequiem }) {
    return (
        <nav className="navbar">
        <ul>
        <li onClick={goToHero}>HERÓIS </li>
        <li onClick={goToCharacters}> PERSONAGENS</li>
        <li onClick={goToRequiem}> NOVIDADES</li>
        </ul>
        </nav>
    );
}