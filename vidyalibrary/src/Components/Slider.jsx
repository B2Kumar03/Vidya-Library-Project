import { Box, HStack, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { motion } from "framer-motion"

const Slider = () => {

const arr=[img1,img2,img3]

const [counter,setCounter]=useState(0)
const [slider,setSlider]=useState(arr[counter])
useEffect(() => {
  const id = setInterval(() => {
    setCounter((prev) => (prev + 1) % arr.length); // Use modulo to loop back to 0
  }, 1000);

  return () => clearInterval(id);
}, []);

useEffect(() => {
  setSlider(arr[counter]);
}, [counter]);



  return (
    
    <HStack>
      
      <Box height={300} w={"80%"} m="auto"  mt={150}>
       <Image src={slider} alt="img1" w={"100%"} h={"100%"} className='animation'/>
      </Box>
    
    </HStack>

  )
}

export default Slider