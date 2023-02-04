"use client";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import brain from "../../assets/Images/brain.webp";
const DataForHero4 = [
  {
    title: "Enabling transformation",
    description:
      "Your learning experience at Panaverse is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key principles.",
  },
  {
    title: "Experience",
    description:
      "Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.",
  },
  {
    title: "Practice",
    description:
      "Demonstrating your knowledge is a critical part of learning. edX courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.",
  },
  {
    title: "Apply",
    description:
      "Learning on Panaverse transforms how you think and what you can do, and translates directly into the real world—immediately apply your new capabilities in the context of your job.",
  },
];

const Hero4 = () => {
  return (
    <Flex
      marginY={20}
      direction={["column", "column", "column", "column", "row"]}
      justifyContent={["center", "center", "center", "center", "space-around"]}
      align={"center"}
    >
      <Box maxW={700}>
        {DataForHero4.map((data) => {
          return (
            <Box mx={8}>
              <Heading marginY={4}>{data.title}</Heading>
              <Text marginY={4}>{data.description}</Text>
            </Box>
          );
        })}
      </Box>
      <Box>
        <Image src={brain.src} alt="brain" width="600px" />
      </Box>
    </Flex>
  );
};

export default Hero4;
