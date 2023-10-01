import React from "react";
import "./Management.css";
import { Card, Flex, Inset, Text, Box, Heading } from "@radix-ui/themes";
import {
  GitHubLogoIcon,
  RocketIcon,
  LockClosedIcon,
  HeartIcon,
} from "@radix-ui/react-icons";

function Management() {
  return (
    <>
      <div className="Container">
        <div className="TextWrapper">
          <Heading size="8" align={"center"}>
            Manage your entire community <br />
            in a single system{" "}
          </Heading>
          <div className="SubText">
            <Text as="p" align={"center"}>
              What can Web3Social can be suitable for?
            </Text>
          </div>
        </div>

        <div className="CardWrapper">
          <div className="Card">
            <Card size="1">
              <Flex>
                <Inset side="left" mr="5">
                  <Flex
                    align="center"
                    justify="center"
                    px="7"
                    style={{
                      background: "hsl(252, 85.1%, 93.0%)",
                      height: "100%",
                    }}
                  >
                    <RocketIcon color="purple" height="40" width="40" />
                  </Flex>
                </Inset>

                <Box style={{ maxWidth: 200 }}>
                  <Text as="div" color="gray" mb="1" size="5">
                    Transactions{" "}
                  </Text>
                  <Text size="1">
                    A website could use wallet abstraction to allow users to
                    purchase products or services without having to leave the
                    website. No need to worry about wallets ever!{" "}
                  </Text>
                </Box>
              </Flex>
            </Card>
          </div>
          <div className="Card">
            {" "}
            <Card size="1">
              <Flex>
                <Inset side="left" mr="5">
                  <Flex
                    align="center"
                    justify="center"
                    px="7"
                    style={{
                      background: "hsl(252, 85.1%, 93.0%)",
                      height: "100%",
                    }}
                  >
                    <LockClosedIcon color="purple" height="40" width="40" />
                  </Flex>
                </Inset>

                <Box style={{ maxWidth: 200 }}>
                  <Text as="div" color="gray" mb="1" size="5">
                    Wallet Abstraction{" "}
                  </Text>
                  <Text size="1">
                    Events, such as minting and auctioning, can be managed
                    through Thirdweb by creating and managing event contracts.
                    This allows you to track the progress of events and manage
                    the participants.
                  </Text>
                </Box>
              </Flex>
            </Card>
          </div>
          <div className="Card">
            {" "}
            <Card size="1">
              <Flex>
                <Inset side="left" mr="5">
                  <Flex
                    align="center"
                    justify="center"
                    px="7"
                    style={{
                      background: "hsl(252, 85.1%, 93.0%)",
                      height: "100%",
                    }}
                  >
                    <HeartIcon color="purple" height="40" width="40" />
                  </Flex>
                </Inset>

                <Box style={{ maxWidth: 200 }}>
                  <Text as="div" color="gray" mb="1" size="5">
                    Events{" "}
                  </Text>
                  <Text size="1">
                    Transactions, such as purchases and sales, can be managed
                    through creating and managing transaction logs. This allows
                    you to track the flow of money and assets. Create you
                    community today!
                  </Text>
                </Box>
              </Flex>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Management;
