import React from "react";
import "./styles.css";
import Header from "./layouts/01_Header/Header";
import Hero from "./layouts/02_Hero/Hero";
import Products from "./layouts/03_Products/Products";
import Socials from "./layouts/04_Socials/Socials";
import Footer from "./layouts/05_Footer/Footer";
import MadeWithLove from "./layouts/06_MadeWithLove/MadeWithLove";

export default function App() {
  const [count, setCount] = React.useState(1);

  function addToCart() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <Header count={count} />
      <Hero />
      <Products addToCart={addToCart} />
      <Socials />
      <Footer />
      <MadeWithLove />
    </>
  );
}
