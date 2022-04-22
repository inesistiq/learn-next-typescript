import React from 'react'
import {ToggleAdd} from "../types.d"

interface Props {
    toggleAdd: ToggleAdd;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>
}

const TodoForm: React.FC<Props> = ({toggleAdd, input, setInput}) => {
  return (
    <div>
        <form>
            <input type="text" onChange={e => setInput(e.target.value)} className="border"/>
            <button type="submit" onClick={e =>{
               toggleAdd(input)
               e.preventDefault()     
            }} className="ml-4">
                Add Todo
            </button>
        </form>
    </div>
  )
}

export default TodoForm