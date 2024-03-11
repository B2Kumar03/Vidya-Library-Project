import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import {
  Form,
  Link,
  Navigate,
  Link as ReactRouterLink,
  useNavigate,
} from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import image from '../assets/image.png'

const Login = () => {
  

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={15}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} border="1px solid black" p={10} mt={10}>
        <Image src={image} />
        <Text textAlign={"center"} className="roboto-bold" fontSize={20}>
          User Login
        </Text>
        
        <br />
        <br />
        <FormControl>
          <label className="roboto-bold" fontSize={10}>
            Email
          </label>
          <br />

          <InputGroup size="md">
            <Input  pr="4.5rem"
              type="email"
              border="1px solid black"
             />
              
          </InputGroup>
          <br /><br />
          <label className="roboto-bold" fontSize={10}>
            Password
          </label>
          <br />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={true ? "text" : "password"}
              border="1px solid black"
             
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" bg="white">
                {true ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <br />
          <br />
        
          <Input
            w={40}
            mt={10}
            type="submit"
            value="Login"
            bg="#004F9A"
            borderRadius={20}
            color={"white"}
            cursor={"pointer"}
            
          />
          
          <Input
            w={40}
            type="submit"
            value="Create account"
            bg="white"
            borderRadius={20}
            ml={1}
            color={"black"}
            cursor={"pointer"}
            
          />


          <br />
          <br />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
