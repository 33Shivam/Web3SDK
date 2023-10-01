import React from "react";
import { Flex, Avatar, Text, Link } from "@radix-ui/themes";
import "./Companies.css";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function Companies() {
  return (
    <div className="Company-container">
      <div className="Comapany-icons">
        <Flex gap="9" align="center" justify={"center"}>
          <Avatar
            radius="full"
            size="5"
            src="https://altcoinsbox.com/wp-content/uploads/2023/03/matic-logo-350x350.webp"
            fallback="S"
          />
          <Avatar
            radius="full"
            size="5"
            src="https://altcoinsbox.com/wp-content/uploads/2023/03/apecoin-logo-350x350.webp"
            fallback="S"
          />
          <Avatar
            radius="full"
            size="5"
            src="https://altcoinsbox.com/wp-content/uploads/2023/03/frontier-logo-350x350.webp"
            fallback="S"
          />
          <Avatar
            radius="full"
            size="5"
            src="https://altcoinsbox.com/wp-content/uploads/2023/03/metamask-logo-350x350.webp"
            fallback="S"
          />
          <Avatar
            radius="full"
            size="5"
            src="https://altcoinsbox.com/wp-content/uploads/2023/01/huobi-logo-350x350.webp"
            fallback="S"
          />
          <Avatar
            radius="full"
            size="5"
            src="https://altcoinsbox.com/wp-content/uploads/2023/03/probit-global-logo-265x300.webp"
            fallback="S"
          />{" "}
        </Flex>
      </div>
      <div className="Sub-Text-Company">
        <Link href="https://google.com" target="_blank" weight="medium">
          <Text color="purple">
            Meet The Companies <ArrowRightIcon />{" "}
          </Text>
        </Link>
      </div>
    </div>
  );
}

export default Companies;
