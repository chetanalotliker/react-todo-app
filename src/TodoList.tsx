import { Fragment } from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo, ToggleTodo } from "./types";

interface Props {
    todos: Todo[],
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({todos,toggleTodo})=>{
    return (
      <Fragment>
      <h2>TODO List</h2>
        <ul>
          {todos.map((todo) => (
            <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
        </Fragment>
      );
}