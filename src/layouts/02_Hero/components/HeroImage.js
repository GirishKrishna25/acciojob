import React from "react";
import heroImage from "../resources/heroImage.png";

export default function HeroImage() {
  return (
    <>
      <div className="img-container">
        <img
          src={heroImage}
          alt="a mid-shot of an excited, happy young woman"
        />
      </div>
    </>
  );
}
