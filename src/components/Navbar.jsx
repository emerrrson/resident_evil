import React from "react";
import "./Navbar.css";

export default function Navbar ({ goToHero, goToCharacters, goToRequiem }) {
    return (
        <nav className="navbar">
        <ul>
        <li onClick={goToHero}> HOME </li>
        <li onClick={goToCharacters}> CHARACTERS</li>
        <li onClick={goToRequiem}> NEWS </li>
        </ul>
        </nav>
    );
}