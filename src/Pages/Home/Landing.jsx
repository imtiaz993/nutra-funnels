import React from "react";
import Popup from "./Components/Popup";
import Hero from "./Components/Hero";
import SixDay from "./Components/SixDay";
import FiveSteps from "./Components/FiveSteps";
import Features from "./Components/Features";
import Complementary from "./Components/Complementary";
import Accelerator from "./Components/Accelerator";
import Failed from "./Components/Failed";
import Replace from "./Components/Replace";
import Interested from "./Components/Interested";
import NoisyMarketers from "./Components/NoisyMarketers";
import Progress from "./Components/Progress";
import JumpInto from "./Components/JumpInto";
import Footer from "./Components/Footer";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <Popup />
      <Hero />
      <SixDay />
      <FiveSteps />
      <Features />
      <Complementary />
      <Accelerator />
      <Failed />
      <Replace />
      <Interested />
      <NoisyMarketers />
      <Progress />
      <JumpInto />
      <Footer />
    </div>
  );
};

export default Landing;
