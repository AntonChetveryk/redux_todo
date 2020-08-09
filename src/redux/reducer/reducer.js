import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPATE_TODO_LIST":
      const newArr = cookies.get("todos") || [];
      console.log(newArr);
      cookies.set("todos", [...newArr, action.payload]);
      console.log(cookies.get("todos"));

      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};
