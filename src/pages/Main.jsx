import React from "react";
import { Features } from "../components/Features";
import Footer from "../components/Footer";
import GlobalMap from "../components/Global";
import Hero from "../components/Hero";

//Components
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import Testimonials from "../components/Testimonials";

const Main = () => {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <Features />
      <Plans />
      <GlobalMap />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Main;
