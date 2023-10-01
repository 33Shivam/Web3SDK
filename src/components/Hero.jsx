import React from "react";
import "./Hero.css";
import bgVideo from "../assets/bgvideo.mp4";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Heading } from "@radix-ui/themes";

function Hero() {
  return (
    <div className="hero">
      <div className="HeroContentWrapper">
        <Heading size="9" align={"center"}>
          Web3 wallets are a thing of <br />
          the past
        </Heading>
        <div className="HeroSubText">
          Want to ride the Web3 wave without worrying about wallets?
        </div>
        <button className="SignUpButton">
          Get Started <ArrowRightIcon />
        </button>
      </div>
      <div className="VideoContainer">
        <video src={bgVideo} autoPlay muted loop className="Image"></video>
      </div>
    </div>
  );
}

export default Hero;
