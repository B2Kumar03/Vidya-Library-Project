// import { Slider } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Body from './Body'
import Features from './Features'
import Slider from './Slider'

const Home = () => {
  useEffect(()=>{
     let data=[
      {"id": 1, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 2, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 3, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 4, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 5, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 6, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 7, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 8, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 9, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 10, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 11, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 12, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 13, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 14, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 15, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 16, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 17, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 18, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 19, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 20, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 21, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 22, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 23, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 24, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 25, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 26, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 27, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 28, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 29, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 30, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 31, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 32, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 33, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 34, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 35, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 36, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 37, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 38, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 39, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 40, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 41, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 42, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 43, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 44, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 45, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 46, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 47, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 48, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 49, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 50, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 51, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 52, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 53, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 54, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 55, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 56, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},  
      {"id": 57, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 58, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 59, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 60, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 61, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 62, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 63, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 64, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 65, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 66, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 67, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 68, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 69, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 70, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 71, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 72, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 73, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 74, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 75, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 76, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 77, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 78, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 79, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 80, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 81, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 82, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""},
      {"id": 83, "name": "", "mobile": "", "payment": "", "status": "", "shift": ""}
    ]


  localStorage.setItem("student",JSON.stringify(data))
      
    
      
    
  })
  return (
    <>
    <Slider/>
    <Body/>
    <Features/>
    </>
  )
}

export default Home