"use client";
import { ChakraProvider, theme } from "@chakra-ui/react";

export const Provider = ({ children }: any) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
