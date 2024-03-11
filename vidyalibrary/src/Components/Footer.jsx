import { Box, HStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack>
      <Box
        w={"100%"}
        border={"1px solid black"}
        margin={"auto"}
        mt={100}
        h={150}
        bg={"#011627"}
        color={"white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box>Email :vidyalibraryps2022@gmail.com</Box>
        <Box>Phone no:9097821516,9534400668</Box>
        <Box>
          Address :1St Floor in Front of mahavir Sthan ,Urdu Bazar Chowk
          ,Bhagalpur-812002
        </Box>
      </Box>
    </HStack>
  );
};

export default Footer;
