import {useState} from 'React';
import { v4 as uuidv4 } from "uuid";


export default function TodoList() {
   
let [Todos, setTodos]= useState([{ task: "sample-task", id: uuidv4() }]);
   
let[newTodos, setnewTodos]= useState("");

   
let addnewTask = ()=> {
  setTodos ((prevTodos) => {
return [...prevTodos, {task: newTodos, id: uuidv4() }];
});
setNewTodos ("");
}



let updateTodoValue = (event) => { setnewTodos(event.target.value);
};


let deleteTodo =(id)=> {
setTodos((prevTodos)=>Todos.filter((prevTodos) => prevTodos.id != id));
};

   
 return (
   <div>
     <input placeholder="enter the todo"value={newTodos} onChange={updateTodoValue}></input>
      <br></br>
     <button onClick={addnewTask}> submit</button>

      <br></br> <br></br>
      <hr></hr>
      
      <h4>Todo task</h4>

   <ul>
      {Todos.map((todo) => (
      <li key={todo.id}>
      <span> {todo.task}</span>
      &nbsp;&nbsp;&nbsp;
      <button onClick={()=> deleteTodo(todo.id)}>delete</button>
      
      </li>
      ))}
    
   </ul>
          
   </div>
 );                   
}
