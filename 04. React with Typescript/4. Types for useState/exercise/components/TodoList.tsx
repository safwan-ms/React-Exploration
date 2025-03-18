import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}
const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  return (
    <div>
      <h2>TodoList </h2>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.task}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
    </div>
  );
};
export default TodoList;
