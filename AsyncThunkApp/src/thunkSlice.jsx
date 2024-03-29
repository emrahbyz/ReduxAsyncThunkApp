import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await axios.get("http://localhost:3000/films");
  console.log(response.data);
  console.log(response.data[1].title);
  return response.data;
});

const thunkSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = "test";
    });
  },
});

export default thunkSlice.reducer;
