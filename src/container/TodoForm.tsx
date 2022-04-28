import React from 'react'
import {ToggleAdd} from "../types.d"
import { Button } from '../component/Button/Button'
import { Input } from '../component/Input/Input'

interface Props {
    toggleAdd: ToggleAdd;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>
}

const TodoForm: React.FC<Props> = ({toggleAdd, input, setInput}) => {
  return (
    <div>
        <form>
            <Input type='text' onChange={e => setInput(e.currentTarget.value)} classes='border' />
            <Button
            type="submit"
            classes='bg-blue-500 ml-5'
            onClick={(e)  =>{
               toggleAdd(input)
               e.preventDefault()     
            }}
            >
                Add Todo
            </Button>
        </form>
    </div>
  )
}

export default TodoForm