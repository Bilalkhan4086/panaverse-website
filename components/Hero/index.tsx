"use client";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import heroImage from "../../assets/Images/heroimage.jpg";

const Hero = () => {
  return (
    <Flex
      sx={{
        backgroundImage: `linear-gradient(to right, rgba(10, 10, 10, .6), rgba(10, 10, 10, .6)), url(${heroImage.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90vh",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <VStack
        spacing={5}
        marginTop={["100px !important", "150px !important", "250px !important"]}
        margin="auto"
      >
        <Heading
          margin="auto"
          marginBottom={8}
          width={["70%", "80%", "90%"]}
          textAlign={["left", "left", "center"]}
          color={"white"}
          fontWeight={"medium"}
          fontSize={["4xl", "5xl", "5xl"]}
        >
          Panaverse
        </Heading>
        <Heading
          fontWeight={"light"}
          fontSize={["3xl", "4xl", "4xl"]}
          margin="auto"
          textAlign={["left", "left", "center"]}
          width={["70%", "80%", "90%"]}
          color={"white"}
        >
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </Heading>
        <Heading
          fontWeight={"light"}
          fontSize={["2xl", "3xl", "3xl"]}
          margin="auto"
          width={["70%", "80%", "90%"]}
          textAlign={["left", "left", "center"]}
          color={"white"}
        >
          Getting Ready for the Next Generation and Future of the Internet
        </Heading>
        <Heading
          fontSize={["2xl", "2xl", "2xl"]}
          fontWeight={"hairline"}
          margin="auto"
          width={["70%", "80%", "90%"]}
          textAlign={["left", "left", "center"]}
          color={"white"}
        >
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.
        </Heading>
      </VStack>
    </Flex>
  );
};

export default Hero;
