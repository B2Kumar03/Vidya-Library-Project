import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import image from "../assets/image.png";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate=useNavigate();
  return (
    <HStack>
      <Box
      className="sticky"
        display={"flex"}
        justifyContent={"space-around"}
        w={"100%"}
        margin={"auto"}
        border={"1px solid black"}
        alignItems={"center"}
        p={5}
        bg={"#011627"}
        color={"white"}
      >
        <Box>
          <Box className="roboto-bold" display={"flex"} alignItems={"center"}>
            <Box>
              <Image src={image} alt="Logo" w={50} />
            </Box>
            <Box fontSize={30}>VIDYA LIBRARY</Box>
          </Box>
        </Box>
        <Box
          display={{
            base: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          }}
        w={"50%"}
        h={"100%"}>
          <Box display={"flex"} justifyContent={"space-between"} fontSize={20}>
            <Box  display={"flex"} alignItems={"center"} className="tab" cursor={"pointer"} p={5}>
              <Box >Featured</Box>
              <Box>
                <FaAngleDown />
              </Box>
            </Box>
            <Box cursor={"pointer"}  className="tab" p={5}>
              Address
            </Box>
            <Box cursor={"pointer"} className="tab" p={5} onClick={()=>navigate("/booknow")}>
              Book now
            </Box>
            <Box cursor={"pointer"}  className="tab" p={5} onClick={()=>navigate("/login")}>
              Login
            </Box>

            <Box cursor={"pointer"}  className="tab" p={5} onClick={()=>navigate("/admin")}>
              Admin pannel
            </Box>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
};

export default Navbar;
