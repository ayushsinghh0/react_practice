
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import { useState } from 'react'
import { todos } from '../Atom/todo'
import { FilterTodos } from '../Components/TodoFilter';

function App() {


  return (
    <>
    <RecoilRoot>
      <TodoItemCreater/>
      <FilterTodos/>
       <TodoList/>
    </RecoilRoot>

      
    </>
  )
}

function TodoList() {
  const [todoList] = useRecoilState(todos);

  return (
    <>
      {todoList.map((todoItem) => (
        
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}


function TodoItemCreater(){
  const [inputValue,setInputValue]=useState("");
  const setTodoList=useSetRecoilState(todos);

  const addItem = ()=> {
    setTodoList((e)=>[
      ...e,
      {
        id:getid(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  }

  return(
  <>
  <input type="text" onChange={(e)=>setInputValue(e.target.value)}></input>
  <button onClick={addItem}>Add</button>
  <br></br>
  </>
  );
}

let id=0;
function getid(){
  return id++;
}

function TodoItem({item}){
  const [todoList,setTodoList]=useRecoilState(todos);
  const index=todoList.findIndex((listItem)=>listItem.id===item.id);

  const onedit= (e)=>{
    const val=e.target.value;
    const newList=replaceitem(index,todoList,{
      ...item,
      text: val,
    });
    setTodoList(newList)
  }

  const completion = ()=>{
      const newList=completed({
        ...item,
          isComplete: !item.isComplete,
      },index,todoList);
      setTodoList(newList);
  }

  const deletion=function(){
    const newList=deleted(todoList,index)
    setTodoList(newList);
  }

  return (
    <>
    <input type ="text" value={item.text} onChange={onedit}></input>
    <input type="checkbox" checked={item.isComplete} onChange={completion}></input>
    <button onClick={deletion}></button>
    </>
  )

}


function completed(newvalue,index,arr){
  return [...arr.slice(0,index),newvalue,...arr.slice(index+1)];
}

function deleted(arr,index){
  return [...arr.slice(0,index),...arr.slice(index+1)];
}


function replaceitem(index,arr,newvalue){
  return [...arr.slice(0,index),newvalue,...arr.slice(index+1)];
}

export default App
 