import { useState } from "react";
import { useRecoilState } from "recoil";
import { todos } from "../Atom/todo";
 




export function FilterTodos () {
  const [filter,setFilter]=useState("");
  const [TodoList,setTodoList]=useRecoilState(todos);

  const filteredText=TodoList.filter(todo=>todo.text.toLowerCase().includes(filter.toLowerCase()))
  
  return (
  <>
  <input type="text" onChange={(e)=>{setFilter(e.target.value)}} placeholder="filetertype" ></input>
  {filteredText.map((item)=>(<div key = {item.id}>{item.text}</div>))}
  </>
  
  )
}