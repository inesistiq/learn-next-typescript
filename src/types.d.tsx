export interface Todo{
    event: string;
    complete: boolean;
}

export type ToggleTodo = (selectedTodo: Todo) => void;

export type ToggleAdd = (item: string) => void;