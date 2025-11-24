import React, { useRef } from "react";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Requiem from "./components/Requiem";
import Navbar from "./components/Navbar";

export default function App() {
  const heroRef = useRef(null);
  const charRef = useRef(null);
  const reqRef = useRef(null);

  const goToHero =() => heroRef.current.scrollIntoView({ behavior: "smooth"});
  const goToCharacters = () => {charRef.current.scrollIntoView({ behavior: "smooth" });};
  const goToRequiem = () => reqRef.current.scrollIntoView({behavior: "smooth"})
  
  return (
    <>
      <Navbar 
        goToHero={goToHero}
        goToCharacters={goToCharacters}
        goToRequiem={goToRequiem}
      />

      <section ref={heroRef}>
        <Hero  onEnter={goToCharacters}/>
      </section>

      <section ref={charRef}>
        <Characters />
      </section>

      <section ref={reqRef}>
        <Requiem />
      </section>
    </>
  );
}