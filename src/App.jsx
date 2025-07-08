import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/PortFolio"; // 🔁 Corrected spelling
import Experience from "./components/Experience"; // 🔁 Corrected spelling
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
