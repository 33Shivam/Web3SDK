import React from "react";
import "./Learn.css";
import { Heading, Text, Grid, Box, Card, Flex, Inset } from "@radix-ui/themes";

function Learn() {
  return (
    <div className="Learn-Container">
      <div className="Image-Container">
        <img src="/learnicon.svg" alt="A house in a forest" />
      </div>
      <div className="Text-Container">
        <Heading size={8}>
          Simplifying Web3 Wallet <br />
          Interaction
        </Heading>
        <Text size="1" as="p" style={{ maxWidth: "80%" }}>
          Welcome to the world of Web3 wallet abstraction, where complexity
          meets simplicity. In the fast-evolving landscape of blockchain and
          decentralized applications, managing multiple wallets and interacting
          with various blockchain networks can be a daunting task. That's where
          wallet abstraction steps in. Our platform is dedicated to simplifying
          your Web3 experience by offering a seamless, user-friendly solution
          for wallet management. With wallet abstraction, you can effortlessly
          connect and interact with different blockchain networks using a
          unified interface. Say goodbye to the hassle of juggling multiple
          wallets and navigating through intricate processes. Explore the power
          of wallet abstraction on our platform and unlock the full potential of
          the decentralized web with ease."{" "}
        </Text>
      </div>
    </div>
  );
}

export default Learn;
