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
    <div className=" p-32 flex items-center justify-center sm:p-8 md:p-12 lg:p-16  ">
      {films.loading && "test"}
      {films.loading && films.error}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center ">
        {films.data.length > 0 &&
          films.data.map((film, key) => (
            <div key={key} className="p-12  ">
              <div className="">
                <p className=" text-my-text w-5/6  "> {film.title} </p>
              </div>
              <div className="">
                <img
                  className="w-[250px] h-[300px] hover:scale-95 ease-in-out duration-700   "
                  src={film.thumbnail}
                />
              </div>
              <div>
                <p className="absolute text-my-text "> {film.year} </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Film;
