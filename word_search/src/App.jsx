import { useEffect, useMemo, useState } from 'react'

const word=["hii","my","name","is","ayush","raj","i","am","software","enginner"];
const sentence=[];
let para="";

for(let i=1;i<1000;i++){
  let a=Math.random()*10;
  
  if(i%10==0){
    sentence.push(para );
    para="";
  }
  a=a-a%1;
 
  para+=word[a];
  para+=" "
}

function App() {
  const [sentences,setSentences]=useState(sentence);
  const [filter,setFilter]=useState("");
  
  
  const {b,c}=useMemo(()=>{
  const b=[]
  const c=[]

  for(let i=0;i<sentences.length;i++){
    
    let index=0;
    let filterindex=0;
    while(index<sentences[i].length && filterindex<filter.length){
      if(filter[filterindex]==sentences[i][index]){
        filterindex++;
        
      }
      index++;
    }
    if(filterindex==filter.length)
      b.push(sentences[i]);
    else {
      c.push(sentences[i]);
    }
  }
  return {b,c};
  },[filter,sentences]); 

  return (
    <>
    <input type="text" onChange={(e)=>{
      setFilter(e.target.value);
    }}></input>
    {
      b.map((sent,index)=>(
        <p key= {index} >{sent}</p>

      ))
    }
    {
      c.map((sent,index)=>(
        <p key= {index} >{sent}</p>

      ))
    }
     </>
  )
}


function Comp(){
  const [inputvalue,setInputvalue]=useState(1);
  const b=useMemo(()=>{
    let a=inputvalue;
  for(let i=1;i<inputvalue;i++){
    a*=i;
  }
  return a;
  },[inputvalue])
  
  
  
  return <div><input 
  type="number" 
  onChange={(e)=>{
    setInputvalue(Number( e.target.value))
  }}></input><br></br>
  calculated :{b}
  </div>
  
}
export default App
