import { configureStore } from "@reduxjs/toolkit";
import thunkSlice from "./thunkSlice";

export const store = configureStore({
  reducer: {
    films: thunkSlice,
  },
});
