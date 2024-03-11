import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import seat from "../assets/seat.png";
import { Link, json } from "react-router-dom";

const Booknow = () => {
  const [data, setData] = useState([]);
  const [seat1,setS]=useState(false)
  const [seatNo,setNo]=useState("")
  const [show,setShow]=useState(false)
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("student")) || []);
    console.log(data);
  }, [show]);//button
  function search() {
    const filter = data.filter((ele) => ele.id === seatNo);
    
    console.log("Search term:", seatNo);
    console.log("Filtered data:", filter);
    
    setData(filter);
  }
  
  return (
    <Box w={"80%"} m="auto" mt={100}>
      <Box display={"flex"} justifyContent={"flex-end"} w={"100%"}>

        <Box>

         {seat1?<><input type="text"  placeholder="Enter seat no ."  onChange={(e)=>setNo(e.target.value)}/><button onClick={search}>Search</button><button onClick={()=>setShow((prev)=>!prev)}>Show all</button></>:null}
         
          <Button fontSize={20} p={5} borderRadius={5} onClick={()=>setS((prev)=>!prev)}>
            Find Seat
          </Button>
          
        </Box>
      </Box>
      <SimpleGrid columns={4} spacing="40px" mt={100}>
        {data.map((ele) => {
          return (
            <Box w={250} p={20} className="bookingCard">
              <Image src={seat} />
              <h3>Seat no. : {ele.id}</h3>
              <h3>Fee :300</h3>
              <Text color={ele.status ? "green" : "black"}>
                {" "}
                Stutas :{ele.status ? "Booked" : "Not Booked"}
              </Text>

              {ele.status ? <Text> Student Details :{ele.name},{ele.mobile}</Text> : null}
              <Link to={`/book/${ele.id}`}>
                <Button fontSize={20} p={5} bg={"green"} color={"white"}>
                  Book now
                </Button>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Booknow;
