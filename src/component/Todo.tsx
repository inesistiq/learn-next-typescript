import TodoList from "./TodoList"
import {ToggleTodo, Todo} from '../types.d'


interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo
}

const Todo: React.FC<Props> = ({todos, toggleTodo}) => {
  return (
    <div>
        {todos.map((todo,id) => (
            <TodoList key={id} todo={todo} toggleTodo={toggleTodo} />
        ))}
    </div>
  )
}

export default Todo