import React from "react";
import "./Hero.css";
import HeroText from "./components/HeroText";
import HeroImage from "./components/HeroImage";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <HeroText />
        <HeroImage />
      </div>
    </>
  );
}
