import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../thunkSlice";

const Film = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="p-24">
      {films.loading && "test"}
      {films.loading && films.error}
      <div className="flex flex-wrap justify-center items-center ">
        {films.data.length > 0 &&
          films.data.map((film, key) => (
            <div key={key} className="p-12 ">
              <div>
                <p className=" text-my-text "> {film.title} </p>
              </div>
              <div className="">
                <img className="w-[250] h-[300px] " src={film.thumbnail} />
              </div>
              <div>
                <p className="absolute"> {film.year} </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Film;
