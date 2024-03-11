import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import image from '../assets/image.png'
import { type } from "@testing-library/user-event/dist/type";
import { motion } from "framer-motion";


const intialstate={
  name:"",
  mobile:"",
  payment:"",
  shift:"",
  date:""


}
const reducer=(state,action)=>{
  console.log(action.payload);
  switch(action.type){
    case "NAME": return {...state , name: action.payload };
    case "SHIFT": return {...state , shift: action.payload };
    case "MOBILE":return { ...state , mobile : action.payload};
    case "FEE":return { ...state , payment : action.payload};
    case "DATE":return { ...state , date : action.payload};
    default: return state;
  }

}
const Checkout = () => {
  const { id } = useParams();
  console.log(id);
  const [state,dispatch]=useReducer(reducer,intialstate)
  const [lastDate,setDate]=React.useState("");


  function submit(e){
      e.preventDefault();
      let arr=JSON.parse(localStorage.getItem("student")) ||[];
      console.log(state);
      let newdata=arr.map((ele)=>{
        if(ele.id===Number(id)){
          ele.name=state.name;
          ele.shift=state.shift;
          ele.mobile=state.mobile;
          ele.payment=state.payment;
          ele.status=true
          ele.date=state.date
          return ele;
        }
        return ele;
      })

    localStorage.setItem("student", JSON.stringify(newdata));
  }

  


  return (
    <div
      style={{
        marginTop: "100px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      d
      <div style={{ width: "350px",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",padding:"30px"}} className="form">

        <img src={image} alt="" width="50px"/>
        <h1>Booking </h1>
        <label htmlFor="">Enter  your name</label>
        <input  style={{ width: "300px",height:"40px", font: "30px" }} onChange={(e)=>dispatch({type:"NAME",payload:e.target.value})}/> <br />
        <label htmlFor="">Enter shift</label>
        <input  style={{ width: "300px", font: "20px",height:"40px" }} onChange={(e)=>dispatch({type:"SHIFT",payload:e.target.value})}/> <br />
        <label htmlFor="">Enter Mobile number</label>
        <input  style={{ width: "300px", font: "20px",height:"40px" }} onChange={(e)=>dispatch({type:"MOBILE",payload:e.target.value})}/> <br />
        <label htmlFor="">Select today date(intial date):</label>
        <input type="date"  style={{ width: "300px", font: "20px",height:"40px" }} onChange={(e)=>{dispatch({type:"DATE",payload:e.target.value});}}/> <br />
        <label htmlFor="">Booked till :</label>
        <input type="text"  style={{ width: "300px", font: "20px",height:"40px" }} value={state.date?"Booked for next 30 days":null}/> <br />
        
        <label htmlFor="">Payment</label>
        <input  style={{ width: "300px", font: "20px",height:"40px" }} onChange={(e)=>dispatch({type:"FEE",payload:e.target.value})}/>
        <br />
        <input  type="submit" value={"Continue"} style={{ width: "300px", font: "20px",height:"40px", backgroundColor:"green", borderRadius:"5px",color:"white" }} onClick={submit}/>
      </div>
    </div>
  );
};

export default Checkout;
