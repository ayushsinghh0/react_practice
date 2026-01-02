import { Navigate, useNavigate } from "react-router-dom";

export default function Home(){
    const navigate=useNavigate();
    return (
        <>
        <button onClick={()=>Navigate("")}> Home</button>
        <button> Show</button>
        </>
    )
}