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
  const {setAuth}=useContext(AuthContext)



  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={15}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} border="1px solid black" p={10} mt={200}>
        <Image src={image} w={40}/>
        <Text textAlign={"center"} className="roboto-bold" fontSize={20}>
          Admin login
        </Text>
        
        <br />
        <br />
        <FormControl>
          <label className="roboto-bold" fontSize={10}>
            Enter Id(eg:-#234w2):
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
            Enter code :
          </label>
          <br />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={true ? "text" : "password"}
              border="1px solid black"
             
            />
            
          </InputGroup>
          <br />
          <br />
        
          <Input
            w={100}
            mt={10}
            ml={70}
            
            type="submit"
            value="Verify"
            bg="#004F9A"
            borderRadius={20}
            color={"white"}
            cursor={"pointer"}
            onClick={()=>setAuth()}
            
          />
          
         


          <br />
          <br />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
