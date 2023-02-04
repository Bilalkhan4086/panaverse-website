"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Hero5 = () => {
  return (
    <Box color={"white"} bgColor={"#00262b"} padding={["32px 16px", 16]}>
      <Heading marginBottom={4}>
        <span style={{ color: "aqua" }}>More opportunities</span> for you to
        learn
      </Heading>
      <Text fontSize={"1xl"}>
        We&apos;ve added onsite and online learning opportunities to create one
        of the world&apos;s most comprehensive free-to-degree online learning
        platform.
      </Text>
    </Box>
  );
};

export default Hero5;
