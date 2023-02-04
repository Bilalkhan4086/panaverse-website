"use client";
import { Box, Text, Heading, GridItem, Grid } from "@chakra-ui/react";
import React from "react";
import StatsCard from "../Cards/StatsCard";
import teacher from "../../assets/Images/teacher.webp";
import studentIcon from "../../assets/Images/studentIcon.png";
import classes from "../../assets/Images/classes.webp";

const dataForStatsCard = [
  {
    textColor: "#f9f9f9",
    image: studentIcon.src,
    stats: "5000",
    title: "Enrolled Students",
    cardColor: "#e56262",
  },
  {
    textColor: "#f9f9f9",
    image: classes.src,
    stats: "100+",
    title: "Class Completed",
    cardColor: "#60cc61",
  },
  {
    textColor: "#f9f9f9",
    image: studentIcon.src,
    stats: "3000",
    title: "Graduated Students",
    cardColor: "#607bcc",
  },
  {
    textColor: "#f9f9f9",
    image: teacher.src,
    stats: "800",
    title: "Skilled Instructors",
    cardColor: "#cc60c5",
  },
];

const Hero2 = () => {
  return (
    <Box color="#00262b" marginY={12}>
      <Heading marginY={12} textAlign={"center"} fontSize={"3xl"}>
        We Are Proud
      </Heading>
      <Text marginY={8} marginX={4} textAlign={"center"}>
        You don&apos;t have to struggle alone, you&apos;ve got our assistance
        and help.
      </Text>
      <Grid
        h="200px"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={3}
        sx={{ marginBottom: 100 }}
      >
        {dataForStatsCard.map((cardData, i) => (
          <GridItem key={1}>
            <StatsCard
              title={cardData.title}
              cardColor={cardData.cardColor}
              image={cardData.image}
              stats={cardData.stats}
              textColor={cardData.textColor}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Hero2;
