import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,useNavigate } from 'react-router-dom';
import Home from './pages/pets';

function App() {
  const [Pets, setPets] = useState([]);
  const Navigate=useNavigate();
  return (
    <>
    <button onClick={()=>Navigate("/pets")}> Show All Dogs </button>
    <Routes>
      <Route path="/pets" element={<Home/>}/>
      </Routes>
    <div className='head'>Pet Adoption</div>
      <PetCreater />


    </>
  )
}

function Show() {

}

function PetCreater() {
  const [petname, SetPetName] = useState("");
  const [petType, SetPetType] = useState("");
  const [breed, SetBreed] = useState("");
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Phoneno, SetPhoneno] = useState("");


  const [pet,SetPets]=useState([]);


  const adddetails=()=>{
    console.log("ok");
    SetPets((e)=>[...e,{
      id:getid(),
      PetName : petname,
      PetType : petType,
      Breed : breed,
      Name : Name,
      Email : Email,
      Phoneno : Phoneno
    }
  ,])
   SetPetName('');
   SetPetType('');
   SetBreed('');
   SetName('');
   SetEmail('');
   SetPhoneno('');
  }


  return (
    <div className='box'>
      Pet Name
      <br></br>
      <input placeholder='Pet Name' onChange={(e) => {
        SetPetName(e.target.value);
        console.log(e.target.value);
      }}></input>
      <br></br>
      Pet Type
      <br></br>
      <input onChange={(e) => {
        SetPetType(e.target.value);
      }} placeholder='Pet Type'></input>
      <br></br>
      Breed
      <br></br>
      <input placeholder='Breed' onChange={(e) => {
        SetBreed(e.target.value)
      }}></input>
      <br></br>
      Your Name
      <br></br>
      <input placeholder='Your Name' onChange={(e) => {
        SetName(e.target.value);
      }}></input>
      <br></br>
      Email
      <br></br>
      <input placeholder='Email' onChange={(e) => {
        SetEmail(e.target.value);
      }}></input>
      <br></br>
      Phone No.
      <br></br>
      <input placeholder='Phone No.' onChange={(e) => {
        SetPhoneno(e.target.value)
      }}></input>
      <br></br>
      <button onClick={adddetails}> Add </button>
    </div>
  )

}

let id=0;
function getid(){
  id++;
  return id;
}
export default App
