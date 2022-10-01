import React from "react";
import "./Footer.css";
import CompanyInfo from "./components/CompanyInfo";
import Legal from "./components/Legal";
import Features from "./components/Features";
import Resources from "./components/Resources";
import GetInTouch from "./components/GetInTouch";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <CompanyInfo />
        <Legal />
        <Features />
        <Resources />
        <GetInTouch />
      </div>
    </>
  );
}
