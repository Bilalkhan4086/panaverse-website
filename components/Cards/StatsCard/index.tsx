"use client";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const StatsCard = ({ textColor, image, stats, title, cardColor }: any) => {
  return (
    <VStack
      spacing={3}
      sx={{
        bgColor: cardColor,
        width: "230px",
        height: "230px",
        padding: "20px",
        margin: "auto",
        color: textColor,
        borderRadius: "20px",
      }}
    >
      <Image marginX="auto" marginY={4} alt="card" width="60px" src={image} />
      <Heading textAlign={"center"}>{stats}</Heading>
      <Text textAlign={"center"}>{title}</Text>
    </VStack>
  );
};

export default StatsCard;
