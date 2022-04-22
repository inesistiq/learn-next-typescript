import {useState} from 'react'
import TodoList from '../component/Todo'
import TodoForm from '../component/TodoForm'
import { Todo } from '../types.d'

const todo: Todo[] = [
    {
        event: "Learning ts",
        complete: true,
      },
      {
        event: "Confused with ts",
        complete: false,
      },
]

const Todo = () => {
    const [todos, setTodos] = useState(todo)
    const [input, setInput] = useState("")

    const toggleTodo = (selectedItem: Todo) => {
        const newItem = todos.map((item) => {
            if (item === selectedItem) {
              item.complete = !item.complete
              return item;
            }
            return item;
          })
          setTodos(newItem)
    }

    const toggleAdd = (item: string) => {
        const newItem: Todo = {
          event: item,
          complete: false,
        }
        setTodos([...todos, newItem])
        setInput("")
      }
      return (
        <>
          <TodoList todos={todos} toggleTodo={toggleTodo}/>
          <TodoForm toggleAdd={toggleAdd} input={input} setInput={setInput}/>
        </>
    );     
}

export default Todo