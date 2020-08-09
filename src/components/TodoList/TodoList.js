import React, { useState } from "react";
import store from "../../redux/store/store";
import { updateTodoList } from "../../redux/actions/actions";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function TodoList() {
  const [todo, setTodo] = useState("");
  const { todos } = store.getState();

  store.subscribe(() => console.log(store.getState()));

  return (
    <>
      <h1 className="text-center">TodoList</h1>
      <form>
        <input
          type="text"
          className="p-2 mr-4"
          value={todo}
          onChange={(e) => {
            const value = e.target.value;
            setTodo(value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            store.dispatch(updateTodoList(Number(todo)));
          }}
        >
          Add item
        </button>
      </form>
      <span className="text-center d-block font-weight-bold mt-4">
        {todos.map((todo) => "hello")}
        Todo list is empty
      </span>
    </>
  );
}

export default TodoList;
