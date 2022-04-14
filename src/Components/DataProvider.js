import React, {useState, useEffect, createContext} from 'react'

export const DataContext = createContext();

export const DataProvider= (props) => {
    const [todos, setTodos] = useState([])
    useEffect(() =>{
         localStorage.setItem('todostore', JSON.stringify(todos))
    },[todos])

  return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}

        </DataContext.Provider>

  )
}
