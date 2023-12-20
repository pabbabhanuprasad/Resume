import React,{useState} from 'react';

const Todolist = () => {
    const [todo,setTodo]=useState("");
    const[newTodo,setNewTodo]=useState([]);

    const Add=()=>{
        setNewTodo([...newTodo,todo]);
        console.log(newTodo);
        console.log(todo);
    }

  return (
    
    <div>
        <h1>hello from Todolist component</h1>
        <input type="text" value={todo} onChange={((e)=>setTodo(e.target.value))}/>
        <button onClick={Add}>Add</button>
        <ul>
            {newTodo.map((value,index)=>{
                <li key={index}>{value}</li>
            })}
        </ul>
    </div>
  )
}

export default Todolist;