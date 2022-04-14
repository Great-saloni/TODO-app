import React, {useState} from 'react'

export default function ListItem({todo,id,checkcomplete,handleEditTodos}) {
    const [onEdit, setonEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)

    const handleOnEdit = () =>{
        setonEdit(true)

    }

    const handleSave = id =>{
        setonEdit(false)
        if(editValue){
            handleEditTodos(editValue,id)

        }else{
            setEditValue(todo.name)
        }
    }

    

    if(onEdit){
        return (
            
                  <li>
                      
                        <input type="text" id="editValue" value={editValue}
                        name="editValue" 
                        onChange={e => setEditValue(e.target.value.toLowerCase())}/>
                      <button onClick={()=> handleSave(id)}>Save</button>
                  </li>
              
        ) 
    }
    else{
        return (
            <ul>
                  <li>
                      <label htmlFor={id} className= {todo.complete ? "active" : ""}>
                          <input type="checkbox" id={id} checked= {todo.complete}
                          onChange={() => checkcomplete(id)} />
                          {todo.name}
                      </label>
                      <button disabled={todo.complete} onClick={handleOnEdit}>edit</button>
                  </li>
              </ul>
        ) 
    }
  
}
