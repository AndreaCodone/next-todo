import React, { createContext, useContext, useReducer } from "react";
import todo from "../utils/mock";
import styles from "@/styles/Todo.module.scss";

// Definisci il contesto "TodoContext"
export const TodoContext = createContext();

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      );
    case "INCOMPLETE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: false } : todo
      );
    default:
      return state;
  }
};

const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, todo);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <h1 className={`${styles.title}`}>TODO</h1>
      <TodoItems />
    </TodoContext.Provider>
  );
};

const TodoItems = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleComplete = (id) => {
    dispatch({ type: "COMPLETE_TODO", payload: id });
  };

  const handleIncomplete = (id) => {
    dispatch({ type: "INCOMPLETE_TODO", payload: id });
  };

  return (
    <ul className={`${styles.home}`}>
      {state.map((todo) => (
        <li className={`${styles.item}`} key={todo.id}>
          {todo.task} - {todo.completed ? "Completato" : "Da completare"}
          <button onClick={() => handleComplete(todo.id)}>Effettuato</button>
          <button onClick={() => handleIncomplete(todo.id)}>
            Da Effettuare
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
