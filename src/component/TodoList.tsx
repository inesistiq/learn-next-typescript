import {Todo, ToggleTodo} from "../types.d"

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({todo, toggleTodo}) => {
  return (
    <div>
            <label
                style={{ textDecoration: todo.complete ? "line-through" : undefined }}
            >
                <input
                    type="checkbox"
                    defaultChecked={todo.complete}
                    onChange={() => toggleTodo(todo)}
                />{" "}
                {todo.event}
            </label>
        
    </div>
  )
}

export default TodoList