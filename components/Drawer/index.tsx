"use client";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import "./styles.css";

const DrawerComp = ({ isOpen, onClose, btnRef }: any) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader color="#00262b">Link for pages</DrawerHeader>

        <DrawerBody>
          <VStack marginY={16} align={"flex-start"} marginX={3} spacing={8}>
            <Link className="linksInDrawer linksLineDrawer" href="/about">
              About
            </Link>
            <Link className="linksInDrawer linksLineDrawer" href="/blog">
              Blog
            </Link>
            <Link className="linksInDrawer linksLineDrawer" href="/community">
              Community
            </Link>
            <Link className="linksInDrawer linksLineDrawer" href="/web3">
              Web3.0
            </Link>
            <Menu>
              <MenuButton className="linksInDrawer linksLineDrawer">
                More
              </MenuButton>
              <MenuList>
                <MenuItem>Useful youtube videos</MenuItem>
                <MenuItem>Free source and guide</MenuItem>
                <MenuItem>Knowledge based</MenuItem>
              </MenuList>
            </Menu>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <Button
            width={"100%"}
            color="white"
            bgColor="#00262b"
            variant={"solid"}
            rightIcon={<ExternalLinkIcon />}
          >
            Apply Now
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComp;
