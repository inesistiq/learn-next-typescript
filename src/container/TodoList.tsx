import { Todo, ToggleTodo } from "../types.d"
import { Input } from "../component/Input/Input"

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <div>

      <Input
        type="checkbox"
        defaultChecked={todo.complete}
        onChange={() => toggleTodo(todo)}
      />{" "}
      {todo.event}


    </div>
  )
}

export default TodoList