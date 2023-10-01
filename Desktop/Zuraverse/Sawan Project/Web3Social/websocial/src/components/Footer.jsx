import React from "react";
import "./Footer.css";
import {
  Heading,
  Button,
  Text,
  Link,
  Flex,
  Avatar,
  TextField,
  Separator,
} from "@radix-ui/themes";
import {
  ArrowRightIcon,
  TwitterLogoIcon,
  PaperPlaneIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

function Footer() {
  return (
    <div className="FooterMain">
      <div className="Question-Section">
        <div className="Question-Text">
          <Heading size="9" align="center">
            Still wondering how to <br />
            start?
          </Heading>
        </div>
        <div className="Question-Button">
          <Button color="purple" variant="soft" size="3">
            Request a Demo <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className="Last-Section">
        <div className="FooterSocial">
          <Heading size="7" align="center" color="purple">
            Web3Social
          </Heading>{" "}
          <Text size="1" align="left">
            {" "}
            Copyright © 2023
            <br />
            All rights reserved
          </Text>
          <Text size="3" align={"center"}>
            Socials
            <Separator my="3" size="4" />
            <Flex gap="3" align="center">
              <Flex gap="9" align="center" justify={"center"}>
                <Link href="https://twitter.com" target="_blank">
                  <Avatar
                    radius="full"
                    size="1"
                    fallback={<TwitterLogoIcon />}
                  />
                </Link>
              </Flex>{" "}
              <Separator orientation="vertical" />
              <Flex gap="9" align="center" justify={"center"}>
                <Link href="https://twitter.com" target="_blank">
                  <Avatar
                    radius="full"
                    size="1"
                    fallback={<DiscordLogoIcon />}
                  />
                </Link>
              </Flex>
              <Separator orientation="vertical" />
              <Flex gap="9" align="center" justify={"center"}>
                <Link href="https://twitter.com" target="_blank">
                  <Avatar
                    radius="full"
                    size="1"
                    fallback={<LinkedInLogoIcon />}
                  />
                </Link>
              </Flex>
              <Separator orientation="vertical" />
              <Flex gap="9" align="center" justify={"center"}>
                <Link href="https://twitter.com" target="_blank">
                  <Avatar
                    radius="full"
                    size="1"
                    fallback={<InstagramLogoIcon />}
                  />
                </Link>
              </Flex>
            </Flex>
          </Text>
        </div>
        <div className="CompanyDet">
          <Heading color="purple">Company</Heading>
          <Link>
            <Text size="2" color="gray">
              About us
            </Text>
          </Link>
          <Link>
            <Text size="2" color="gray">
              Blog
            </Text>
          </Link>{" "}
          <Link>
            <Text size="2" color="gray">
              Contact Us
            </Text>
          </Link>{" "}
          <Link>
            <Text size="2" color="gray">
              Pricing
            </Text>
          </Link>{" "}
          <Link>
            <Text size="2" color="gray">
              Testimonials
            </Text>
          </Link>
        </div>
        <div className="Support">
          {" "}
          <Heading color="purple">Support</Heading>
          <Link color="gray">
            <Text size="2" color="gray">
              Help center
            </Text>
          </Link>
          <Link>
            <Text size="2" color="gray">
              Terms of service
            </Text>
          </Link>
          <Link>
            <Text size="2" color="gray">
              Legal
            </Text>
          </Link>
          <Link>
            <Text size="2" color="gray">
              Privacy policy
            </Text>
          </Link>
          <Link>
            <Text size="2" color="gray">
              Status
            </Text>
          </Link>
        </div>
        <div className="Newsletter">
          <Heading color="purple">Subscribe to our Newsletter</Heading>
          <Flex>
            <TextField.Root>
              <TextField.Slot>
                <PaperPlaneIcon height="16" width="16" onClick={null} />
              </TextField.Slot>
              <TextField.Input placeholder="Your Email Address" />
            </TextField.Root>{" "}
          </Flex>
        </div>
      </div>
    </div>
  );
}

export default Footer;
