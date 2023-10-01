import "./App.css";
import React from "react";
import Homepage from "./components/Homepage";
import Hero from "./components/Hero";
import Management from "./components/Management";
import Stats from "./components/Stats";
import Learn from "./components/Learn";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="MainWrapper">
      <Homepage></Homepage>
      <Hero></Hero>
      <Management></Management>
      <Stats></Stats>
      <Learn></Learn>
      <Companies></Companies>
      <Footer></Footer>
    </div>
  );
}

export default App;
