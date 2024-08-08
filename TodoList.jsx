import {useState} from 'react';
export default function TodoList() {
   
let [Todos, setTodos]= useState(["sample task"]);
   
let[newTodos, setnewTodos]= useState("");

   
let addnewTask = ()=> {
  setTodos([...Todos, newTodos]);
  setnewTodos("");
};

let updateTodoValue = (event) => {
   setnewTodos(event.target.value);
};

 return (
   <div>
     <input placeholder="enter the todo"value={newTodos} onChange={updateTodoValue}></input>
      <br></br>
<button onClick={addnewTask}> submit</button>

      <br></br> <br></br>

      <hr></hr>
      <h4>Todo task</h4>

      <ul> {
         todos.map((todo)=>{
            <li>{todo}</li>
         })
      }</ul>
      

      
   </div>
 );

}
