import React from "react";
import { fetchTodos } from "./thunkSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.thunk);
  return (
    <div>
      <button onClick={() => dispatch(fetchTodos())}>test</button>
      {todos.loading && "fetching data"}
      {todos.error && todos.error}
      <div>
        {todos.data.length > 0 &&
          todos.data.map((todo) => (
            <div key={todo.id}>
              <h3> {todo.title}</h3>
              <input type="checkbox" checked={todo.completed} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
