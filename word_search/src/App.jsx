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
  const [sentences,setSentences]=useState([]);
  const [filter,setFilter]=useState("");
  

  function handleFileChange(e){
    const file=e.target.files[0];
    const reader=new FileReader();
    reader.onload=function(){
      const text = reader.result;
      const lines = text.split("\n"); // convert string → array
      setSentences(lines);    }
    reader.readAsText(file);
  }
  
  
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
    if(filter.length > 0 && filterindex==filter.length)
      b.push(sentences[i]);
    else {
      c.push(sentences[i]);
    }
  }
  return {b,c};
  },[filter,sentences]); 

  return (
    <>
<input 
        type="file" 
        accept=".txt"
        onChange={handleFileChange}
      />
    <input type="text" onChange={(e)=>{
      setFilter(e.target.value);
    }}></input>
    {
      b.map((sent,index)=>(
        <p style = {{backgroundColor:"whitesmoke"}}key= {index} >
          <Color sentence={sent} filter={filter}></Color></p>

      ))
    }
    {
      c.map((sent,index)=>(
        <p key= {index}  >{sent}</p>

      ))
    }
     </>
  )
}

function Color({sentence,filter}){
  let k=0;
  let nonmatching=""
  let endmatching=""
  let matching=""
  for(let i=0;i<sentence.length;i++){
    if(k==0 && filter[k]!=sentence[i]){
      nonmatching+=sentence[i];
    }
    if(sentence[i]==filter[k]&&k<filter.length){
     k++;
     matching+=sentence[i];
    }
    if(k>0 && k>=filter.length){
      endmatching+=sentence[i];
    }
  }
  return <>
  <span>
    {nonmatching}
  </span>
  <span style={{backgroundColor:"aqua"}}>
    {matching}
  </span>
  <span>
    {endmatching}
  </span>
  </>
  //return 
  // <span>
  // <span>non matching value</span>
  //<span>matching</span>
  //<span>non matching value</span>
  // </span>
}


/* 

function Comp(){
  const [inputvalue,setInputvalue]=useState(1);
  const b=useMemo(()=>{
    let a=inputvalue;
  for(let i=1;i<inputvalue;i++){
    a*=i;
  }
  return a;
  },[inputvalue])
  
  
  
  return <span><input 
  type="number" 
  onChange={(e)=>{
    setInputvalue(Number( e.target.value))
  }}></input><br></br>
  calculated :{b}
  </span>
  
} */
export default App
