import React from "react";
import "./Stats.css";
import { Heading, Text, Grid, Box, Card, Flex, Inset } from "@radix-ui/themes";
import {
  GitHubLogoIcon,
  PersonIcon,
  IdCardIcon,
  HeartIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

function Stats() {
  return (
    <div className="StatsMain">
      <div className="TextWrapperStats">
        <Heading size={8}>
          Helping developers, business <br />
          <Text color="violet">reinvent itself</Text>
        </Heading>
        <Text size="3" as="span">
          We reached here with our hard work and dedication
        </Text>
      </div>
      <div className="LeftWrapper">
        <Grid columns="2" gap="7" width="auto">
          <Box height="9">
            <Card size="1" style={{ maxWidth: "300px" }}>
              <Flex>
                <Inset side="left" pr="current">
                  <Flex
                    align="center"
                    justify="center"
                    px="4"
                    style={{ background: "#be93e4", height: "100%" }}
                  >
                    <PersonIcon color="purple" height="40" width="40" />
                  </Flex>
                </Inset>

                <Box style={{ maxWidth: 350 }}>
                  <Text as="div" color="gray" mb="1" size="1">
                    Members
                  </Text>
                  <Text size="4" weight="bold" color="#402060">
                    100+{" "}
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box height="9">
            <Card size="1" style={{ maxWidth: "300px" }}>
              <Flex>
                <Inset side="left" pr="current">
                  <Flex
                    align="center"
                    justify="center"
                    px="4"
                    style={{ background: "#be93e4", height: "100%" }}
                  >
                    <IdCardIcon color="purple" height="40" width="40" />
                  </Flex>
                </Inset>

                <Box style={{ maxWidth: 350 }}>
                  <Text as="div" color="gray" mb="1" size="1">
                    Wallets
                  </Text>
                  <Text size="4" weight="bold" color="#402060">
                    100+{" "}
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box height="9">
            <Card size="1" style={{ maxWidth: "300px" }}>
              <Flex>
                <Inset side="left" pr="current">
                  <Flex
                    align="center"
                    justify="center"
                    px="4"
                    style={{ background: "#be93e4", height: "100%" }}
                  >
                    <ReaderIcon color="purple" height="40" width="40" />
                  </Flex>
                </Inset>

                <Box style={{ maxWidth: 350 }}>
                  <Text as="div" color="gray" mb="1" size="1">
                    Transactions
                  </Text>
                  <Text size="4" weight="bold" color="#402060">
                    100+{" "}
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box height="9">
            <Card size="1" style={{ maxWidth: "300px" }}>
              <Flex>
                <Inset side="left" pr="current">
                  <Flex
                    align="center"
                    justify="center"
                    px="4"
                    style={{ background: "#be93e4", height: "100%" }}
                  >
                    <HeartIcon color="purple" height="40" width="40" />
                  </Flex>
                </Inset>

                <Box style={{ maxWidth: 350 }}>
                  <Text as="div" color="gray" mb="1" size="1">
                    Events
                  </Text>
                  <Text size="4" weight="bold" color="#402060">
                    100+
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        </Grid>
      </div>
    </div>
  );
}

export default Stats;
