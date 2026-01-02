import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home({pet}){
    const navigate=useNavigate();
    const [check,SetCheck]=useState(false);
    return (
        <>
        <button onClick={()=>navigate("/")}> Home</button>
        
         <button onClick={()=>SetCheck(!check)}> Show</button>
        <div>{check &&  pet.map(p=>(
            <div key={p.id}>
                <br></br>
                Pet Name : {p.PetName}
                <br></br>
                Pet Breed : {p.Breed}
                <br></br>
                Pet Type : {p.PetType}
                <br></br>
        </div>) )}</div> 
        </>
    )
}
/* a.map(p=>(< key=id ></>)) */