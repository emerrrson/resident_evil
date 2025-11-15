import React, { useRef } from "react";
import Hero from "./components/Hero";
import Characters from "./components/Characters";

export default function App() {
  const charRef = useRef(null);

  const goToCharacters = () => {
    charRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero onEnter={goToCharacters} />

      <section ref={charRef}>
        <Characters />
      </section>
    </>
  );
}
