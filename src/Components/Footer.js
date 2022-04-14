import React,{useContext, useState} from 'react'
import { DataContext } from './DataProvider'

export default function Footer() {
    const [checkaALL, setCheckAll] =useState(false)
    const [ todos,setTodos] = useContext (DataContext)

    const handleCheckAll = () =>{
        const newTodos = [...todos]
        newTodos.forEach(todos => {
            todos.complete = !checkaALL
        })
        setTodos(newTodos)
        setCheckAll(checkaALL)
    }

    const newTodosComplete = () =>{

        return todos.filter(todo => todo.complete === false)

        }
    
    const deleteTodo = () =>{
        
        setTodos(newTodosComplete())
        setCheckAll(false)
    }
  return (
        <>
      {
          todos.length === 0 ? <h2> Congratulations! Nothing to do </h2>
            : <div className="row">
                    <label htmlfor="all">
                            <input type="checkbox" name="all" id="all" 
                            onChange={handleCheckAll} checked={checkaALL}/>
                            
                            ALL
                        
                    </label>
                    <p> you have {newTodosComplete().length} todo uncompleted </p>
                        <button id="delete" onClick={deleteTodo}>Delete</button>
                </div>
         }    
        </>   
  )
    }    