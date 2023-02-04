"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import aiImage from "../../assets/Images/aiimage.png";
import { LinkIcon } from "@chakra-ui/icons";
import Link from "next/link";
import "./styles.css";

const Hero3 = ({ marginTop }: any) => {
  return (
    <Grid
      marginTop={marginTop}
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
      bgColor={"#00262b"}
      padding={"60px 20px"}
    >
      <GridItem>
        <Box maxW={["100%", "100%", "100%", "100%", "750px"]} color="white">
          <Heading fontWeight={"medium"} fontSize={"3xl"}>
            The Outcome for Participants of the Program
          </Heading>
          <Text lineHeight={8} marginY={12}>
            The graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) that are marketed
            globally by the Panaverse DAO and, if they like, will also be able
            to start off by offering services at a rate of $50 per hour ($96,000
            per year). This would give Pakistani professionals and students a
            fantastic opportunity to better their financial situation while also
            giving the economy a much-needed boost by expanding software
            exports.
          </Text>
        </Box>
        <Box
          marginX={["auto", "auto", "auto", "auto", 20]}
          marginTop={[5, 5, 5, 5, 40]}
          color="white"
        >
          <Image src={aiImage.src} margin="auto" alt="ai" width="400px" />
        </Box>
      </GridItem>

      <GridItem>
        <Flex
          justifyContent={[
            "center",
            "center",
            "center",
            "space-between",
            "center",
          ]}
          direction={["column", "column", "column", "row", "column"]}
        >
          <Box
            margin={"60px 20px"}
            maxW={["auto", "auto", "auto", "450px", "500px"]}
            color="white"
          >
            <Heading fontWeight={"medium"} fontSize={"3xl"}>
              Important Links
            </Heading>
            <Text marginTop={12}>
              <List spacing={3}>
                <ListItem className={"linksHero3 linksLine"}>
                  <ListIcon as={LinkIcon} color="#fff" />
                  <Link href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms">
                    Top 5 ‘Metaverse’ jobs that will rule the future of tech
                    industry
                  </Link>
                </ListItem>
                <ListItem className={"linksHero3 linksLine"}>
                  <ListIcon as={LinkIcon} color="#fff" />
                  <Link href="https://web3.career/web3-salaries/blockchain-developer">
                    Blockchain Developer Salary - Jun 2022
                  </Link>
                </ListItem>
                <ListItem className={"linksHero3 linksLine"}>
                  <ListIcon as={LinkIcon} color="#fff" />
                  <Link href="https://thedefiant.io/web3-soaring-salaries">
                    Web3 Salaries Soar to $750,000 for Rank-and-File Devs
                  </Link>
                </ListItem>
                <ListItem className={"linksHero3 linksLine"}>
                  <ListIcon as={LinkIcon} color="#fff" />
                  <Link href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022">
                    The Metaverse, Blockchain Gaming, and NFTs: Navigating the
                    Internet’s Uncharted Waters
                  </Link>
                </ListItem>
                <ListItem className={"linksHero3 linksLine"}>
                  <ListIcon as={LinkIcon} color="#fff" />
                  <Link href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/">
                    How To Become Metaverse Developer: Scope, Skills, and Salary
                  </Link>
                </ListItem>
              </List>
            </Text>
          </Box>
          <Box
            marginLeft={["0px", "0px", "0px", "-50px", "-50px"]}
            maxW={["auto", "auto", "auto", "500px", "800px"]}
            color="white"
          >
            <Heading fontWeight={"medium"} fontSize={"3xl"}>
              Core Courses (Common in All Specializations)
            </Heading>
            <Text marginY={12}>
              Every participant of the program will start by completing the
              following two core courses:
            </Text>
            <List spacing={3}>
              <ListItem className={"linksHero3 linksLine"}>
                <ListIcon as={LinkIcon} color="#fff" />
                <Link href="https://github.com/panaverse/panaverse.github.io#quarter-i-core">
                  Quarter I (Core) CS-101: Object-Oriented Programming using
                  TypeScript
                </Link>
              </ListItem>
              <ListItem className={"linksHero3 linksLine"}>
                <ListIcon as={LinkIcon} color="#fff" />
                <Link href="https://github.com/panaverse/panaverse.github.io#quarter-ii-core">
                  Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0
                  Serverless Cloud Cloud Apps and APIs using Next.js 13 and
                  Cloud Development Kit (CDK) for Terraform
                </Link>
              </ListItem>
            </List>
            <Text marginY={6}>
              Specialized Tracks After completing the first two quarters the
              participants will select one or more specializations consisting of
              two courses each
            </Text>
            <Button
              variant="outline"
              sx={{
                color: "white",
                "&:hover": { color: "#00262b", bgColor: "white" },
              }}
              colorScheme={"#00262b"}
              width={"250px"}
              display={["flex", "block"]}
              margin={["auto", "0px"]}
            >
              More Info
            </Button>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Hero3;
