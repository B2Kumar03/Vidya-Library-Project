import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Body = () => {
  return (
    <HStack>
      <Box
        height={200}
        w={"80%"}
        m="auto"
        mt={40}
        // border={"1px solid black"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box w={"45%"}>
          <h1>Introduction :</h1>
          <Text fontSize={20} ml={20} className="roboto-regular" mt={10}>
            At VIDYA LIBRARY, we believe that access to <br /> a conducive
            learning environment is essential for <br /> academic success. Our private
            library is designed <br /> to be a haven for students seeking a quiet,
            focuse <br /> space to enhance their studies and cultivate a <br /> passion for
            learning.
          </Text>
        </Box>
        <Box w={"45%"}>
          
        <Box h={"100%"}><Image src="https://masai-resume-builder-user-data.s3.ap-south-1.amazonaws.com/test/profile-image/656e0037436c6b8b69f53b18/ezdOvf7joJE2zzy3QeaYKy70QnAr7K.jpg" h={"100%"} borderRadius={5} /></Box>
        <h4>Library incharge</h4>
        </Box>
      </Box>
    </HStack>
  );
};

export default Body;
