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
} from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import seat from '../assets/seat.png';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const Admin = () => {
  const [data, setData] = useState([]);
  const [delete1,setDelete]=useState(false)
  useEffect(()=>{
      setData(JSON.parse(localStorage.getItem("student"))||[])
      console.log(data);
  },[delete1])
  function deleteData(id){
    let arr= JSON.parse(localStorage.getItem('student'))||[];

    let newData=arr.map((ele)=>{
      if(ele.id==id){
        ele.name=""
        ele.payment=""
        ele.status=false
        ele.shift=""
        ele.mobile=""

        return ele;
      }
      return ele;
    })

  localStorage.setItem("student",JSON.stringify(newData));
  setDelete((prev)=>!prev)

  }


  return (
    <Box w={"80%"} m="auto" mt={100}>
    <Box display={"flex"} justifyContent={"flex-end"} w={"100%"}>
      <Box>
        <input type="text" />
        <Button fontSize={20} p={5} borderRadius={5} >
          Find Booked
        </Button>
        <Button fontSize={20} p={5} ml={5} borderRadius={5} >
          Find Not Booked
        </Button>
      </Box>
    </Box>
    <Box w={"100%"} border={"1px solid black"} mt={20}>
    <TableContainer>
  <Table variant='simple' w={"100%"} >
   
    <Thead border="1px">
      <Tr>
        <Th>Seat no.</Th>
        <Th>Student name</Th>
        <Th>Mobile no.</Th>
        <Th>Payment </Th>
        <Th>Booking date</Th>
        <Th>Status</Th>
        <Th>Shift</Th>
        <Th>Delete</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      {data.map((ele)=>{
        if(ele.status){
          return  <Tr textAlign={"center"}>
          <Td>{ele.id}</Td>
          <Td>{ele.name}</Td>
          <Td >{ele.mobile}</Td>
          <Td >{ele.payment}</Td>
          <Th>{ele.date}</Th>
          <Td >{ele.status?"Booked":"Not Booked"}</Td>
          <Td >{ele.shift}</Td>
          <Td><Button onClick={()=>deleteData(ele.id)}>Delete</Button></Td>
        </Tr>
        }
        
      })}
      
    </Tbody>
   
  </Table>
</TableContainer>
    </Box>
   
  </Box>
  )
}

export default Admin