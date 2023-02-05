"use client";
import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import logoImage from "../../assets/Images/panaverse-logo.webp";
import GitHubIcon from "../../assets/Images/github-logo.png";
import React from "react";
import Link from "next/link";
import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import DrawerComp from "../Drawer";
import "./styles.css";

const HeaderNavbar = () => {
  const [isLessThan925] = useMediaQuery("(max-width: 925px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <>
      <Flex paddingY={3} shadow={"rgba(0, 0, 0, 0.15) 0px 10px 20px -20px"}>
        <Image
          marginX={8}
          src={logoImage.src}
          alt="logo for panaverse"
          width="100px"
        />
        <HStack
          sx={{
            display: isLessThan925 ? "none" : "flex",
          }}
          marginX={16}
          spacing={8}
        >
          <Link className="links linksLineHeader" href="#">
            About
          </Link>
          <Link className="links linksLineHeader" href="#">
            Blog
          </Link>
          <Link className="links linksLineHeader" href="#">
            Community
          </Link>
          <Link className="links linksLineHeader" href="#">
            Web3.0
          </Link>
          <Menu>
            <MenuButton className="links linksLineHeader">More</MenuButton>
            <MenuList>
              <MenuItem>Useful youtube videos</MenuItem>
              <MenuItem>Free source and guide</MenuItem>
              <MenuItem>Knowledge based</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Spacer />
        <HStack marginX={8} spacing={8}>
          <Link href="https://github.com/panaverse">
            <Image
              alt="github link"
              cursor="pointer"
              src={GitHubIcon.src}
              width={isLessThan925 ? 9 : 10}
            />
          </Link>
          <Button
            sx={{
              display: isLessThan925 ? "none" : "flex",
            }}
            color="white"
            bgColor={"#00262b"}
            variant="solid"
            rightIcon={<ExternalLinkIcon />}
          >
            Apply Now
          </Button>
        </HStack>
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          sx={{
            display: isLessThan925 ? "flex" : "none",
            marginRight: 5,
          }}
          margin={"auto"}
          borderRadius={"50%"}
          aria-label="HamburgerIcon"
        >
          <HamburgerIcon />
        </IconButton>
      </Flex>
      <DrawerComp onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default HeaderNavbar;
////
