"use client";
import { Box, Divider, Flex, List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import "./styles.css";

const footerData = [
  {
    heading: "Programs",
    linkText: ["Overview", "Features", "Tutorials", "Pricing", "Releases"],
  },
  {
    heading: "Company",
    linkText: ["About Us", "Press", "Careers", "Contact Us", "Partners"],
  },
  {
    heading: "Informational Links",
    linkText: [
      "Admission Website",
      "Facebook Group",
      "YouTube Channel",
      "Twitter",
      "Github Repos",
    ],
  },
  {
    heading: "Follow Us",
    linkText: ["Facebook", "Twitter", "Discord", "Instagram", "LinkedIn"],
  },
];

const Footer = () => {
  return (
    <Box>
      <Flex
        padding={["40px 16px", "48px 16px", "64px 64px"]}
        justifyContent={"space-around"}
      >
        {footerData.map((data, i) => (
          <Box
            key={i}
            display={i % 2 ? ["none", "unset"] : "unset"}
            mx={4}
            my={2}
          >
            <Text my={2} fontSize={["xl"]}>
              {data.heading}
            </Text>
            <List
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              margin={"auto"}
            >
              {data.linkText.map((text, _i) => {
                return (
                  <ListItem key={_i} marginY={1}>
                    <Link className="linksFooter linksLine" href="#">
                      {text}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        ))}
      </Flex>
      <Divider />
      <Text py={4} align={"center"}>
        © 2023 Powered By{" "}
        <Link
          className="linksFooter linksLine"
          href={"https://github.com/Bilalkhan4086"}
        >
          Muhammad Bilal
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
