import React, {useState, useContext, useRef, useEffect} from 'react'
import { DataContext} from './DataProvider';

export default function FormInput() {
    const [todos, setTodos] = useContext(DataContext)
    const [todoName, settodoName] = useState ('');
    const todoInput = useRef();

    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false }])
        settodoName ('');
        todoInput.current.focus();
    }
  return (
    
      <form autoComplete="off" onSubmit={addTodo}> 
            <input type="text" name="todos" id="todos"
            required placeholder=" What need to be done?"
            value={todoName}
            onChange={e => settodoName(e.target.value.toLowerCase())} />
            <button type="submit">Create </button>
      </form>
      
    // {name: "cooking", complete:false},
        // {name: "playing", complete:true},
        
  )
}
