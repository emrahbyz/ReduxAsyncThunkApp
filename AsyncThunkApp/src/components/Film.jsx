import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../thunkSlice";

const Film = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);

  return (
    <div className="p-24">
      <button
        className="text-5xl text-red-600 w-[600px] "
        onClick={() => dispatch(fetchTodos())}
      >
        Fetch Todos
      </button>
      {films.loading && "test"}
      {films.loading && films.error}
      <div>
        {films.data.length > 0 &&
          films.data.map((film, key) => (
            <div key={key}>
              <h3 className="text-white text-2xl"> {film.title} </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Film;
