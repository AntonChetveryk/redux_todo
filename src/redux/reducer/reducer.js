import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPATE_TODO_LIST":
      cookies.set("todos", action.payload);

      return { ...state, todos: [...state.todos, action.todo] };
    default:
      return state;
  }
};
